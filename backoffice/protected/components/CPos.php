<?php
class CPos
{
	
	public static function get($merchant_id='',$status='draft', $service_code='pos',$date_created='')
	{				
		$model = AR_ordernew::model()->find("merchant_id=:merchant_id AND status=:status AND DATE_FORMAT(date_created,'%Y-%m-%d')=:date_created",array(
			':merchant_id'=>intval($merchant_id),
			':status'=>$status,	
			':date_created'=>$date_created
		));
		if($model){
			return $model;
		}
		return false;
	}
	
	public static function createOrder($merchant_id=0,$transaction_type='')
	{
		$order_uuid = '';
		$pos_code = AttributesTools::PosCode();		
		if($model = CPos::get($merchant_id,'draft',$transaction_type,date("Y-m-d"))){
			return $model->order_uuid;
		} else {
			
			/*GET TAX*/
			$tax_settings = array(); $tax_delivery = array(); $tax = 0;
			try {
				$tax_settings = CTax::getSettings($merchant_id);				
				$tax_type = $tax_settings['tax_type'];
				
				if($tax_settings['tax_type']=="multiple"){
					$tax_delivery = CTax::taxForDelivery($merchant_id,$tax_settings['tax_type']);		
				} else $tax_delivery = $tax_settings['tax'];
								
				if($tax_type=="standard" || $tax_type=="euro"){
					if(is_array($tax_settings['tax']) && count($tax_settings['tax'])>=1){
						foreach ($tax_settings['tax'] as $tax_item_cond) {
							$tax = isset($tax_item_cond['tax_rate'])?$tax_item_cond['tax_rate']:0;
						}
					}
				}
			} catch (Exception $e) {					
			}
													
			$order = new AR_ordernew();
			$order->scenario = $pos_code;
			$order->merchant_id = $merchant_id;			
			$order->service_code = $transaction_type ;
			$order->payment_code = "cash" ;
			$order->order_uuid = CommonUtility::createUUID("{{ordernew}}",'order_uuid');
			$order->whento_deliver = "now";
			$order->delivery_date = CommonUtility::dateNow();
			
			$order->tax_type = isset($tax_settings['tax_type'])?$tax_settings['tax_type']:'';
			$order->tax_use = $tax_settings;	
			$order->tax = $tax;
			$order->tax_for_delivery = $tax_delivery;			
															
			if($order->save()){
				return $order->order_uuid;
			} else throw new Exception( CommonUtility::parseModelErrorToString($order->getErrors()) );
		}	
	}
	
	public static function resetPos($order_uuid='')
	{
		$model = AR_ordernew::model()->find("order_uuid=:order_uuid",array(
		 ':order_uuid'=>$order_uuid
		));
		if($model){
			$model->scenario = "reset_cart";
			$model->delete();
			return true;
		}
		throw new Exception("Cart items not found");
	}
	
}
/*end class*/