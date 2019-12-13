import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthLoginPage } from './auth-login.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
var routes = [
    {
        path: '',
        component: AuthLoginPage
    }
];
var AuthLoginPageModule = /** @class */ (function () {
    function AuthLoginPageModule() {
    }
    AuthLoginPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                FontAwesomeModule
            ],
            declarations: [AuthLoginPage]
        })
    ], AuthLoginPageModule);
    return AuthLoginPageModule;
}());
export { AuthLoginPageModule };
//# sourceMappingURL=auth-login.module.js.map