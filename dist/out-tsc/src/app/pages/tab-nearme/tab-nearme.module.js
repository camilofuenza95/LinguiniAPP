import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicModule } from '@ionic/angular';
import { TabNearmePage } from './tab-nearme.page';
import { SlidingBannersComponent } from '../../components/sliding-banners/sliding-banners.component';
import { LayeredItemComponent } from '../../components/layered-item/layered-item.component';
var routes = [
    {
        path: '',
        component: TabNearmePage
    }
];
var TabNearmePageModule = /** @class */ (function () {
    function TabNearmePageModule() {
    }
    TabNearmePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                FontAwesomeModule
            ],
            declarations: [TabNearmePage, SlidingBannersComponent, LayeredItemComponent]
        })
    ], TabNearmePageModule);
    return TabNearmePageModule;
}());
export { TabNearmePageModule };
//# sourceMappingURL=tab-nearme.module.js.map