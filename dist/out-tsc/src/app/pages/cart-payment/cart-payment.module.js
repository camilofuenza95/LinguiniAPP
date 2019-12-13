import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { CartPaymentPage } from './cart-payment.page';
var routes = [
    {
        path: '',
        component: CartPaymentPage
    }
];
var CartPaymentPageModule = /** @class */ (function () {
    function CartPaymentPageModule() {
    }
    CartPaymentPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CartPaymentPage]
        })
    ], CartPaymentPageModule);
    return CartPaymentPageModule;
}());
export { CartPaymentPageModule };
//# sourceMappingURL=cart-payment.module.js.map