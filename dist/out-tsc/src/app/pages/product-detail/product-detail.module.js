import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { ProductDetailPage } from './product-detail.page';
var routes = [
    {
        path: '',
        component: ProductDetailPage
    }
];
var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                PipesModule,
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProductDetailPage]
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());
export { ProductDetailPageModule };
//# sourceMappingURL=product-detail.module.js.map