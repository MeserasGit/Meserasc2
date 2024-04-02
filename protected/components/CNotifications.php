<?php
class CNotifications
{
	
	public static function getOrder($order_uuid='', $payload = array() )
	{	
			
		$merchant_info = array(); 
		$items = array(); 
		$summary = array(); 
		$total = 0;
		$summary = array(); 
		$order = array(); 
		$meta = array();
		$order_info = array(); 
		$customer = array();
		$site_data = array(); 
		$print_settings = array();		
		$logo = ''; 
		$total = '';
		
		$exchange_rate = 1;
		$model_order = COrders::get($order_uuid);
		
		if($model_order->base_currency_code!=$model_order->use_currency_code){
			$exchange_rate = $model_order->exchange_rate>0?$model_order->exchange_rate:1;
			Price_Formatter::init($model_order->use_currency_code);
		}
		Price_Formatter::init($model_order->use_currency_code);			 
		COrders::setExchangeRate($exchange_rate);

		COrders::getContent($order_uuid,Yii::app()->language);
        //$merchant_id = COrders::getMerchantId($order_uuid);
		$merchant_id = $model_order->merchant_id;
        if (in_array('merchant_info',$payload)){
           $merchant_info = COrders::getMerchant($merchant_id,Yii::app()->language);
        }
        
        if (in_array('items',$payload)){
           $items = COrders::getItems();		    
        } 
        
        if (in_array('total',$payload)){
            $total = COrders::getTotal();
        }
        
        if (in_array('summary',$payload)){
            $summary = COrders::getSummary();	
        }
        
        if (in_array('order_info',$payload)){
          $order = COrders::orderInfo(Yii::app()->language, date("Y-m-d"),true );	
          $order_info = isset($order['order_info'])?$order['order_info']:'';
          
          if (in_array('customer',$payload)){
	          $client_id = $order?$order['order_info']['client_id']:0;		    
	          $customer = COrders::getClientInfo($client_id);
          }
        }        
        		                
		if (in_array('logo',$payload)){	     
			$print_settings = AOrderSettings::getPrintSettings();   
		}
				
		if (in_array('meta',$payload)){	     
			$meta  = COrders::orderMeta();
		}
    
		$site_data = OptionsTools::find(
          array('website_title','website_address','website_contact_phone','website_contact_email')
        );
	    $site = array(
	      'title'=>isset($site_data['website_title'])?$site_data['website_title']:'',
	      'address'=>isset($site_data['website_address'])?$site_data['website_address']:'',
	      'contact'=>isset($site_data['website_contact_phone'])?$site_data['website_contact_phone']:'',
	      'email'=>isset($site_data['website_contact_email'])?$site_data['website_contact_email']:'',		      
	    );
	    
	    $label = array(
	      'date'=>t("Delivery Date/Time"),
	      'items_ordered'=>t("ITEMS ORDERED"),
	      'qty'=>t("QTY"),
	      'price'=>t("PRICE"),
	      'delivery_address'=>t("DELIVERY ADDRESS"),
	      'summary'=>t("SUMMARY")
	    );	    
	    if($order_info['service_code']=="pickup"){
	    	$label['date']=t("Pickup Date/Time");
	    } elseif ( $order_info['service_code']=="dinein" ){
	    	$label['date']=t("Dinein Date/Time");
	    }
	    	    	   
	    $order_type=''; 
	    $services = isset($order['services'])?$order['services']:'';
	    $service_code = $order['order_info']['service_code'];	    
	    if($services[$service_code]){	    	
	    	$order['order_info']['order_type'] = $services[$service_code]['service_name'];
	    }
	    
	    
	    	   	    		                		      
	    $data = array(		       
	       'site'=>$site,
	       'merchant'=>$merchant_info,
	       'order'=>$order,		 
	       'order_info'=>$order_info,
	       'meta'=>$meta,
	       'items'=>$items,
	       'total'=>Price_Formatter::formatNumber($total),
	       'summary'=>$summary,		
	       'label'=>$label,
	       'customer'=>$customer,
	       'logo'=>isset($print_settings['receipt_logo'])?$print_settings['receipt_logo']:'',			       
	       'facebook'=>websiteDomain()."/".Yii::app()->theme->baseUrl."/assets/images/facebook.png",
	       'twitter'=>websiteDomain()."/".Yii::app()->theme->baseUrl."/assets/images/twitter.png",
	       'instagram'=>websiteDomain()."/".Yii::app()->theme->baseUrl."/assets/images/instagram.png",
	       'whatsapp'=>websiteDomain()."/".Yii::app()->theme->baseUrl."/assets/images/whatsapp.png",
	       'youtube'=>websiteDomain()."/".Yii::app()->theme->baseUrl."/assets/images/youtube.png",
	    );			
	    return $data;    
	}
	
