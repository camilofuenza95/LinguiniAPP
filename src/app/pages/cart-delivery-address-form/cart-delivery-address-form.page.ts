import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-cart-delivery-address-form',
  templateUrl: './cart-delivery-address-form.page.html',
  styleUrls: ['./cart-delivery-address-form.page.scss'],
})
export class CartDeliveryAddressFormPage implements OnInit {

  public formData:FormGroup;
  public addressData:any;
  constructor(
    public formBuilder:FormBuilder,
    private userService:UserService,
    private navParams:NavParams,
    private motalController:ModalController) {

    var addData = this.navParams.get("addr");
    console.log('addData ',addData);

       if(typeof addData!='undefined'){
           this.addressData = addData;
       }else{
           this.addressData = {id:'',houseNumber:'',streetName:'',state:'',city:'',mobileNumber:''};
       }


       this.formData = formBuilder.group({
         id:[this.addressData.id],
         houseNumber:[this.addressData.houseNumber,Validators.required],
         streetName:[this.addressData.streetName,Validators.required],
         city:[this.addressData.city,Validators.required],
         state:[this.addressData.state,Validators.compose([Validators.maxLength(40), Validators.pattern('[a-zA-Z]*'), Validators.required])],
         mobileNumber:[this.addressData.mobileNumber,Validators.required]
       });

   }

  ngOnInit() {
  }

  formSubmit(){
    console.log('ID : ',this.formData.value.id);
    if(this.formData.value.id!=''){
          console.log("update");
          this.userService.updateAddress(this.formData.value);
    }else{
        console.log("add");
        this.userService.addAddress(this.formData.value);
    }

    this.motalController.dismiss();
  }

  close(){
     this.motalController.dismiss();
  }

}
