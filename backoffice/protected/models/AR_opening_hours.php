<?php
class AR_opening_hours extends CActiveRecord
{	

	 public $mtid;
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
		return '{{opening_hours}}';
	}
	
	public function primaryKey()
	{
	    return 'id';	 
	}
		
	public function attributeLabels()
	{
		return array(
		    'day'=>t("Day"),		    
		    'start_time'=>t("From"),	
		    'end_time'=>t("To"),	
		    'start_time_pm'=>t("From"),	
		    'end_time_pm'=>t("To"),	
		    'custom_text'=>t("Custom Message")
		);
	}
	
	public function rules()
	{
		return array(
		  array('day,start_time,end_time,status', 
		  'required','message'=> t( Helper_field_required ) ),
		  
		  array('day,start_time,status', 'filter','filter'=>array($obj=new CHtmlPurifier(),'purify')), 		  
		  
		  array('merchant_id,start_time_pm,end_time_pm,custom_text,day_of_week','safe'),		  
		  
		  array('day','uniqueHours'),	
		  	  
		);
	}

	public function uniqueHours($attribute, $params)
	{
		$criteria=new CDbCriteria();
		$criteria->addCondition("merchant_id=:merchant_id AND day=:day
		   AND ( :start_time between TIME_FORMAT(start_time,'%H:%i') and TIME_FORMAT(end_time,'%H:%i') OR  :end_time between TIME_FORMAT(start_time,'%H:%i') and TIME_FORMAT(end_time,'%H:%i') )
		");		
		$criteria->params = [
			':merchant_id'=>$this->merchant_id,	
			':day'=>$this->day,
			':start_time'=>Date_Formatter::TimeTo24($this->start_time),	
			':end_time'=>Date_Formatter::TimeTo24($this->end_time),	
		];					
		if(!$this->isNewRecord){			
			$criteria->addNotInCondition("id",array($this->id));
		}								
		if(AR_opening_hours::model()->findAll($criteria)){									
			$this->addError('start_time', t("Store Hours {day} {start_time} and {end_time} already exist",[
				'{day}'=>$this->day,
				'{start_time}'=>Date_Formatter::Time($this->start_time),
				'{end_time}'=>Date_Formatter::Time($this->end_time),
			]) );	
		} 
	}
	
	public function unique_day()
	{
	     $merchant_id = (integer) $this->mtid;	     
	     
	     if($this->isNewRecord){
	     	$model = AR_opening_hours::model()->find("merchant_id=:merchant_id AND day=:day",array(
			  ':merchant_id'=>$merchant_id,
			  ':day'=>$this->day
			));		
	     } else {
	     	$model = AR_opening_hours::model()->find("merchant_id=:merchant_id AND day=:day AND id<>:id ",array(
			  ':merchant_id'=>$merchant_id,
			  ':day'=>$this->day,
			  ':id'=>$this->id,
			));		
	     }
	     	     
		if($model){
			$this->addError('day',t("Day already exist"));
		}	   
	}

    protected function beforeSave()
	{
		if(!parent::beforeSave()){
			return false;
		} 
		
		if(DEMO_MODE && !$this->isNewRecord && in_array($this->merchant_id,DEMO_MERCHANT)){				
		    return false;
		 }
			
		$this->start_time = !empty($this->start_time)? Date_Formatter::TimeTo24($this->start_time):'';
		$this->end_time = !empty($this->end_time)? Date_Formatter::TimeTo24($this->end_time):'';
		$this->day_of_week =  $this->getDayOfWeek( strtolower($this->day) );		

		// $this->start_time_pm = !empty($this->start_time_pm)? Date_Formatter::TimeTo24($this->start_time_pm):'';
		// $this->end_time_pm = !empty($this->end_time_pm)? Date_Formatter::TimeTo24($this->end_time_pm):'';				
		
		return true;
	}
		
	public function getDayOfWeek($day='')
	{
		$days = array();
		$days['monday'] =1;
		$days['tuesday'] =2;
		$days['wednesday'] =3;
		$days['thursday'] =4;
		$days['friday'] =5;
		$days['saturday'] =6;
		$days['sunday'] =7;
		return isset($days[$day])?$days[$day]:1;
	}
	
	protected function afterSave()
	{
		if(!parent::afterSave()){
			return false;
		}

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
		if(!parent::afterDelete()){
			return false;
		}

		CCacheData::add();
	}

	public static function removeOpeningHours($ids=[],$merchant_id=0)
	{
		if(is_array($ids) && count($ids)>=1){
			$criteria=new CDbCriteria;
			$criteria->addCondition("merchant_id=:merchant_id");
            $criteria->params = [':merchant_id'=>intval($merchant_id)];
			$criteria->addNotInCondition("id",$ids);
			//dump($criteria);
			AR_opening_hours::model()->deleteAll($criteria);
		}
	}
		
}
/*end class*/
