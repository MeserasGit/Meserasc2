<?php
class CMerchants
{	
	public static function get($merchant_id='')
	{
		$dependency = CCacheData::dependency();
		$model = AR_merchant::model()->cache(Yii::app()->params->cache, $dependency)->find('merchant_id=:merchant_id', 
		array(':merchant_id'=>$merchant_id)); 
		if($model){
			return $model;
		}
		throw new Exception( 'merchant not found' );
	}
	
	public static function getByUUID($merchant_uuid='')
	{
		$dependency = CCacheData::dependency();
		$model = AR_merchant::model()->cache(Yii::app()->params->cache, $dependency)->find('merchant_uuid=:merchant_uuid', 
		array(':merchant_uuid'=>$merchant_uuid)); 
		if($model){
			return $model;
		}
		throw new Exception( 'merchant not found' );
	}
	
	public static function getTotalOrders($merchant_id=0)
	{
		$draft = AttributesTools::initialStatus();
		$not_in_status = AOrderSettings::getStatus(array('status_cancel_order','status_rejection'));
		array_push($not_in_status,$draft);    		
		$criteria=new CDbCriteria();
		$criteria->select="sum(total) as total";		
		$criteria->condition = "merchant_id=:merchant_id";		    
		$criteria->params  = array(
		  ':merchant_id'=>intval($merchant_id)		  
		);				
		$criteria->addNotInCondition('status', (array)$not_in_status );
		$count = AR_ordernew::model()->count($criteria); 
		return intval($count);
	}
	
	public static function getMerchantType($merchant_id=0)
	{
		$model = self::get($merchant_id);
		if($model){
			return $model->merchant_type;
		}
	}

	public static function getBanner($merchant_id=0,$owner='merchant')
	{		
		$criteria=new CDbCriteria();

		if($merchant_id>0){
			$criteria->condition = "owner=:owner AND meta_value1=:meta_value1 AND status=:status";		    
			$criteria->params  = array(
			':owner'=>$owner,
			':meta_value1'=>intval($merchant_id),
			':status'=>1
			);				
		} else {
			$criteria->condition = "owner=:owner AND status=:status";		    
			$criteria->params  = array(
			':owner'=>$owner,			
			':status'=>1
			);		
		}
		$criteria->order = "sequence ASC";		
		$cache = CCacheData::dependency();
		$model = AR_banner::model()->cache(Yii::app()->params->cache, CCacheData::dependency() )->findAll($criteria); 
		if($model){
			$data = [];
			foreach ($model as $items) {
				$data[] = [
					'banner_id'=>$items->banner_id,
					'banner_uuid'=>$items->banner_uuid,
					'title'=>CHtml::encode($items->title),
					'banner_type'=>$items->banner_type,
					'image'=>CMedia::getImage($items->photo,$items->path),
					'merchant_id'=>$items->meta_value1,
					'item_id'=>$items->meta_value2,
					'featured'=>$items->meta_value3,
					'cuisine_id'=>$items->meta_value4,
				];
			}			
			return $data;
		}
		throw new Exception( 'Banner not found' );
	}

