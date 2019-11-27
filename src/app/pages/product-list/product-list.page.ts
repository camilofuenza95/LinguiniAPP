import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartService } from './../../services/cart.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  public data:any=[];
  public categoryData:any;
  public subCategroyData:any;
  public selectedCatId:number;
  public _isSkeleton:boolean = true;
  public _hasRecords:boolean=true;
  constructor(
    public productService:ProductsService,
    public cartService:CartService,
    public activedRoute:ActivatedRoute, 
    private ev:Events
    ) {

      this.ev.subscribe('reset-product-qty', (name) => {
          this.cartService.restCartProducts(this.data);
      }); 
      
  }


  ngOnInit() {
    //----------Category------------------
        let cat_id = this.activedRoute.snapshot.paramMap.get('cat_id');
        //console.log('cat_id ',cat_id);

        this.productService.getCategories()
          .then(res => {
              let result:any = res;
              //console.log('result',result);
        
            this.categoryData = result.data.find(item => item.id === cat_id);
            this.subCategroyData =  this.categoryData.sub_cat;
            if(this.subCategroyData.length){
                this.selectedCatId = this.subCategroyData[0].id;
                console.log('sub cat id ',this.selectedCatId);

             // this.showProductByCatId(this.subCategroyData[0].id);
            }
            //console.log('this.categoryData ',this.categoryData);
        });
    
    //--------Product--------------------
        this.productService.getProducts()
        .then(res => {
            let result:any = res;
            //this.data = result.data;
            //----------------------------------
            this.data = result.data.filter(item => {
                      item.display = {};
                      if(item.rec_attr.length){
                        item.display.attr_title   = item.rec_attr[0].rec_title;
                        item.display.price        = item.rec_attr[0].rec_attr_price;
                        item.display.sale_price   = item.rec_attr[0].rec_attr_sale_price;
                      }else{
                        item.display.price       = item.rec_price;
                        item.display.sale_price  = item.rec_sale_price;
                      }
                      item.display.indx     = 0;
                      item.display.qty      = 0;

              return item;
            });
            //----------------------------------
            setTimeout(()=>{
                this._isSkeleton = false;
                if(!this.data.length) this._hasRecords = false; else  this._hasRecords = true;
            },2000);
      });
    //--------------------------------
  }

  showProductByCatId(cat_id:number){
     this.selectedCatId = cat_id;

     let tmpData:any = this.data.filter(item => {
        return item.rec_cat_ids.indexOf(cat_id) > -1
     });

     if(!tmpData.length)  this._hasRecords = false; else  this._hasRecords = true;
     
     console.log('tmpData ',tmpData);

    
  }

  addToCart(pObj,index){
    this.cartService.addToCart(pObj,index);
  }

  LessOneItem(pObj,index){
    this.cartService.removeOneProduct(pObj,index);
  }

}
