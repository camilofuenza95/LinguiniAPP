import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabOffersPage } from './tab-offers.page';
var routes = [
    {
        path: '',
        component: TabOffersPage
    }
];
var TabOffersPageModule = /** @class */ (function () {
    function TabOffersPageModule() {
    }
    TabOffersPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TabOffersPage]
        })
    ], TabOffersPageModule);
    return TabOffersPageModule;
}());
export { TabOffersPageModule };
//# sourceMappingURL=tab-offers.module.js.map