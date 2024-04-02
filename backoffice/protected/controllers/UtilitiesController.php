<?php
class UtilitiesController extends CommonController
{
		
	public function beforeAction($action)
	{							
		return true;
	}		

    public function actionclean_database()
    {
        $this->pageTitle = t("Clean database");	

        $model=new AR_option;
		$model->scenario=Yii::app()->controller->action->id;		

        $data = TableDataStatus::get();        

        if(isset($_POST['AR_option'])){

            if(DEMO_MODE){			
                $this->render('//tpl/error',array(  
                      'error'=>array(
                        'message'=>t("Modification not available in demo")
                      )
                    ));	
                return false;
            }

            $model->attributes=$_POST['AR_option'];
			if($model->validate()){												
				$user = AR_AdminUser::model()->find("admin_id=:admin_id AND password=:password",[
                    ':admin_id'=>Yii::app()->user->id,
                    ':password'=>md5($model->password)
                ]);                
                if($user){        
                    $data = [];
                    if(is_array($model->table_list) && count($model->table_list)>=1){
                        foreach ($model->table_list as $key => $items) {
                            if($items<>"0"){
                                $data[] = $items;
                            }
                        }
                    }
                    TableDataStatus::processDelete($data);
                    Yii::app()->user->setFlash('success',CommonUtility::t(Helper_success));
					$this->refresh();                
                } else Yii::app()->user->setFlash('error',t("Password is invalid"));
			} else Yii::app()->user->setFlash('error',t(HELPER_CORRECT_FORM));
        }
        
        $this->render('clean_database',[
            'model'=>$model,
            'data'=>$data,
            'links'=>array(
	            t("Utilities"),
                $this->pageTitle,
		    ),	    		    
        ]);
    }

    public function actionfixed_database()
    {
        $this->pageTitle = t("Fixed database");	

        require_once 'fixed_database.php';        

        $this->render('fixed_database',[
            'data'=>$data,
            'links'=>array(
	            t("Utilities"),
                $this->pageTitle,
		    ),	    		    
        ]);
    }

}
// end class