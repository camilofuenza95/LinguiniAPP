import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthSignupPage } from './auth-signup.page';
var routes = [
    {
        path: '',
        component: AuthSignupPage
    }
];
var AuthSignupPageModule = /** @class */ (function () {
    function AuthSignupPageModule() {
    }
    AuthSignupPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AuthSignupPage]
        })
    ], AuthSignupPageModule);
    return AuthSignupPageModule;
}());
export { AuthSignupPageModule };
//# sourceMappingURL=auth-signup.module.js.map