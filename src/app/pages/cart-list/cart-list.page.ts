import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Events, AlertController } from '@ionic/angular';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';
import { Carta } from 'src/app/Modelo/Carta';
import { Orden } from 'src/app/Modelo/Orden';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.page.html',
  styleUrls: ['./cart-list.page.scss'],
})
export class CartListPage implements OnInit {

  public cartData:any;
  cartas: Carta[];
  ordenes: Orden []; 
  constructor(
      public cartService:CartService,
      public router:Router,
      private ev:Events,
      public alertController: AlertController,
      private service: APILinguiniServiceService 
      

      ) { }

  ngOnInit() {
    const idMesa = localStorage.getItem('idMesa');
    
    //this.service.getPedidos(parseInt(idMesa))
    this.service.getPedidos(11)
    .subscribe(data => {
      this.ordenes = data;
    })
    //this.cartData = this.cartService.getCartData();
    // this.cartData = [ {"id":"1","cat_id":"11","rec_title":"Bacon Burgers on Brioche Buns","rec_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia facilisis faucibus. Phasellussit amet ex id diam finibus laoreet. Pellentesque tempus semper leo bibendum lobortis.","rec_price":"43.00","rec_sale_price":"35.00","rec_img":"http://foodcircle.hybridtemplates.com/v2/images/breakfast.png","addon_title":"Orgenic Vegetable Set", "addon_sub_title":"Roma Tomatoes, Red Onions, Kalamata Olives...","addon_rating":"4.8","addon_reviews":"545","addon_discount":"40% of | Use Coupon EATME","display":{"indx":"0","qty":"0"},"quantity":100,"rec_attr":[{"id":"55","rec_pid":"1","rec_attr_id":"3","rec_attr_vid":"1","rec_attr_price":"25.00","rec_attr_sale_price":"20.00","qty":"0","stock":"","rec_title":"500 gm"}]}];
  }

  
  ngOnDestroy(){
    this.ev.publish('reset-product-qty', "true");
 }

  addToCart(pObj,index){
    console.log('pObj ',pObj);
    this.cartService.addToCart(pObj,index);
  }

  removeCartItem(pObj){
    this.cartService.removeProduct(pObj);
  }

  LessOneItem(pObj,index){
    this.cartService.removeOneProduct(pObj,index);
  }

  moveNext(){
      this.router.navigateByUrl('/cart-delivery-address');
  }

  cancelarOrden(orden:Orden){
    this.service.cancelarOrden(orden.idOrden)
    .subscribe(data=>{
      this.ordenes=this.ordenes.filter(c=>c!==orden);
  
    
    })
      }

}
