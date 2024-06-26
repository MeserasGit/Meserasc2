<?php
class AR_ordernew_meta extends CActiveRecord
{	

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
		return '{{ordernew_meta}}';
	}
	
	public function primaryKey()
	{
	    return 'meta_id';	 
	}
		
	public function attributeLabels()
	{
		return array(
		 'meta_id'=>"meta_id",
		);
	}
	
	public function rules()
	{
		 return array(
            array('order_id,meta_name,meta_value', 
            'required','message'=> t(Helper_field_required) ),   
                        
            //array('special_instructions,discount,discount_type','safe'),
                        
         );
	}

    protected function beforeSave()
	{
		if(parent::beforeSave()){
			if($this->isNewRecord){				
			} else {				
			}			
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
		CCacheData::add();
	}
		
}
/*end class*/