
<section v-cloak v-for="val in menu_data" :id="val.category_uiid" :data-cat_id="val.cat_id">
    <h5>{{ val.category_name }}</h5>
    <p>{{val.category_description}}</p>
    
    <div class="list-item-rows hover01" v-for="items in val.items" >		     
    <div class="row m-0">
       
    
    <div class="col-12 p-0">        
        <div class="row m-0 p-0">
            <div class="col-lg-8 col-md-8 d-flex align-items-center fixed-height">
                <div class="center">  
                <!-- <h6>{{items.item_name}}</h6> -->
                <div class="d-flex align-items-center mb-1">
                   <h6 class="m-0">{{items.item_name}}</h6>
                   <div v-if="items.total_allergens>0" class="ml-2">                       
                       <el-button                                                
                        type="plain"
                        link
                        @click="showAllergens(items.item_id)"
                        >
                        <i class="zmdi zmdi-info-outline font20"></i>
                        </el-button>
                   </div>
                </div>
                <p v-html="items.item_description"></p>
                
                <template v-if="items.total_addon <=0 && items.total_meta <=0 ">
                
                    <div class="btn-group btn-group-toggle input-group-small" data-toggle="buttons">
                    <label v-for="(price, index) in items.price" class="btn" :class="{ active: index==0 }">	                           
                        <input :value="price.item_size_id" name="size" id="size" type="radio" :class="'item_size_id_'+ items.item_uuid"  > 
                        <template v-if="price.discount <=0">
                        {{price.size_name}} {{price.pretty_price}}
                        </template><!-- v-if-->
                        <template v-else>
                        {{price.size_name}} <del>{{price.pretty_price}}</del> {{price.pretty_price_after_discount}}
                        </template> <!--v-else-->
                    </label>
                    </div> <!--btn-group-->
                    
                </template> <!--v-if-->
                
                <template v-else>
                    <p class="bold m-0 prices">
                    <template  v-for="(price, index) in items.price">
                        <template v-if="price.discount <=0">
                        <span class="mr-2">{{price.size_name}} {{price.pretty_price}}</span>
                        </template><!-- v-if-->
                        <template v-else>
                        <span class="mr-2">{{price.size_name}} <del>{{price.pretty_price}}</del> {{price.pretty_price_after_discount}}</span>
                        </template> <!--v-else-->
                    </template > <!--v-for-->
                    </p>
                </template> <!--v-else-->
                
                </div> <!--center-->
            </div> <!--col-->
                                                
            <div v-if="itemAvailable(items.item_id,val.cat_id)" class="col-lg-4 col-md-4 d-flex align-items-center justify-content-start justify-content-lg-center">
                                    
            <template v-if="items.total_addon <=0 && items.total_meta <=0 && items.price.length<=1 ">		                            	                 
                <div class="position-relative quantity-wrapper">	     
                    <template v-if=" items.qty>0 " >              
                    <div class="quantity-parent">
                        <div class="quantity d-flex justify-content-between m-auto">
                        <div><a href="javascript:;" @click="updateInlineQtyBefore('less',items,val.cat_id)" class="rounded-pill qty-btn" data-id="less"><i class="zmdi zmdi-minus"></i></a></div>
                        <div class="qty">{{ items.qty }}</div>
                        <div><a href="javascript:;" @click="updateInlineQtyBefore('add',items,val.cat_id)" class="rounded-pill qty-btn" data-id="plus"><i class="zmdi zmdi-plus"></i></a></div>
                        </div>  
                    </div> <!--quantity-parent-->		
                    </template>                
                    
                    <template v-else=" items<=0 " >  
                    <a href="javascript:;" @click="updateInlineQtyBefore('add',items,val.cat_id)" class="btn btn-grey quantity-add-cart">								 
                        <?php echo t("Add to cart")?>
                    </a>	                
                    </template>
                                                
                </div> <!--position-relative-->
            </template> <!--v-if-->
            
            <template v-else>
            <a href="javascript:;" class="btn btn-grey xget-item-details" 
            @click="viewItemBefore({cat_id:val.cat_id,item_uuid:items.item_uuid})">					   
            <?php echo t("Add to cart")?>
            </a>
            </template> <!--v-else-->
            
            </div> <!--col-->

            <div v-else class="col-lg-4 col-md-4 d-flex align-items-center justify-content-start justify-content-lg-center">
                <p class="text-muted"><?php echo t("Not available")?></p>
            </div>
            
        </div> <!--row-->
    </div> <!--col-->
    
    </div> <!--row-->
    </div><!-- list-item-rows-->		     
</section>