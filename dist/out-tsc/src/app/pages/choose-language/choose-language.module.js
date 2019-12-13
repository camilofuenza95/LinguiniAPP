import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChooseLanguagePage } from './choose-language.page';
var routes = [
    {
        path: '',
        component: ChooseLanguagePage
    }
];
var ChooseLanguagePageModule = /** @class */ (function () {
    function ChooseLanguagePageModule() {
    }
    ChooseLanguagePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ChooseLanguagePage]
        })
    ], ChooseLanguagePageModule);
    return ChooseLanguagePageModule;
}());
export { ChooseLanguagePageModule };
//# sourceMappingURL=choose-language.module.js.map