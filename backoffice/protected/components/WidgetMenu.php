<?php
Yii::import('zii.widgets.CMenu', true);

class WidgetMenu extends CMenu
{	
	 public $menu_type;
	 
	 public function init()
	 {		 	   	  	 	
	 	  if($this->menu_type=="admin"){		 	  
		 	  $role_id = Yii::app()->user->role_id;		
		 	  AdminMenu::buildMenu(0,false,$role_id); 	  		 	  
		 	  $this->items = AdminMenu::$items;
	 	  } else {	 	  	  
	 	  	  $role_id = Yii::app()->merchant->role_id;	 	  	  
			  $access = MerchantTools::hasMerchantSetMenu(Yii::app()->merchant->merchant_id);
			  $merchant_id = $access?Yii::app()->merchant->merchant_id:0;
	 	  	  AdminMenu::buildMenu(0,false,$role_id,'merchant', $merchant_id);
						  
			  $new_menu = [];
			  $menu_list = AdminMenu::$items;			  
			  if(is_array($menu_list) && count($menu_list)>=1){
				foreach ($menu_list as $keys=> $items) {					
					if(Yii::app()->merchant->merchant_type==2 && $items['action_name']=="payment.gateway"){
						//
					} elseif ( $items['action_name']=="merchant.driver" ){						
						$self_delivery = isset(Yii::app()->params['settings_merchant']['self_delivery'])?Yii::app()->params['settings_merchant']['self_delivery']:false;
						$self_delivery = $self_delivery==1?true:false;
						if($self_delivery){
							$new_menu[$keys] = $items;
						}
					} else {
						$new_menu[$keys] = $items;
					}					
				}
			  } else $new_menu = $menu_list;			
		 	  			
			  $this->items = $new_menu;
	 	  }
	 	  	 	  	 	 
	 	  $this->encodeLabel = false;
	 	  $this->activeCssClass = "active";
	 	  $this->activateParents = true;
	 	  $this->htmlOptions = array(
	 	    'class'=>'sidebar-nav'
	 	  ); 
	 	  $this->submenuHtmlOptions = array(
	 	    'class'=>'sidebar-nav-sub-menu'
	 	  ); 
	 	  
	 	  parent::init();
	 }
	 
}
/*end class*/