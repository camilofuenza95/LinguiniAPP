import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { CartOrderStatusPage } from './cart-order-status.page';
var routes = [
    {
        path: '',
        component: CartOrderStatusPage
    }
];
var CartOrderStatusPageModule = /** @class */ (function () {
    function CartOrderStatusPageModule() {
    }
    CartOrderStatusPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CartOrderStatusPage]
        })
    ], CartOrderStatusPageModule);
    return CartOrderStatusPageModule;
}());
export { CartOrderStatusPageModule };
//# sourceMappingURL=cart-order-status.module.js.map