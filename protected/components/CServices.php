<?php
class CServices
{
	public static function Listing($lang = KMRS_DEFAULT_LANGUAGE)
	{		
		$stmt="
		SELECT 
		a.service_id,
		a.service_code,
		a.service_name as original_service_name,
		b.service_name,
		a.description
		FROM {{services}} a		
		left JOIN (
			SELECT service_id, service_name FROM {{services_translation}} where language = ".q($lang)."
		) b 
		on a.service_id = b.service_id
		WHERE a.status = 'publish'
		ORDER BY sequence ASC
		";				
		$dependency = new CDbCacheDependency("SELECT MAX(date_modified) FROM {{services}}");
		if($res = Yii::app()->db->cache(Yii::app()->params->cache, $dependency)->createCommand($stmt)->queryAll()){			
			$data = array();
			foreach ($res as $val) {	
				$val['service_name']= empty($val['service_name']) ?   CHtml::decode($val['original_service_name']) : CHtml::decode($val['service_name']);				
				$val['description'] = t($val['description']);
				$data[$val['service_code']]=$val;
			}			
			return $data;
		}
		throw new Exception( 'no results' );
	}
	
	public static function List($lang = KMRS_DEFAULT_LANGUAGE)
	{		
		$stmt="
		SELECT 
		a.service_id,
		a.service_code,
		a.service_name as original_service_name,
		b.service_name,
		a.description
		FROM {{services}} a		
		left JOIN (
			SELECT service_id, service_name FROM {{services_translation}} where language = ".q($lang)."
		) b 
		on a.service_id = b.service_id
		WHERE a.status = 'publish'
		ORDER BY sequence ASC
		";				
		$dependency = new CDbCacheDependency("SELECT MAX(date_modified) FROM {{services}}");
		if($res = Yii::app()->db->cache(Yii::app()->params->cache, $dependency)->createCommand($stmt)->queryAll()){			
			$data = array();
			foreach ($res as $val) {	
				$data[]	= [
					'id'=>$val['service_id'],
					'name'=>empty($val['service_name']) ?   CHtml::decode($val['original_service_name']) : CHtml::decode($val['service_name']),
					'description'=>'',
					'url_image'=>CMedia::getImage($val['service_name'],$val['service_name'],'@thumbnail',CommonUtility::getPlaceholderPhoto('item')),
					'url_icon'=>CMedia::getImage($val['service_name'],$val['service_name'],'@thumbnail',CommonUtility::getPlaceholderPhoto('item')),
				];
			}			
			return $data;
		}
		throw new Exception( 'no results' );
	}

	public static function getFirstService()
	{	
		$criteria=new CDbCriteria();		
		$criteria->addInCondition('status', ['publish'] );
		$criteria->order ="sequence ASC";
		$model = AR_services::model()->find($criteria); 		
		if($model){
			return $model->service_code;
		}
		return false;
	}
	
	public static function getSetService($cart_uuid='')
	{
		$transaction_type='';
		try {			
			$merchant_id = CCart::getMerchantId($cart_uuid);
			$transaction_type = CCart::cartTransaction($cart_uuid,Yii::app()->params->local_transtype,$merchant_id);						
		} catch (Exception $e) {			
			if($model = CCart::getAttributes($cart_uuid,Yii::app()->params->local_transtype)){
			  $transaction_type =  $model->meta_id;
			} else $transaction_type = CServices::getFirstService();
		}
		return $transaction_type;
	}
	
	
}
/*end class*/