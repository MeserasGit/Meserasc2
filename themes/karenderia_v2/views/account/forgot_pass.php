

<div class="container">
 
<div class="login-container m-auto pt-5 pb-5">
  
  
  <DIV id="vue-forgot-password" v-cloak >       
       
     
     <template v-if="steps==1">
     <form @submit.prevent="requestResetPassword">

      <h5 class="text-center mb-4"><?php echo t("Forgot Password")?></h5>
     
      <p><?php echo t("Please specify your email address to receive instructions for resetting it. If an account exists by that email, we will send a password reset")?>
</p>    
     
       <div class="form-label-group">    
         <input class="form-control form-control-text" placeholder="" 
           id="email_address" type="text"  v-model="email_address"  >   
         <label for="email_address" class="required"><?php echo t("Email")?></label> 
       </div> 
       
        <div v-cloak v-if="error.length>0" class="alert alert-warning mb-2" role="alert">
		    <p v-cloak v-for="err in error" class="m-0">{{err}}</p>	    
	   </div>        
     
       <button class="btn btn-green w-100"  :class="{ loading: loading }" :disabled="checkForm" >
	      <span v-if="loading==false"><?php echo t("Reset Password")?></span>
	      <div v-cloak v-if="loading==true" class="m-auto" data-loader="circle-side"></div>
	   </button>
       
     </form>  
     </template>
     
     <template v-else-if="steps==2">
     
         <div class="mb-5">
         
             <h5 class="text-center mb-4"><?php echo t("Password Reset")?></h5>
             
             <div v-cloak v-if="error.length>0" class="alert alert-warning mb-2" role="alert">
			    <p v-cloak v-for="err in error" class="m-0">{{err}}</p>	    
		     </div>      
	   
             <div  v-cloak v-if="success" class="alert alert-success" role="alert">
			    <p class="m-0">{{success}}</p>	    
			 </div>
			 
			 <div v-if="loading">
			   <div class="loading">
			     <div v-cloak class="m-auto" data-loader="circle-side"></div>
			   </div>
			 </div>
         
	         <template v-if="counter===0">          
		       <div class="mt-1 mb-3">           
		        <a href="javascript:;" @click="resendResetEmail" :disabled="is_loading" >
		          <p class="m-0"><u><?php echo t("Resend reset email")?></u></p>
		        </a>
		       </div>
		     </template>
		     <template v-else>          
		         <p><u><?php echo t("Resend Code in")?> {{counter}}</u></p>
		     </template>
         
         </div>
         
     </template>
     
      <div class="mt-3 text-center">
	     <span><?php echo t("Have an account")?>? <a  href="<?php echo Yii::app()->createUrl("/account/login",array(
	      'redirect'=>$redirect_to
	     ))?>" class="btn btn-white p-0 font14"><?php echo t("Sign in")?></a></span>
	   </div>
     
  </DIV>     
  
  
  </div> <!--center-->

</div> <!--login container-->

</div> <!--containter-->