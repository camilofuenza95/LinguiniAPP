import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserChangePasswordPage } from './user-change-password.page';
var routes = [
    {
        path: '',
        component: UserChangePasswordPage
    }
];
var UserChangePasswordPageModule = /** @class */ (function () {
    function UserChangePasswordPageModule() {
    }
    UserChangePasswordPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UserChangePasswordPage]
        })
    ], UserChangePasswordPageModule);
    return UserChangePasswordPageModule;
}());
export { UserChangePasswordPageModule };
//# sourceMappingURL=user-change-password.module.js.map