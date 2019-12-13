import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthRegisterPage } from './auth-register.page';
var routes = [
    {
        path: '',
        component: AuthRegisterPage
    }
];
var AuthRegisterPageModule = /** @class */ (function () {
    function AuthRegisterPageModule() {
    }
    AuthRegisterPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AuthRegisterPage]
        })
    ], AuthRegisterPageModule);
    return AuthRegisterPageModule;
}());
export { AuthRegisterPageModule };
//# sourceMappingURL=auth-register.module.js.map