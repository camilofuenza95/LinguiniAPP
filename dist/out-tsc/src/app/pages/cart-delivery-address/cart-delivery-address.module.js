import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { CartDeliveryAddressPage } from './cart-delivery-address.page';
//import { CartDeliveryAddressFormPageModule } from './../cart-delivery-address-form/cart-delivery-address-form.module';
var routes = [
    {
        path: '',
        component: CartDeliveryAddressPage
    }
];
var CartDeliveryAddressPageModule = /** @class */ (function () {
    function CartDeliveryAddressPageModule() {
    }
    CartDeliveryAddressPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                //CartDeliveryAddressFormPageModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CartDeliveryAddressPage]
        })
    ], CartDeliveryAddressPageModule);
    return CartDeliveryAddressPageModule;
}());
export { CartDeliveryAddressPageModule };
//# sourceMappingURL=cart-delivery-address.module.js.map