import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicModule } from '@ionic/angular';
import { TabAccountPage } from './tab-account.page';
var routes = [
    {
        path: '',
        component: TabAccountPage
    }
];
var TabAccountPageModule = /** @class */ (function () {
    function TabAccountPageModule() {
    }
    TabAccountPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                FontAwesomeModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TabAccountPage]
        })
    ], TabAccountPageModule);
    return TabAccountPageModule;
}());
export { TabAccountPageModule };
//# sourceMappingURL=tab-account.module.js.map