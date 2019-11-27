import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { UserService } from './../../services/user.service';
import { CommonService } from './../../services/common.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartDeliveryAddressFormPage } from '../cart-delivery-address-form/cart-delivery-address-form.page';

@Component({
  selector: 'app-cart-delivery-address',
  templateUrl: './cart-delivery-address.page.html',
  styleUrls: ['./cart-delivery-address.page.scss'],
})
export class CartDeliveryAddressPage implements OnInit {

  public addressData: any;
  public cartData: any;

  constructor(
    public cartService: CartService,
    public userSerices: UserService,
    public commonServices:CommonService,
    public modalController:ModalController,
    public router: Router
  ) {

  }

  ngOnInit() {
    this.cartData = this.cartService.getCart();
    this.addressData = this.userSerices.getAddress();
  }

  async addAddress() {
    // let modal = this.modalCtrl.create('CartDeliveryAddressFormPage');
    // modal.present();
    // modal.onDidDismiss((data: any[]) => {
    //   this.addressData = this.userSerices.getAddress();
    // });
    const modal = await this.modalController.create({
      component: CartDeliveryAddressFormPage
    });
     modal.present();
  }

  async editAddress(obj) {
    //let modal = this.modalCtrl.create('CartDeliveryAddressFormPage', { addr: obj });
    // modal.present();
    // modal.onDidDismiss((data: any[]) => {
    //   this.addressData = this.userSerices.getAddress();
    // });
    const modal = await this.modalController.create({
      component: CartDeliveryAddressFormPage,
      componentProps: {
        'addr': obj
      }
    });
     modal.present();
  }
  removeAddress(obj) {
    this.userSerices.removeAddress(obj);
  }
  setDeliveryAddress(obj) {
    this.cartData.deliveryAddress = obj;
  }


  moveNext() {
    if (this.cartData.deliveryAddress == '') {
      this.commonServices.showAlert("Select delivery address to proceed.");
    } else {
      this.cartData.discount.amount = '2.50';
      this.router.navigateByUrl('/cart-delivery-options');
    }
  }

}
