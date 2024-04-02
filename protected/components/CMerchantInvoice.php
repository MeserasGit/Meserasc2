<?php
require 'intervention/vendor/autoload.php';
use Intervention\Image\ImageManager;

class CMerchantInvoice 
{
    public static function generateRange($terms=0)
    {        
        $start = ''; $end = '';  $date = date("Y-m-d");
        if($terms==1){
            $start = date("Y-m-d 00:01:00"); $end = date("Y-m-d 23:59:00");
        } else if ($terms==7){
            $start = date('Y-m-d 00:01:00',(strtotime ( '-7 day' , strtotime ( $date) ) ));
            $end = date("Y-m-d 23:59:00");
        } else if ($terms==15){
            $start = date('Y-m-d 00:01:00',(strtotime ( '-15 day' , strtotime ( $date) ) ));
            $end = date("Y-m-d 23:59:00");
        } else if ($terms==30){
            $start = date('Y-m-d 00:01:00',(strtotime ( '-30 day' , strtotime ( $date) ) ));
            $end = date("Y-m-d 23:59:00");
        }

        if(!empty($start) && !empty($end)){
            return [
                'start'=>$start,
                'end'=>$end,
            ];
        }     
        throw new Exception("Range not available");
    }

    public static function getSummary($terms=0, $start='', $end='')
    {
        // $order_status = AOrders::getOrderTabsStatus($filter);			    		
        // dump($order_status);
        $payment_code = [];
        $all_offline = CPayments::getPaymentTypeOnline(0);				
		$status_completed = AOrderSettings::getStatus(array('status_delivered','status_completed'));        
        if(is_array($all_offline) && count($all_offline)>=1){
            foreach ($all_offline as $items) {
                $payment_code[] = $items['payment_code'];
            }
        }
        
        $stmt="
        SELECT a.merchant_id,sum(commission) as invoice_total,
        b.restaurant_name,b.contact_phone,b.contact_email,b.address as business_address    	
        FROM {{ordernew}} a
        LEFT JOIN {{merchant}} b
        ON 
        a.merchant_id = b.merchant_id
        WHERE 
        a.date_created BETWEEN ".q($start)." AND ".q($end)."
        AND a.payment_code IN (".CommonUtility::arrayToQueryParameters($payment_code).")
        AND a.status IN (".CommonUtility::arrayToQueryParameters($status_completed).")
        AND
        a.merchant_id IN (
            select merchant_id from {{merchant}}
            where invoice_terms = ".q($terms)."
        )
        group by merchant_id        
        ";        
        if($res = Yii::app()->db->createCommand($stmt)->queryAll()){
            $data = [];
            foreach ($res as $items) {
                $data[] = [
                    'merchant_id'=>$items['merchant_id'],
                    'invoice_total'=>$items['invoice_total'],
                    'restaurant_name'=>$items['restaurant_name'],
                    'contact_phone'=>$items['contact_phone'],
                    'contact_email'=>$items['contact_email'],
                    'business_address'=>$items['business_address'],
                ];
            }
            return $data;
        } else throw new Exception( t(HELPER_NO_RESULTS));
    }

    public static function imageBase64($image_name=''){        
        $image_driver = !empty(Yii::app()->params['settings']['image_driver'])?Yii::app()->params['settings']['image_driver']:Yii::app()->params->image['driver'];
        $path = CMedia::homeDir();
        $upload_path = $path."/upload/";
        $assets_path = $path."/themes/karenderia_v2/assets/images";        
        if(!empty($image_name)){
            $image_path = $upload_path."/".$image_name;
        } else {
            $image_path = $assets_path."/logo@2x.png";
        }        
        $manager = new ImageManager(array('driver' => $image_driver ));      
        $image = $manager->make($image_path)->encode('data-url');
        return $image->encoded;
    }

    public static function getInvoice($invoice_uuid='')
    {
        $model = AR_invoice::model()->find("invoice_uuid=:invoice_uuid",[
            ':invoice_uuid'=>$invoice_uuid
        ]);
        if($model){
            return $model;
        }
        throw new Exception( t(HELPER_NO_RESULTS));
    }

    public static function getInvoiceByID($invoice_number='')
    {
        $model = AR_invoice::model()->find("invoice_number=:invoice_number",[
            ':invoice_number'=>$invoice_number
        ]);
        if($model){
            return $model;
        }
        throw new Exception( t(HELPER_NO_RESULTS));
    }

    public static function getHistory($invoice_number='')
    {        
        $criteria=new CDbCriteria();
        $criteria->addCondition("invoice_number=:invoice_number");
        $criteria->params = [
          ':invoice_number'=>$invoice_number
        ];
        $criteria->addInCondition('meta_name',['history','viewed','bank_deposit']);
        $criteria->order = "id DESC";
        $model = AR_invoice_meta::model()->findAll($criteria); 
        if($model){
            return $model;
        }
        throw new Exception( t(HELPER_NO_RESULTS));
    }

    public static function getPaymentHistory($invoice_number='',$deposit_type='invoice',$status='approved')
    {        
        $criteria=new CDbCriteria();
        $criteria->addCondition("transaction_ref_id=:transaction_ref_id AND deposit_type=:deposit_type AND status=:status");
        $criteria->params = [
          ':transaction_ref_id'=>$invoice_number,
          ':deposit_type'=>$deposit_type,
          ':status'=>$status
        ];        
        $criteria->order = "deposit_id DESC";
        $model = AR_bank_deposit::model()->findAll($criteria); 
        if($model){
            return $model;
        }
        throw new Exception( t(HELPER_NO_RESULTS));
    }
    
    public static function SetViewed($invoice_number='')
    {
        $history = AR_invoice_meta::model()->find("invoice_number=:invoice_number AND meta_name=:meta_name",[
            ':invoice_number'=>$invoice_number,
            ':meta_name'=>'viewed',            
        ]);
        if(!$history){
            $model = new AR_invoice_meta;
            $model->invoice_number = intval($invoice_number);
            $model->meta_name = "viewed";
            $model->meta_value1 = "This invoice was viewed";
            $model->meta_value2 = CommonUtility::dateNow();
            $model->save();
        }
    }

    public static function getTotalDeposit($invoice_number='')
    {
        $stmt= "
        SELECT sum(amount) as total
        FROM {{bank_deposit}}
        WHERE transaction_ref_id = ".q($invoice_number)."
        and status='approved'
        ";        
        if($res = Yii::app()->db->createCommand($stmt)->queryRow()){
            return $res['total'];
        }
        return 0;
    }

}
// end class