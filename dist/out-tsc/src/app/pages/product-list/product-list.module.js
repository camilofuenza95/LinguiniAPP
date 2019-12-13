import * as tslib_1 from "tslib";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductListPage } from './product-list.page';
import { OverlayItemComponent } from 'src/app/components/overlay-item/overlay-item.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
var routes = [
    {
        path: '',
        component: ProductListPage
    }
];
var ProductListPageModule = /** @class */ (function () {
    function ProductListPageModule() {
    }
    ProductListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                FontAwesomeModule,
                PipesModule
            ],
            declarations: [ProductListPage, OverlayItemComponent]
        })
    ], ProductListPageModule);
    return ProductListPageModule;
}());
export { ProductListPageModule };
//# sourceMappingURL=product-list.module.js.map