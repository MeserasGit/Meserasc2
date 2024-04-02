<?php
class AR_table_tables extends CActiveRecord
{	
    
	public $room_id_selected, $room_name;
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
		return '{{table_tables}}';
	}
	
	public function primaryKey()
	{
	    return 'table_id';	 
	}
		
	public function attributeLabels()
	{
		return array(
		    'table_id'=>t("Table ID"),
            'table_name'=>t("Table Name"),
            'min_covers'=>t("Min Covers"),
            'max_covers'=>t("Max Covers"),
            'available'=>t("Available"),
            'room_id'=>t("Room"),
		);
	}
	
	public function rules()
	{
		return array(
		  array('room_id,table_name,min_covers,max_covers', 
		  'required','message'=> t( Helper_field_required ) ),

		  //array("table_name",'unique','message'=>t("Room name aready exist")),
		  array('table_name','ext.UniqueAttributesValidator','with'=>'merchant_id',
		   'message'=>t("Room name aready exist")
		  ),            
		  		  
		  array('table_name', 'filter','filter'=>array($obj=new CHtmlPurifier(),'purify')), 		  
		  
		  array('table_uuid,available,date_created,date_modified,ip_address,room_id_selected','safe'),		  

          array('min_covers,max_covers', 'numerical', 'integerOnly' => false,
		  'min'=>1,
		  'tooSmall'=>t("You must enter at least greater than 0"),
		  'message'=>t(Helper_field_numeric)),		
		  
		  array('min_covers','validateMinCovers')
		  
		);
	}
	
	public function validateMinCovers($attribute,$params)
	{
		if($this->min_covers>$this->max_covers){
			$this->addError($attribute, t("Min covers cannot be greater than max covers"));
		}
	}

    protected function beforeSave()
	{
		if(parent::beforeSave()){
			
			if(DEMO_MODE && !$this->isNewRecord && in_array($this->merchant_id,DEMO_MERCHANT)){				
				return false;
			}

			if($this->isNewRecord){
				$this->date_created = CommonUtility::dateNow();					
			} else {
				$this->date_modified = CommonUtility::dateNow();											
			}
			$this->ip_address = CommonUtility::userIp();	

            if(empty($this->table_uuid)){
				$this->table_uuid = CommonUtility::createUUID("{{table_tables}}",'table_uuid');
			}			
			
			return true;
		} else return true;
	}
	
	protected function afterSave()
	{
		parent::afterSave();
        /*ADD CACHE REFERENCE*/
		CCacheData::add();
	}

	protected function beforeDelete()
	{				
	    if(DEMO_MODE && in_array($this->merchant_id,DEMO_MERCHANT)){				
	        return false;
	    }
	    return true;
	}		
	
	protected function afterDelete()
	{
		parent::afterDelete();		
        /*ADD CACHE REFERENCE*/
		CCacheData::add();
	}
		
}
/*end class*/