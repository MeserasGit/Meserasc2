<?php
set_time_limit(0);

class TasksmsController extends SiteCommon
{	
	private $runactions_enabled;

	public function beforeAction($action)
	{	
		$key = Yii::app()->input->get("key");			
		if(CRON_KEY===$key){
           $this->runactions_enabled = isset(Yii::app()->params['settings']['runactions_enabled'])?Yii::app()->params['settings']['runactions_enabled']:false;		
		   return true;
		}
		return false;
	}

    public function actionsend()
	{		
		Yii::import('ext.runactions.components.ERunActions');
		if($this->runactions_enabled){
			if (ERunActions::runBackground()) {
				$this->sendSMS();
			}		
		} else {
			$this->sendSMS();
		}
	}

    public function sendSMS()
    {        
        $model = AR_sms_provider::model()->find('as_default=:as_default', array(':as_default'=>1)); 		
        if($model){
            if($model->provider_id != "nexmo"){
                Yii::app()->end();
            }
        }
        $to = Yii::app()->input->get('to');
        $body = Yii::app()->input->get('body');        
        $client_id = Yii::app()->input->get('client_id');
        $merchant_id = Yii::app()->input->get('merchant_id');
        $name = Yii::app()->input->get('name');
        
        $body = urldecode($body);
        $name = urldecode($name);

        try {
            CSMSsender::init();
            CSMSsender::setTo($to);
            CSMSsender::setBody($body);
            CSMSsender::setClientID( $client_id );
            CSMSsender::setMerchantID( $merchant_id );
            CSMSsender::setName( $name );
            $resp = CSMSsender::send();	            
            return $resp;
        } catch (Exception $e) {
            dump($e->getMessage());
            return false;
        }
    }

}
// end class