<?php
Yii::import('zii.widgets.CMenu', true);

class WidgetCustomerMenu extends CMenu
{		 
	 public function init()
	 {		 		 	  
	 	  $menu = array();
	 	  
	 	  $menu[]=array(
	 	    'label'=>t("Manage my account"),
	 	    'url'=>array("/account/profile"),
	 	    'itemOptions'=>array(
	 	      'class'=>"account"
	 	    )
	 	  );
	 	  
	 	  $menu[]=array(
	 	    'label'=>t("Orders"),
	 	    'url'=>array("/account/orders"),
	 	    'itemOptions'=>array(
	 	      'class'=>"orders"
	 	    )
	 	  );	 	  	 	
	 	  $menu[]=array(
	 	    'label'=>t("Addresses"),
	 	    'url'=>array("/account/addresses"),
	 	    'itemOptions'=>array(
	 	      'class'=>"addresses"
	 	    )
	 	  );	
		   $menu[]=array(
			'label'=>t("Bookings"),
			'url'=>array("/account/booking"),
			'itemOptions'=>array(
			  'class'=>"bookings"
			)
		  );	
	 	  $menu[]=array(
	 	    'label'=>t("Payments"),
	 	    'url'=>array("/account/payments"),
	 	    'itemOptions'=>array(
	 	      'class'=>"payments"
	 	    )
	 	  );	 	  	 	  	 	  
	 	  $menu[]=array(
	 	    'label'=>t("Saved Stores"),
	 	    'url'=>array("/account/favourites"),
	 	    'itemOptions'=>array(
	 	      'class'=>"favourites"
	 	    )
	 	  );		 	 
		  
		  $points_enabled = isset(Yii::app()->params['settings']['points_enabled'])?Yii::app()->params['settings']['points_enabled']:false;		  

		  $menu[]=array(
			'label'=>t("Points"),
			'url'=>array("/account/points"),
			'visible'=>$points_enabled,
			'itemOptions'=>array(
			  'class'=>"gift"
			)
		  );		 
		  
		  $menu[]=array(
			'label'=>t("Logout"),
			'url'=>array("/account/logout"),
			'itemOptions'=>array(
			  'class'=>"logout"
			)
		  );		 
	 	  
	 	  $this->items = $menu;	 	  
	 	  	 	  
	 	  $this->encodeLabel = false;
	 	  $this->activeCssClass = "active";
	 	  $this->activateParents = true;
	 	  $this->htmlOptions = array(
	 	    'class'=>'siderbar-menu list-unstyled'
	 	  ); 
	 	  $this->submenuHtmlOptions = array(
	 	    'class'=>'siderbar-sub-menu'
	 	  ); 
	 	  
	 	  parent::init();
	 }
	 
}
/*end class*/