	public static function getStatusActions($status='')
	{
		$criteria=new CDbCriteria();
		$criteria->alias="a";
		$criteria->select = "a.stats_id, a.action_type , a.action_value , b.description";
		$criteria->join='LEFT JOIN {{order_status}} b on  a.stats_id=b.stats_id ';
		$criteria->condition = "b.description = :description";
		$criteria->params = array(
		  ':description'=>$status,		 
		);
		$model=AR_order_status_actions::model()->findAll($criteria);
		if($model){
			$data = array(); $template_ids = array();
			foreach ($model as $item) {				
				$data[] = array(
				   'action_type'=>$item->action_type,
				   'action_value'=>$item->action_value,
				);
				$template_ids[]=$item->action_value;
			}
			return array(
			  'data'=>$data,
			  'template_ids'=>$template_ids
			);
		}
		throw new Exception( 'no results' );
	}

	public static function getStatusActionSingle($status='',$action_type='')
	{
		$criteria=new CDbCriteria();
		$criteria->alias="a";
		$criteria->select = "a.stats_id, a.action_type , a.action_value , b.description";
		$criteria->join='LEFT JOIN {{order_status}} b on  a.stats_id=b.stats_id ';
		$criteria->condition = "a.action_type=:action_type AND b.description = :description";
		$criteria->params = array(
		  ':action_type'=>$action_type,
		  ':description'=>$status,		 
		);
		$model=AR_order_status_actions::model()->find($criteria);
		if($model){			
			return $model->action_value;
		}
		throw new Exception( 'no results' );
	}
	
	public static function getSiteData()
	{
		$site_data = OptionsTools::find(
	      array('website_title','website_address','website_contact_phone','website_contact_email')
	    );
	    
	    $print_settings = AOrderSettings::getPrintSettings();   
	    
	    $site = array(
	      'title'=>isset($site_data['website_title'])?$site_data['website_title']:'',
	      'site_name'=>isset($site_data['website_title'])?$site_data['website_title']:'',
	      'address'=>isset($site_data['website_address'])?$site_data['website_address']:'',
	      'contact'=>isset($site_data['website_contact_phone'])?$site_data['website_contact_phone']:'',
	      'email'=>isset($site_data['website_contact_email'])?$site_data['website_contact_email']:'',		
	      'logo'=>isset($print_settings['receipt_logo'])?$print_settings['receipt_logo']:'',			       
	      'facebook'=>websiteDomain()."/".Yii::app()->theme->baseUrl."/assets/images/facebook.png",
	      'twitter'=>websiteDomain()."/".Yii::app()->theme->baseUrl."/assets/images/twitter.png",
	      'instagram'=>websiteDomain()."/".Yii::app()->theme->baseUrl."/assets/images/instagram.png",
	      'whatsapp'=>websiteDomain()."/".Yii::app()->theme->baseUrl."/assets/images/whatsapp.png",
	      'youtube'=>websiteDomain()."/".Yii::app()->theme->baseUrl."/assets/images/youtube.png",      
	    );		
	    return $site;	
	}

	public static function deleteNotifications($channel='',$ids='')
    {
        $criteria=new CDbCriteria;
        $criteria->addCondition("notication_channel=:notication_channel");
        $criteria->params = [':notication_channel'=>trim($channel)];
        $criteria->addInCondition("notification_uuid",$ids);
        $model = AR_notifications::model()->deleteAll($criteria);
        if($model){
            return true;
        }
        throw new Exception("Error deleting records."); 
    }

	public static function deleteByChannel($channel='',$ids='')
    {
        $criteria=new CDbCriteria;
        $criteria->addCondition("notication_channel=:notication_channel");
        $criteria->params = [':notication_channel'=>trim($channel)];        
        $model = AR_notifications::model()->deleteAll($criteria);
        if($model){
            return true;
        }
        throw new Exception("Error deleting records."); 
    }

}
/*end class*/