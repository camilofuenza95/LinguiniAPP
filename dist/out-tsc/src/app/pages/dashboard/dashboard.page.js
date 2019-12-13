import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartService } from './../../services/cart.service';
var DashboardPage = /** @class */ (function () {
    function DashboardPage(cartService) {
        this.cartService = cartService;
        this.isVisibaleCart = true;
    }
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('keyboardDidShow', function (event) {
            // Describe your logic which will be run each time when keyboard is about to be shown.
            //console.log(event.keyboardHeight);
            _this.isVisibaleCart = false;
        });
        window.addEventListener('keyboardDidHide', function () {
            // Describe your logic which will be run each time keyboard is closed.
            _this.isVisibaleCart = true;
        });
    };
    DashboardPage = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.page.html',
            styleUrls: ['./dashboard.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartService])
    ], DashboardPage);
    return DashboardPage;
}());
export { DashboardPage };
//# sourceMappingURL=dashboard.page.js.map