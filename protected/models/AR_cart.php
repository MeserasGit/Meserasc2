<?php
class AR_cart extends CActiveRecord
{	

	public $customer_name,$transaction_type;
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
		return '{{cart}}';
	}
	
	public function primaryKey()
	{
	    return 'cart_row';	 
	}
		
	public function attributeLabels()
	{
		return array(
		  'item_token'=>t("item_token")
		);
	}
	
	public function rules()
	{
		return array(

		  array('special_instructions', 'filter','filter'=>array($obj=new CHtmlPurifier(),'purify')),  
		
		  array('cart_row,cart_uuid,item_token,item_size_id,qty', 
		  'required','message'=> t( "Required" ) ),
		  
		  array('special_instructions,hold_order,order_reference,date_created,date_modified,ip_address','safe')
		  		  
		);
	}

    protected function beforeSave()
	{
		if(parent::beforeSave()){
			if($this->isNewRecord){				
				$this->date_created = CommonUtility::dateNow();					
			} else {
				$this->date_modified = CommonUtility::dateNow();											
			}
			$this->ip_address = CommonUtility::userIp();	
			
			return true;
		} else return true;
	}
	
	protected function afterSave()
	{
		parent::afterSave();		
		CCacheData::add();
	}

	protected function afterDelete()
	{
		parent::afterDelete();		
		
		AR_cart::model()->deleteAll("merchant_id=:merchant_id AND cart_uuid=:cart_uuid",array(
			':merchant_id'=>$this->merchant_id,
			':cart_uuid'=>$this->cart_uuid		
		));

		AR_cart_attributes::model()->deleteAll("cart_uuid=:cart_uuid",array(
			':cart_uuid'=> $this->cart_uuid 			
		));

		CCacheData::add();
	}
		
}
/*end class*/
