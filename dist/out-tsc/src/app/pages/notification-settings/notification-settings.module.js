import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NotificationSettingsPage } from './notification-settings.page';
var routes = [
    {
        path: '',
        component: NotificationSettingsPage
    }
];
var NotificationSettingsPageModule = /** @class */ (function () {
    function NotificationSettingsPageModule() {
    }
    NotificationSettingsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NotificationSettingsPage]
        })
    ], NotificationSettingsPageModule);
    return NotificationSettingsPageModule;
}());
export { NotificationSettingsPageModule };
//# sourceMappingURL=notification-settings.module.js.map