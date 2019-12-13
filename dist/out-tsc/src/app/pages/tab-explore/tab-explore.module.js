import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabExplorePage } from './tab-explore.page';
var routes = [
    {
        path: '',
        component: TabExplorePage
    }
];
var TabExplorePageModule = /** @class */ (function () {
    function TabExplorePageModule() {
    }
    TabExplorePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TabExplorePage]
        })
    ], TabExplorePageModule);
    return TabExplorePageModule;
}());
export { TabExplorePageModule };
//# sourceMappingURL=tab-explore.module.js.map