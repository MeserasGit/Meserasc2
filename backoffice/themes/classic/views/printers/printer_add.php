<nav class="navbar navbar-light justify-content-between">
<?php
$this->widget('zii.widgets.CBreadcrumbs', 
array(
'links'=>isset($links)?$links:array(),
'homeLink'=>false,
'separator'=>'<span class="separator">
<i class="zmdi zmdi-chevron-right"></i><i class="zmdi zmdi-chevron-right"></i></span>'
));
?>
</nav>

  
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

<h5 ><?php echo t("FEIE 80mm WiFi Smart Printer")?></h5>
<p><?php echo t("printer available in ")?> <a target="_blank" href="http://www.feiecloud.com/product_detail-N80WC.html">http://www.feiecloud.com/product_detail-N80WC.html</a></p>
<div class="pb-2"></div>

<div class="form-label-group">    
   <?php echo $form->textField($model,'printer_name',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>$form->label($model,'printer_name')     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'printer_name'); ?>
   <?php echo $form->error($model,'printer_name'); ?>
</div>

<div class="form-label-group">    
   <?php echo $form->textField($model,'printer_user',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>$form->label($model,'printer_user')     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'printer_user'); ?>
   <?php echo $form->error($model,'printer_user'); ?>
</div>

<div class="form-label-group">    
   <?php echo $form->textField($model,'printer_ukey',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>$form->label($model,'printer_ukey')     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'printer_ukey'); ?>
   <?php echo $form->error($model,'printer_ukey'); ?>
</div>

<div class="form-label-group">    
   <?php echo $form->textField($model,'printer_sn',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>$form->label($model,'printer_sn')     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'printer_sn'); ?>
   <?php echo $form->error($model,'printer_sn'); ?>
</div>

<div class="form-label-group">    
   <?php echo $form->textField($model,'printer_key',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>$form->label($model,'printer_key')     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'printer_key'); ?>
   <?php echo $form->error($model,'printer_key'); ?>
</div>

<div class="custom-control custom-switch custom-switch-md">  
  <?php echo $form->checkBox($model,"auto_print",array(
     'class'=>"custom-control-input checkbox_child",     
     'value'=>1,
     'id'=>"auto_print",
     'checked'=>$model->auto_print==1?true:false
   )); ?>   
  <label class="custom-control-label" for="auto_print">
   <?php echo t("Auto print")?>
  </label>
</div>    

   </div>
</div>

<?php echo CHtml::submitButton('submit',array(
'class'=>"btn btn-green btn-full mt-3",
'value'=>t("Save")
)); ?>

<?php $this->endWidget(); ?>