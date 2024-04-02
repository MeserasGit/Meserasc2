<?php
$form = $this->beginWidget(
	'CActiveForm',
	array(
		'id' => 'upload-form',
		'enableAjaxValidation' => false,		
	)
);
?>

<div class="card">
  <div class="card-body">

<?php if(Yii::app()->user->hasFlash('success')): ?>
	<div class="alert alert-success">
		<?php echo Yii::app()->user->getFlash('success'); ?>
	</div>
<?php endif;?>

<?php if(Yii::app()->user->hasFlash('error')): ?>
	<div class="alert alert-danger">
		<?php echo Yii::app()->user->getFlash('error'); ?>
	</div>
<?php endif;?>

<h6 class="mb-4"><?php echo t("Others")?></h6>

<h6 class="mb-3"><?php echo t("Auto-accepted order status")?></h6>
<div class="custom-control custom-switch custom-switch-md">  
  <?php echo $form->checkBox($model,"auto_accept_order_enabled",array(
     'class'=>"custom-control-input checkbox_child",     
     'value'=>1,
     'id'=>"auto_accept_order_enabled",
     'checked'=>$model->auto_accept_order_enabled==1?true:false
   )); ?>   
  <label class="custom-control-label" for="auto_accept_order_enabled">
   <?php echo t("Enabled")?>
  </label>
</div>    
<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'auto_accept_order_status', (array)$status_list ,array(
     'class'=>"form-control custom-select form-control-select",     
     'placeholder'=>$form->label($model,'auto_accept_order_status'),
   )); ?>         
   <?php echo $form->error($model,'auto_accept_order_status'); ?>
</div>

<h6 ><?php echo t("Auto-accept order timer")?></h6>
<p><?php echo t("Orders are automatically accepted after a certain number of minutes have passed since they were placed or chosen")?>.</p>
<p><?php echo t("Need also to Enabled Auto-accepted order in merchant settings")?>.</p>
<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'auto_accept_order_timer', (array)$time_list ,array(
     'class'=>"form-control custom-select form-control-select",     
     'placeholder'=>$form->label($model,'auto_accept_order_timer'),
   )); ?>         
   <?php echo $form->error($model,'auto_accept_order_timer'); ?>
</div>

<div style="height:15px;"></div>


<h6 class="mb-4"><?php echo t("Allow return to home")?></h6>
<div class="custom-control custom-switch custom-switch-md">  
  <?php echo $form->checkBox($model,"allow_return_home",array(
     'class'=>"custom-control-input checkbox_child",     
     'value'=>1,
     'id'=>"allow_return_home",
     'checked'=>$model->allow_return_home==1?true:false
   )); ?>   
  <label class="custom-control-label" for="allow_return_home">
   <?php echo t("Enabled")?>
  </label>
</div>    

<h6 class="mb-4 mt-4"><?php echo t("Image resizing")?></h6>
<div class="custom-control custom-switch custom-switch-md">  
  <?php echo $form->checkBox($model,"image_resizing",array(
     'class'=>"custom-control-input checkbox_child",     
     'value'=>1,
     'id'=>"image_resizing",
     'checked'=>$model->image_resizing==1?true:false
   )); ?>   
  <label class="custom-control-label" for="image_resizing">
   <?php echo t("Enabled")?>
  </label>
</div>    



<div class="row align-items-center">
  <div class="col-6">
     <h6 class="mb-3 mt-3"><?php echo t("Runactions")?></h6>
  </div>
  <div class="col-6 text-right">
     <a class="btn btn-link"  href="<?php echo $test_runactions?>">
      <?php echo t("Test Runactions")?>
    </a>
  </div>
</div>

<div class="custom-control custom-switch custom-switch-md">  
  <?php echo $form->checkBox($model,"runactions_enabled",array(
     'class'=>"custom-control-input checkbox_child",     
     'value'=>1,
     'id'=>"runactions_enabled",
     'checked'=>$model->runactions_enabled==1?true:false
   )); ?>   
  <label class="custom-control-label" for="runactions_enabled">
   <?php echo t("Enabled runactions")?>
  </label>
</div>    

<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'runactions_method', (array)$runactions_method ,array(
     'class'=>"form-control custom-select form-control-select",     
     'placeholder'=>$form->label($model,'runactions_method'),
   )); ?>         
   <?php echo $form->error($model,'runactions_method'); ?>
</div>

