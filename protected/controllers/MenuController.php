<?php
class MenuController extends SiteCommon
{
	public function beforeAction($action)
	{						
		// SEO 
		//CSeo::setPage();
		return true;
	}
			
	public function actionMenu()
	{					
				
		try {
			
			AssetsFrontBundle::includeMaps();
			$pathInfo = Yii::app()->request->getPathInfo();		
			$matches = explode('/', $pathInfo);			
			if(is_array($matches) && count($matches)>=1){
				$slug_name = isset($matches[0])?$matches[0]:''; 
							
				$data = CMerchantListingV1::getMerchantInfo($slug_name,Yii::app()->language);								
				Yii::app()->params['seo_data'] = [
					'restaurant_name'=>$data['restaurant_name']
				];
				// SET SEO
				CSeo::setPage();
				
				$merchant_id = intval($data['merchant_id']);
				$merchant_uuid = trim($data['merchant_uuid']);
				$gallery = CMerchantListingV1::getGallery($merchant_id);						
				$opening_hours = CMerchantListingV1::openingHours($merchant_id);				
										
				$static_maps=''; $map_direction='';
				if($data){			  					
				   $static_maps = CMerchantListingV1::staticMapLocation(
				     Yii::app()->params['map_credentials'],
				     $data['latitude'],$data['lontitude'],
				     '500x200',websiteDomain().Yii::app()->theme->baseUrl."/assets/images/marker2@2x.png"
				   );		
				   $map_direction = CMerchantListingV1::mapDirection(Yii::app()->params['map_credentials'],
				     $data['latitude'],$data['lontitude']
				   );	   					  
				}
							
							
				$payload = array(
				  'items','subtotal','distance_local','merchant_info','items_count'
				);			
				
				ScriptUtility::registerScript(array(
				  "var merchant_id='".CJavaScript::quote($merchant_id)."';",		
				  "var merchant_uuid='".CJavaScript::quote($merchant_uuid)."';",		
				  "var payload='".CJavaScript::quote(json_encode($payload))."';",
				  "var isGuest='".CJavaScript::quote(Yii::app()->user->isGuest)."';",						  
				),'merchant_id');

				CBooking::setIdentityToken();
				
				$checkout_link = Yii::app()->createUrl("account/login?redirect=". Yii::app()->createAbsoluteUrl("/account/checkout") );
				if(!Yii::app()->user->isGuest){
					$checkout_link = Yii::app()->createUrl("/account/checkout");
				}

				if($data['has_header']){
					Yii::app()->clientScript->registerCss('headerCSS', '
						.top-merchant-details{
							background: url("'.$data['url_header'].'") no-repeat center center #fedc79;
							background-size:cover;
						}
					');
				}

				// BOOKING
				$options = OptionsTools::find([
					'booking_enabled','booking_enabled_capcha','menu_layout','merchant_tax_number'
				],$merchant_id);
				$booking_enabled = isset($options['booking_enabled'])?$options['booking_enabled']:false;
				$booking_enabled = $booking_enabled==1?true:false;
				$booking_enabled_capcha = isset($options['booking_enabled_capcha'])?$options['booking_enabled_capcha']:false;
				$booking_enabled_capcha = $booking_enabled_capcha==1?true:false;
				$menu_layout = isset(Yii::app()->params['settings']['menu_layout'])?Yii::app()->params['settings']['menu_layout']:'left_image';
				$menu_layout = !empty($menu_layout)?$menu_layout:'left_image';
				$category_position = isset(Yii::app()->params['settings']['category_position'])?Yii::app()->params['settings']['category_position']:'left';
				$category_position = !empty($category_position)?$category_position:'left';				
				
		        $tax_number = isset($options['merchant_tax_number'])?$options['merchant_tax_number']:'';				
				
				$options = OptionsTools::find(['captcha_site_key','menu_disabled_inline_addtocart']);
				$captcha_site_key = isset($options['captcha_site_key'])?$options['captcha_site_key']:'';
				$disabled_inline_addtocart = isset($options['menu_disabled_inline_addtocart'])?$options['menu_disabled_inline_addtocart']:false;
				$disabled_inline_addtocart = $disabled_inline_addtocart==1?true:false;								
				
				$maps_config = CMaps::config();	

				$tpl = $category_position=='top'? "//store/menu_categorytop" : "//store/menu";		
																							
				if($data){		    												
			    	$this->render($tpl,array(
			    	  'data'=>$data,
			    	  'gallery'=>$gallery,
			    	  'opening_hours'=>$opening_hours,
			    	  'static_maps'=>$static_maps,
			    	  'map_direction'=>$map_direction,
			    	  'checkout_link'=>$checkout_link,
					  'booking_enabled'=>$booking_enabled,
					  'merchant_uuid'=>$merchant_uuid,
					  'booking_enabled_capcha'=>$booking_enabled_capcha,
					  'captcha_site_key'=>$captcha_site_key,
					  'menu_layout'=>$menu_layout,
					  'tax_number'=>$tax_number,
					  'maps_config'=>$maps_config,
					  'disabled_inline_addtocart'=>$disabled_inline_addtocart
			    	));
			    }
			} else $this->render("//store/404-page");		
			
		} catch (Exception $e) {
			$this->render("//store/404-page");		
		}
	}
	
}
/*end class*/