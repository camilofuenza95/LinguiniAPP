import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthForgotPasswordPage } from './auth-forgot-password.page';
var routes = [
    {
        path: '',
        component: AuthForgotPasswordPage
    }
];
var AuthForgotPasswordPageModule = /** @class */ (function () {
    function AuthForgotPasswordPageModule() {
    }
    AuthForgotPasswordPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AuthForgotPasswordPage]
        })
    ], AuthForgotPasswordPageModule);
    return AuthForgotPasswordPageModule;
}());
export { AuthForgotPasswordPageModule };
//# sourceMappingURL=auth-forgot-password.module.js.map