<h6 class="mb-3"><?php echo t("Runactions Test Template")?></h6>
<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'runaction_test_tpl', (array)$template_list ,array(
     'class'=>"form-control custom-select form-control-select",     
     'placeholder'=>$form->label($model,'runaction_test_tpl'),
   )); ?>         
   <?php echo $form->error($model,'runaction_test_tpl'); ?>
</div>		

<h6 class="mb-3 mt-4"><?php echo t("Food menu layout")?></h6>
<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'menu_layout', (array)$menu_layout ,array(
     'class'=>"form-control custom-select form-control-select",     
     'placeholder'=>$form->label($model,'menu_layout'),
   )); ?>         
   <?php echo $form->error($model,'menu_layout'); ?>
</div>

<h6 class="mb-3 mt-4"><?php echo t("Food category position")?></h6>

<?php 
echo CHtml::activeRadioButtonList($model,'category_position',array(
  'left'=>t("Left"),
  'top'=>t("Top"),
)); 
?>


<div class="mb-3 mt-4"></div>

<div class="custom-control custom-switch custom-switch-md">  
  <?php echo $form->checkBox($model,"menu_disabled_inline_addtocart",array(
     'class'=>"custom-control-input checkbox_child",     
     'value'=>1,
     'id'=>"menu_disabled_inline_addtocart",
     'checked'=>$model->menu_disabled_inline_addtocart==1?true:false
   )); ?>   
  <label class="custom-control-label" for="menu_disabled_inline_addtocart">
   <?php echo t("Disabled inline add to cart")?>
  </label>
</div>    

<hr/>


<h6 class="mt-4"><?php echo t("Merchant Default opening hours")?></h6>
<p><?php echo t("when creating new merchant will copy this opening hours")?></p>


<div class="custom-control custom-switch custom-switch-md">  
  <?php echo $form->checkBox($model,"enabled_copy_opening_hours",array(
     'class'=>"custom-control-input checkbox_child",     
     'value'=>1,
     'id'=>"enabled_copy_opening_hours",
     'checked'=>$model->enabled_copy_opening_hours==1?true:false
   )); ?>   
  <label class="custom-control-label" for="enabled_copy_opening_hours">
   <?php echo t("Enabled")?>
  </label>
</div>    


<div class="d-flex">

<div class="form-label-group mr-3">    
   <?php echo $form->textField($model,'merchant_default_opening_hours_start',array(
     'class'=>"form-control form-control-text timepick datetimepicker-input",     
     'placeholder'=>$form->label($model,'merchant_default_opening_hours_start'),     
     'readonly'=>true,
     'data-toggle'=>'datetimepicker'
   )); ?>   
   <?php    
    echo $form->labelEx($model,'merchant_default_opening_hours_start'); ?>
   <?php echo $form->error($model,'merchant_default_opening_hours_start'); ?>
</div>

<div class="form-label-group">    
   <?php echo $form->textField($model,'merchant_default_opening_hours_end',array(
     'class'=>"form-control form-control-text timepick datetimepicker-input",     
     'placeholder'=>$form->label($model,'merchant_default_opening_hours_end'),     
     'readonly'=>true,
     'data-toggle'=>'datetimepicker'
   )); ?>   
   <?php    
    echo $form->labelEx($model,'merchant_default_opening_hours_end'); ?>
   <?php echo $form->error($model,'merchant_default_opening_hours_end'); ?>
</div>
 
</div>
<!--flex-->


<?php //dump($provider)?>

<h6 class="mt-3"><?php echo t("Merchant Default payment settings")?></h6>
<p><?php echo t("when creating new merchant this will enabled payment gateway")?></p>

<div class="custom-control custom-switch custom-switch-md">  
  <?php echo $form->checkBox($model,"enabled_copy_payment_setting",array(
     'class'=>"custom-control-input checkbox_child",     
     'value'=>1,
     'id'=>"enabled_copy_payment_setting",
     'checked'=>$model->enabled_copy_payment_setting==1?true:false
   )); ?>   
  <label class="custom-control-label" for="enabled_copy_payment_setting">
   <?php echo t("Enabled")?>
  </label>
</div>    

<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'copy_payment_list',(array)$provider,array(
     'class'=>"form-control custom-select form-control-select select_two",
     'placeholder'=>$form->label($model,'copy_payment_list'),
     'multiple'=>true,
   )); ?>         
   <?php echo $form->error($model,'copy_payment_list'); ?>
</div>

  </div> <!--body-->
</div> <!--card-->



<?php echo CHtml::submitButton('submit',array(
'class'=>"btn btn-green btn-full mt-3",
'value'=>t("Save")
)); ?>

<?php $this->endWidget(); ?>