	public static function MapsConfig($merchant_id=0,$geocoding_api = true)
	{		
		if($merchant_id>0){
			$items = OptionsTools::find([
				'merchant_map_provider','merchant_google_geo_api_key','merchant_google_maps_api_key','merchant_mapbox_access_token'
			],$merchant_id);

			$provider = isset($items['merchant_map_provider'])?$items['merchant_map_provider']:'';
			$google_geo_api_key = isset($items['merchant_google_geo_api_key'])?$items['merchant_google_geo_api_key']:'';
			$google_maps_api_key = isset($items['merchant_google_maps_api_key'])?$items['merchant_google_maps_api_key']:'';
			$mapbox_access_token = isset($items['merchant_mapbox_access_token'])?$items['merchant_mapbox_access_token']:'';
			
			MapSdk::$map_provider = $provider;
			MapSdk::setKeys(array(
			  'google.maps'=>$geocoding_api==true?$google_geo_api_key:$google_maps_api_key,
			  'mapbox'=>$mapbox_access_token
			));
			return array(
				'provider'=>MapSdk::$map_provider,
				'key'=>MapSdk::$api_key,
				'zoom'=>15,		  
				'icon'=>websiteDomain().Yii::app()->theme->baseUrl."/assets/images/marker2@2x.png",
				'icon_merchant'=>websiteDomain().Yii::app()->theme->baseUrl."/assets/images/restaurant-icon1.png",
				'icon_destination'=>websiteDomain().Yii::app()->theme->baseUrl."/assets/images/home-icon1.png",
				'default_lat'=> '34.04703',
				'default_lng'=> '-118.246860',
			  );			
		}
		return false;
	}

	public static function getListByID($merchant_ids=array())
	{
		$criteria=new CDbCriteria();
		$criteria->addInCondition("merchant_id",(array)$merchant_ids);
		if($model = AR_merchant::model()->findAll($criteria)){
			$data = [];
			foreach($model as $items){
				$data[$items->merchant_id] = [
					'merchant_id'=>$items->merchant_id,
					'restaurant_name'=>$items->restaurant_name,
					'address'=>$items->address,
					'latitude'=>$items->latitude,
					'lontitude'=>$items->lontitude,
					'contact_phone'=>$items->contact_phone,
					'contact_email'=>$items->contact_email,
					'logo'=>$items->logo,
					'logo_url'=>CMedia::getImage($items->logo,$items->path),
				];
			}
			return $data;
		}
		throw new Exception( HELPER_NO_RESULTS );
	}

	public static function getListMerchantZone($merchant_ids=array())
	{
		$query = CommonUtility::arrayToQueryParameters($merchant_ids);
		$stmt = "
		SELECT a.merchant_id,
		
		IFNULL((
			select GROUP_CONCAT(DISTINCT meta_value SEPARATOR ',')
			from {{merchant_meta}}
			where merchant_id = a.merchant_id
			and meta_name = 'zone'			
		),'') as items

		FROM {{merchant}} a
		WHERE merchant_id IN (".$query.")
		";		
		if($res = Yii::app()->db->createCommand($stmt)->queryAll()){
			$data = [];
			foreach($res as $items){				
				$data[$items['merchant_id']] = explode(",",$items['items']);
			}
			return $data;
		}
		return false;
	}

	public static function getCommissionData($merchant_id=0)
	{
		$model = AR_merchant_commission_order::model()->findAll("merchant_id=:merchant_id",[
			':merchant_id'=>intval($merchant_id)
		]);
		if($model){
			$commission_type = []; $commission_value = [];
			foreach ($model as $items) {
				$commission_type[$items->transaction_type] = $items->commission_type;
				$commission_value[$items->transaction_type] = $items->commission;
			}
			return [
				'commission_type'=>$commission_type,
				'commission_value'=>$commission_value,
			];
		}
		return false;
	}

	public static function getOldCommissionData($commissionType='',$commission=0)
	{		
		if($list = CServices::Listing(Yii::app()->language)){
			$commission_type = []; $commission_value = [];
			foreach ($list as $items) {
				$commission_type[$items['service_code']] = $commissionType;
				$commission_value[$items['service_code']] = $commission;
			}
			return [
				'commission_type'=>$commission_type,
				'commission_value'=>$commission_value,
			];
		}
		return false;
	}

	public static function getCommissionByTransaction($merchant_id=0,$transaction_type='')
	{
		$model = AR_merchant_commission_order::model()->find("merchant_id=:merchant_id AND transaction_type=:transaction_type",[
			':merchant_id'=>intval($merchant_id),
			':transaction_type'=>$transaction_type
		]);
		if($model){
			return [
				'commission_type'=>$model->commission_type,
				'commission'=>$model->commission
			];
		}
		return false;
	}	

