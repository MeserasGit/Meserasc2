<section v-cloak v-for="(val,index) in menu_data" :id="val.category_uiid" :data-cat_id="val.cat_id">    
    <template v-if="index<=0">        
        <div class="d-flex justify-content-between">
            <div>
               <h5>{{ val.category_name }}</h5>
               <p>{{val.category_description}}</p>    
            </div>
            <div>            
              <div class="d-flex">
                 <div class="mr-2">
                    <el-link @click="changeMenuLayout('list')" :underline="false" >
                        <i class="zmdi zmdi-view-agenda" :class="{ 'text-grey': menu_layout=='column' }" style="font-size:30px;"></i>
                    </el-link>
                </div>
                 <div>
                    <el-link @click="changeMenuLayout('column')" :underline="false" >
                        <i class="zmdi zmdi-view-dashboard" :class="{ 'text-grey': menu_layout=='list' }" style="font-size:30px;"></i>
                    </el-link>
                </div>
              </div>                            
            </div>
        </div>
    </template>
    <template v-else>
        <h5>{{ val.category_name }}</h5>
        <p>{{val.category_description}}</p>    
    </template>

    <template v-if="menu_layout=='list'">
    <div class="row">
    <div v-for="items in val.items" class="col-lg-6 col-sm-12 mb-3" > 
        <el-card shadow="hover" :body-style="{ padding: '0px' }" >
           <div class="d-flex align-items-start align-items-stretch">
              <div class="borderx">         
                  <el-image
                        style="max-height: 130px;max-width:130px;"
                        class="w-100 h-100"
                        :src="items.url_image"
                        fit="cover"
                        lazy
                    >
                    </el-image>
              </div>
              <div class="p-2 borderx w-100">
                 <div class="d-flex align-items-start flex-column" >
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
                    <p class="d-inline-block " style="max-width: 200px;" v-html="items.item_description"></p>
                    <div class="d-flex justify-content-between align-items-center w-100">

                        <template v-if="items.price[0]">                       
                        <template v-if="items.price[0].discount>0">
                            <h5 class="m-0 text-grey"><del>{{ items.price[0].pretty_price }}</del></h5>
                            <h5 class="m-0">{{ items.price[0].pretty_price_after_discount }}</h5>
                        </template>
                        <template v-else>
                            <h5 class="m-0">{{ items.price[0].pretty_price }}</h5>
                        </template>
                        </template>

                        <template v-if="items.total_addon <=0 && items.total_meta <=0 ">
                           <div class="d-none btn-group btn-group-toggle input-group-small" data-toggle="buttons">
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
                        </template>
                        
                        <div>                        
                            <template v-if="itemAvailable(items.item_id,val.cat_id)">
                                <template v-if="items.total_addon <=0 && items.total_meta <=1 && items.price.length<=1 ">

                                    <template v-if=" items.qty>0 " >
                                        <div class="position-relative quantity-wrapper">
                                        <div class="quantity-parent">
                                            <div class="quantity d-flex justify-content-between m-auto">
                                            <div><a href="javascript:;" @click="updateInlineQtyBefore('less',items,val.cat_id)" class="rounded-pill qty-btn" data-id="less"><i class="zmdi zmdi-minus"></i></a></div>
                                            <div class="qty">{{ items.qty }}</div>
                                            <div><a href="javascript:;" @click="updateInlineQtyBefore('add',items,val.cat_id)" class="rounded-pill qty-btn" data-id="plus"><i class="zmdi zmdi-plus"></i></a></div>
                                            </div>  
                                        </div> <!--quantity-parent-->		
                                        </div>
                                    </template>
                                    <template v-else=" items<=0 " >  
                                        <?php if($disabled_inline_addtocart):?>
                                            <el-button @click="viewItemBefore({cat_id:val.cat_id,item_uuid:items.item_uuid})" color="#3ecf8e" class="white-color">
                                              <?php echo t("Add")?>
                                            </el-button>
                                        <?php else :?>                                                                                        
                                            <el-button @click="updateInlineQtyBefore('add',items,val.cat_id)"  color="#3ecf8e" class="white-color">
                                              <?php echo t("Add")?>
                                            </el-button>
                                        <?php endif;?> 
                                    </template>

                                </template>
                                <template v-else>
                                    <el-button @click="viewItemBefore({cat_id:val.cat_id,item_uuid:items.item_uuid})" color="#3ecf8e" class="white-color">
                                      <?php echo t("Add")?>
                                    </el-button>
                                </template>
                            </template>
                            <template v-else>
                                  <el-button disabled color="#b2b2b2" class="white-color">
                                      <?php echo t("Not available")?>
                                  </el-button>
                            </template>
                        </div>

                    </div>
                    <!-- d-flex between -->
                 </div>
                 <!-- d-flex -->
              </div>
              <!-- p2 -->
           </div>
        </el-card>
    </div>
    <!-- col -->
    </div>
    <!-- row -->
    </template>
    
    <template v-else>
        <div class="row">
           <div v-for="items in val.items" class="col-lg-4 col-sm-12 mb-3" > 
           <el-card shadow="hover" :body-style="{ padding: '0px' }" >
                <el-image
                        style="min-height: 130px;max-height: 130px;"
                        class="w-100 h-100"
                        :src="items.url_image"
                        fit="cover"
                        lazy
                    >
                </el-image>

                <div class="p-2">
                   <!-- <h6 class="text-truncate">{{items.item_name}}</h6> -->
                   <div class="d-flex align-items-center mb-1">
                        <h6 class="m-0 text-truncate">{{items.item_name}}</h6>
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
                   <p class="d-inline-block " style="max-width: 200px;" v-html="items.item_description"></p>

                    <div class="d-flex justify-content-between align-items-center w-100">
                        <template v-if="items.price[0]">                       
                            <template v-if="items.price[0].discount>0">
                                <h5 class="m-0 text-grey"><del>{{ items.price[0].pretty_price }}</del></h5>
                                <h5 class="m-0">{{ items.price[0].pretty_price_after_discount }}</h5>
                            </template>
                            <template v-else>
                                <h5 class="m-0">{{ items.price[0].pretty_price }}</h5>
                            </template>
                        </template>

                        <template v-if="items.total_addon <=0 && items.total_meta <=0 ">
                           <div class="d-none btn-group btn-group-toggle input-group-small" data-toggle="buttons">
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
                        </template>

                        <div>
                            

                            <template v-if="itemAvailable(items.item_id,val.cat_id)">
                                <template v-if="items.total_addon <=0 && items.total_meta <=1 && items.price.length<=1 ">

                                    <template v-if=" items.qty>0 " >
                                        <div class="position-relative quantity-wrapper">
                                        <div class="quantity-parent">
                                            <div class="quantity d-flex justify-content-between m-auto">
                                            <div><a href="javascript:;" @click="updateInlineQtyBefore('less',items,val.cat_id)" class="rounded-pill qty-btn" data-id="less"><i class="zmdi zmdi-minus"></i></a></div>
                                            <div class="qty">{{ items.qty }}</div>
                                            <div><a href="javascript:;" @click="updateInlineQtyBefore('add',items,val.cat_id)" class="rounded-pill qty-btn" data-id="plus"><i class="zmdi zmdi-plus"></i></a></div>
                                            </div>  
                                        </div> <!--quantity-parent-->		
                                        </div>
                                    </template>
                                    <template v-else=" items<=0 " >  
                                        <?php if($disabled_inline_addtocart):?>
                                            <el-button @click="viewItemBefore({cat_id:val.cat_id,item_uuid:items.item_uuid})" color="#3ecf8e" class="white-color">
                                              <?php echo t("Add")?>
                                            </el-button>
                                        <?php else :?>
                                            <el-button @click="updateInlineQtyBefore('add',items,val.cat_id)"  color="#3ecf8e" class="white-color">
                                              <?php echo t("Add")?>
                                            </el-button>
                                        <?php endif;?> 
                                    </template>

                                </template>
                                <template v-else>
                                    <el-button @click="viewItemBefore({cat_id:val.cat_id,item_uuid:items.item_uuid})" color="#3ecf8e" class="white-color">
                                      <?php echo t("Add")?>
                                    </el-button>
                                </template>
                            </template>
                            <template v-else>
                                  <el-button disabled color="#b2b2b2" class="white-color">
                                      <?php echo t("Not available")?>
                                  </el-button>
                            </template>

                        </div>
                   </div>

                </div>
                <!-- p2 -->

            </el-card>
           </div>
           <!-- col -->
        </div>
        <!-- row -->
    </template>


</section>
