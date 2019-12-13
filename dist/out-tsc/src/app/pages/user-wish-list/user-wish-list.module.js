import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserWishListPage } from './user-wish-list.page';
var routes = [
    {
        path: '',
        component: UserWishListPage
    }
];
var UserWishListPageModule = /** @class */ (function () {
    function UserWishListPageModule() {
    }
    UserWishListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UserWishListPage]
        })
    ], UserWishListPageModule);
    return UserWishListPageModule;
}());
export { UserWishListPageModule };
//# sourceMappingURL=user-wish-list.module.js.map