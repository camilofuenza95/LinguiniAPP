import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var MenuPage = /** @class */ (function () {
    function MenuPage(router) {
        var _this = this;
        this.router = router;
        this.pages = [
            {
                title: 'Dashboard',
                icon: 'clipboard-list',
                url: '/menu/dashboard'
            },
            {
                title: 'Your Account',
                icon: 'user-circle',
                url: '/menu/dashboard/tabs/account'
            },
            {
                title: 'Your Orders',
                icon: 'shopping-bag',
                url: '/menu/user-orders'
            },
            // {
            //   title:'Your wish list',
            //   icon:'gratipay',
            //   url:'/menu/user-wish-list'
            // },
            {
                title: 'Feedback',
                icon: 'comments',
                url: '/menu/feedback'
            },
            {
                title: 'FAQ',
                icon: 'question-circle',
                url: '/menu/faq'
            },
            {
                title: 'About Us',
                icon: 'info-circle',
                url: '/menu/about-us'
            },
            {
                title: 'Term & Conditions',
                icon: 'info-circle',
                url: '/menu/term-and-condition'
            },
            {
                title: 'Privacy Policies',
                icon: 'info-circle',
                url: '/menu/privacy-polices'
            }
        ];
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.page.html',
            styleUrls: ['./menu.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.page.js.map