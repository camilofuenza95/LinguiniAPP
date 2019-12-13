import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CartDeliveryAddressFormPage } from './cart-delivery-address-form.page';
var routes = [
    {
        path: '',
        component: CartDeliveryAddressFormPage
    }
];
var CartDeliveryAddressFormPageModule = /** @class */ (function () {
    function CartDeliveryAddressFormPageModule() {
    }
    CartDeliveryAddressFormPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CartDeliveryAddressFormPage]
        })
    ], CartDeliveryAddressFormPageModule);
    return CartDeliveryAddressFormPageModule;
}());
export { CartDeliveryAddressFormPageModule };
//# sourceMappingURL=cart-delivery-address-form.module.js.map