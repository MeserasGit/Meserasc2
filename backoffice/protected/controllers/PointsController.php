<?php
class PointsController extends CommonController
{
	public $layout='backend';
	
	
	public function beforeAction($action)
	{					
		InlineCSTools::registerStatusCSS();					
		return true;
	}

    public function actionsettings()
    {
        $this->pageTitle = t("Settings");

        $model=new AR_option;		
		$model->scenario='points_settings';

        $options = array(
			'points_enabled','points_earning_rule','points_minimum_purchase','points_earning_points',
			'points_redeemed_points','points_redeemed_value','points_maximum_purchase','points_minimum_redeemed','points_maximum_redeemed',
			'points_redemption_policy','points_cover_cost','points_registration','points_review','points_first_order','points_booking'
		);

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
				if(OptionsTools::save($options, $model)){
					Yii::app()->user->setFlash('success',CommonUtility::t(Helper_settings_saved));
					$this->refresh();
				} else Yii::app()->user->setFlash('error',t(Helper_failed_update));
			} 
		}

        if($data = OptionsTools::find($options)){			
			foreach ($data as $name=>$val) {
				$model[$name]=$val;
			}		
		}		

		
		$rule_based = AttributesTools::getPointsRuleBased();
		$redemption_policy_list = AttributesTools::redemptionPolicy();		
		$redemption_covered_list = AttributesTools::redemptionCostCovered();
		$currency_symbol = Price_Formatter::$number_format['currency_symbol'];		

        $this->render("settings",[
            'model'=>$model,
			'rule_based'=>$rule_based,
			'redemption_policy_list'=>$redemption_policy_list,
			'redemption_covered_list'=>$redemption_covered_list,
			'currency_symbol'=>$currency_symbol,
            'params'=>[
                'links'=>array(		 
                    t("Loyalty Points")=>array('mobilemerchant/api_access'),          
                      $this->pageTitle,                           
                ),
            ]
        ]);
    }

	public function actionrewards()
	{
		$this->pageTitle=t("User Reward Points");

		$table_col = array(			
			'card_id'=>array(
			  'label'=>t("Customer"),
			  'width'=>'35%'
			),
			'transaction_amount'=>array(
			  'label'=>t("Balance"),
			  'width'=>'20%'
			),
			'transaction_type'=>array(
				'label'=>t("Actions"),
				'width'=>'15%'
			)			
		  );
		  $columns = array(			
			array('data'=>'card_id'),
			array('data'=>'transaction_amount','orderable'=>false),		
			array('data'=>'transaction_type','orderable'=>false),						
		  );				
				  
		  $this->render('//points/user_rewards',array(
			'table_col'=>$table_col,
			'columns'=>$columns,
			'order_col'=>0,
			'sortby'=>'desc',			
		  ));
	}

	public function actiontransactions()
	{
		$this->pageTitle=t("Transactions History");
		CommonUtility::setMenuActive('.admin_loyalty',".points_rewards");

		$table_col = array(
			'transaction_id'=>array(
				'label'=>t("#"),
				'width'=>'5%'
			  ),
			'transaction_date'=>array(
			  'label'=>t("Date"),
			  'width'=>'20%'
			),
			'transaction_description'=>array(
			  'label'=>t("Transaction"),
			  'width'=>'35%'
			),
			'transaction_amount'=>array(
			  'label'=>t("Debit/Credit"),
			  'width'=>'20%'
			),
			'running_balance'=>array(
			   'label'=>t("Running Balance"),
			   'width'=>'20%'
			)			
		  );
		  $columns = array(
			array('data'=>'transaction_id','visible'=>false),
			array('data'=>'transaction_date'),
			array('data'=>'transaction_description'),
			array('data'=>'transaction_amount','className'=> "text-right"),			
			array('data'=>'running_balance','className'=> "text-right"),
		  );				
		
		  $card_id = Yii::app()->input->get('card_id');		
		  $customer = CWallet::getCustomer($card_id);		  		  
		  $transaction_type = AttributesTools::transactionTypeList(true);		  

		  $this->render('//points/transaction_logs',array(
			'back_url'=>Yii::app()->CreateUrl("/points/rewards"),
			'card_id'=>$card_id,
			'customer'=>$customer,			
			'transaction_type'=>$transaction_type,			
			'table_col'=>$table_col,
			'columns'=>$columns,
			'order_col'=>0,
			'sortby'=>'desc',			
		  ));
	}

	public function actionalltransactions()
	{
		$this->pageTitle=t("All Points Transactions");		

		$table_col = array(
			'transaction_id'=>array(
				'label'=>t("#"),
				'width'=>'5%'
			  ),
			'transaction_date'=>array(
			  'label'=>t("Date"),
			  'width'=>'20%'
			),
			'transaction_description'=>array(
			  'label'=>t("Transaction"),
			  'width'=>'35%'
			),
			'transaction_amount'=>array(
			  'label'=>t("Debit/Credit"),
			  'width'=>'15%'
			),
			'running_balance'=>array(
			   'label'=>t("Running Balance"),
			   'width'=>'15%'
			)			
		  );
		  $columns = array(
			array('data'=>'transaction_id','visible'=>false),
			array('data'=>'transaction_date'),
			array('data'=>'transaction_description'),
			array('data'=>'transaction_amount', 'className'=> "text-right"),			
			array('data'=>'running_balance', 'className'=> "text-right", 'visible'=>false),
		  );				
				  
		  $this->render('//points/all_transactions',array(					
			'table_col'=>$table_col,
			'columns'=>$columns,
			'order_col'=>0,
			'sortby'=>'desc',			
		  ));
	}

}
// end class