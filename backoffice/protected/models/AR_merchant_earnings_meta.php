<?php
class AR_merchant_earnings_meta extends CActiveRecord
{	

	public $merchant_id, $transaction_date, $transaction_amount,$status,
	$transaction_description,$transaction_description_parameters, $transaction_id
	;
	
	/**
	 * Returns the static model of the specified AR class.
	 * @return static the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{merchant_earnings_meta}}';
	}
	
	public function primaryKey()
	{
	    return 'id';	 
	}
		
	public function attributeLabels()
	{
		return array(
		    'transaction_id'=>t("Transaction ID"),
		    'meta_name'=>t("Meta name"),
		);
	}
	
	public function rules()
	{
		return array(
		  array('transaction_id,meta_name,meta_value',
		   'required','message'=> CommonUtility::t( Helper_field_required ) ),
		  array('date_created','safe'),
		  array('meta_name', 'filter','filter'=>array($obj=new CHtmlPurifier(),'purify')),         
		);
	}

    protected function beforeSave()
	{
		if(parent::beforeSave()){
			if($this->isNewRecord){
				$this->date_created = CommonUtility::dateNow();					
			} 
			$this->ip_address = CommonUtility::userIp();				
			return true;
		} else return true;
	}
	
	protected function afterSave()
	{
		parent::afterSave();
	}

	protected function afterDelete()
	{
		parent::afterDelete();		
	}
		
}
/*end class*/