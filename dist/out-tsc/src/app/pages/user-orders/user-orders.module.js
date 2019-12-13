import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserOrdersPage } from './user-orders.page';
var routes = [
    {
        path: '',
        component: UserOrdersPage
    }
];
var UserOrdersPageModule = /** @class */ (function () {
    function UserOrdersPageModule() {
    }
    UserOrdersPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UserOrdersPage]
        })
    ], UserOrdersPageModule);
    return UserOrdersPageModule;
}());
export { UserOrdersPageModule };
//# sourceMappingURL=user-orders.module.js.map