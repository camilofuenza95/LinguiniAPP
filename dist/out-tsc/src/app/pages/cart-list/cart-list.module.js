import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { CartListPage } from './cart-list.page';
var routes = [
    {
        path: '',
        component: CartListPage
    }
];
var CartListPageModule = /** @class */ (function () {
    function CartListPageModule() {
    }
    CartListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CartListPage]
        })
    ], CartListPageModule);
    return CartListPageModule;
}());
export { CartListPageModule };
//# sourceMappingURL=cart-list.module.js.map