	public static function getOpeningHours($merchant_id=0, $format_hours=false,$with_default=false)
	{
		$data = [];
		$model = AR_opening_hours::model()->findAll("merchant_id=:merchant_id",[
			':merchant_id'=>intval($merchant_id)
		]);
		if($model){			
			foreach ($model as $items) {
				$data[$items->day][] = [
					'id'=>$items->id,
					'status'=>$items->status,
					'close'=>$items->status=="close"?true:false,
					'start_time'=> $format_hours? Date_Formatter::Time($items->start_time,"HH:mm",true) : $items->start_time,
					'end_time'=> $format_hours ? Date_Formatter::Time($items->end_time,"HH:mm",true) : $items->end_time,
					// 'start_time'=> $format_hours? Date_Formatter::Time($items->start_time) : $items->start_time,
					// 'end_time'=> $format_hours ? Date_Formatter::Time($items->end_time) : $items->end_time,
					'custom_text'=>$items->custom_text
				];
			}			
		} else {
			if($with_default){			
				$days = AttributesTools::dayList();
				foreach ($days as $day_code => $day) {
					$data[$day_code][] = [
						'id'=>0,
						'status'=>"open",
						'close'=>false,
						'start_time'=>"00:00",
						'end_time'=>"00:00",
						'custom_text'=>""
					];
				}
		    }
		}
		return $data;
	}

	public static function BannerItems()
	{
		$stmt = "	
		SELECT
		a.meta_value2 as item_id,
		b.item_token as item_uuid,
		c.cat_id,
		d.restaurant_slug

		FROM {{banner}} a
		LEFT JOIN {{item}} b
		on
		a.meta_value2 = b.item_id

		LEFT JOIN (
		SELECT cat_id,item_id from {{item_relationship_category}}
		) c
		on a.meta_value2  = c.item_id

		LEFT JOIN (
		select merchant_id,restaurant_slug from {{merchant}}
		) d
		on a.meta_value1  = d.merchant_id

		WHERE
		a.owner='admin'
		and a.banner_type='food'
		and a.status=1
		";
		if($res = CCacheData::queryAll($stmt)){
			$data = [];
			foreach ($res as $items) {
				$data[$items['item_id']] = $items;
			}
			return $data;
		}
		return false;
	}
	
	public static function BannerMerchant()
	{
		$stmt = "
		SELECT
		distinct a.meta_value1 as merchant_id,
		b.restaurant_slug

		FROM {{banner}} a
		left join {{merchant}} b
		on
		a.meta_value1 = b.merchant_id

		where
		a.owner='admin'
		and a.banner_type='restaurant'
		and a.status=1
		";
		if($res = CCacheData::queryAll($stmt)){
			$data = [];
			foreach ($res as $items) {
				$data[$items['merchant_id']] = $items;
			}
			return $data;
		}
		return false;
	}
	
	public static function BannerCuisine($lang=KMRS_DEFAULT_LANGUAGE)
	{
		$stmt="
		SELECT 
		a.cuisine_id,		
		a.cuisine_name as original_cuisine_name, 
		b.cuisine_name		
		FROM {{cuisine}} a		

		left JOIN (
		   SELECT cuisine_id, cuisine_name FROM {{cuisine_translation}} where language =".q($lang)."
		) b 
		on a.cuisine_id = b.cuisine_id
		
		WHERE 		
		a.cuisine_name IS NOT NULL AND TRIM(a.cuisine_name) <> ''		
		ORDER BY a.sequence ASC
		";		
		if($res = CCacheData::queryAll($stmt)){
			foreach ($res as $items) {
				$data[$items['cuisine_id']] = !empty($items['original_cuisine_name'])?$items['original_cuisine_name']:$items['cuisine_name'];
			}
			return $data;
		}
		return false;
	}
	
}
/*end class*/