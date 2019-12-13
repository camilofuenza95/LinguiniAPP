import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PrivacyPolicesPage } from './privacy-polices.page';
var routes = [
    {
        path: '',
        component: PrivacyPolicesPage
    }
];
var PrivacyPolicesPageModule = /** @class */ (function () {
    function PrivacyPolicesPageModule() {
    }
    PrivacyPolicesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PrivacyPolicesPage]
        })
    ], PrivacyPolicesPageModule);
    return PrivacyPolicesPageModule;
}());
export { PrivacyPolicesPageModule };
//# sourceMappingURL=privacy-polices.module.js.map