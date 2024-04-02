<footer>
<div class="container">
  <div class="d-none d-lg-block">
  <div class="row">

     <div class="col d-flex justify-content-start align-items-center"> 
      <p class="m-0">&copy; <?php echo isset(Yii::app()->params['settings']['website_title'])? Yii::app()->params['settings']['website_title'] :'' .' '.date("Y")?></p>
     </div>
     
     <div class="app-store-wrap col d-flex justify-content-center align-items-center">      
       <div class="d-flex justify-content-center">
		  <div class="p-2">
      <a href="<?php echo  !empty(Yii::app()->params['ios_download_url'])?Yii::app()->params['ios_download_url']:'#' ?>" 
           <?php echo !empty(Yii::app()->params['ios_download_url'])?'target="_blank"':""; ?>
           >
		      <img src="<?php echo Yii::app()->theme->baseUrl?>/assets/images/app-store@2x.png">
		    </a>
		  </div>
		  <div class="p-2">
      <a href="<?php echo !empty(Yii::app()->params['android_download_url'])?Yii::app()->params['android_download_url']:'#' ?>" 
          <?php echo !empty(Yii::app()->params['android_download_url'])?'target="_blank"':""; ?>
          >
		      <img src="<?php echo Yii::app()->theme->baseUrl?>/assets/images/google-play@2x.png">
		    </a>
		  </div>
		</div>
     
     </div> <!--col-->
     
     <div class="col d-flex justify-content-end align-items-center"> 
     <p class="m-0"><?php echo t("Website")?>: <a href=""><?php echo $_SERVER['SERVER_NAME']?></a></p>
     </div>
  </div> <!--row-->
 </div>

  <!-- mobile view -->
  <div class="d-block d-lg-none">
    <div class="row app-store-wrap">
      <div class="col">
      <a href="<?php echo  !empty(Yii::app()->params['ios_download_url'])?Yii::app()->params['ios_download_url']:'#' ?>" 
           <?php echo !empty(Yii::app()->params['ios_download_url'])?'target="_blank"':""; ?>
           >
		      <img src="<?php echo Yii::app()->theme->baseUrl?>/assets/images/app-store@2x.png">
		    </a>
      </div>
      <div class="col text-right">
      <a href="<?php echo !empty(Yii::app()->params['android_download_url'])?Yii::app()->params['android_download_url']:'#' ?>" 
          <?php echo !empty(Yii::app()->params['android_download_url'])?'target="_blank"':""; ?>
          >
		      <img src="<?php echo Yii::app()->theme->baseUrl?>/assets/images/google-play@2x.png">
		    </a>
      </div>
    </div> 
    <!-- row -->

    <div class="row mt-3">
      <div class="col">
         <p class="m-0">&copy; <?php echo isset(Yii::app()->params['settings']['website_title'])? Yii::app()->params['settings']['website_title'] :'' .' '.date("Y")?></p>
      </div>
      <div class="col text-right">
        <p class="m-0"><?php echo t("Website")?>: <a href=""><?php echo $_SERVER['SERVER_NAME']?></a></p>
      </div>
    </div>


  </div>
  <!-- mobile view -->

</div> <!--container--> </footer> <!-- begin olark code --> <script type="text/javascript" async> ;(function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; 
y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; 
y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js"); /* custom configuration goes here (www.olark.com/documentation) */ 
olark.identify('5297-197-10-6354');</script>
<!-- end olark code -->
