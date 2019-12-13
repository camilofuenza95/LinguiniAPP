import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TermAndConditionPage } from './term-and-condition.page';
var routes = [
    {
        path: '',
        component: TermAndConditionPage
    }
];
var TermAndConditionPageModule = /** @class */ (function () {
    function TermAndConditionPageModule() {
    }
    TermAndConditionPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TermAndConditionPage]
        })
    ], TermAndConditionPageModule);
    return TermAndConditionPageModule;
}());
export { TermAndConditionPageModule };
//# sourceMappingURL=term-and-condition.module.js.map