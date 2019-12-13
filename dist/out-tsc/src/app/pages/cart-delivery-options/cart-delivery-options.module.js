import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { CartDeliveryOptionsPage } from './cart-delivery-options.page';
var routes = [
    {
        path: '',
        component: CartDeliveryOptionsPage
    }
];
var CartDeliveryOptionsPageModule = /** @class */ (function () {
    function CartDeliveryOptionsPageModule() {
    }
    CartDeliveryOptionsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CartDeliveryOptionsPage]
        })
    ], CartDeliveryOptionsPageModule);
    return CartDeliveryOptionsPageModule;
}());
export { CartDeliveryOptionsPageModule };
//# sourceMappingURL=cart-delivery-options.module.js.map