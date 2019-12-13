import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
var CartOrderStatusPage = /** @class */ (function () {
    function CartOrderStatusPage(cartService, router) {
        this.cartService = cartService;
        this.router = router;
    }
    CartOrderStatusPage.prototype.ngOnInit = function () {
        this.cartData = this.cartService.getCart();
        console.log(this.cartData);
    };
    CartOrderStatusPage.prototype.continueShopping = function () {
        this.cartService.resetCart();
        this.router.navigateByUrl('/menu/dashboard');
    };
    CartOrderStatusPage = tslib_1.__decorate([
        Component({
            selector: 'app-cart-order-status',
            templateUrl: './cart-order-status.page.html',
            styleUrls: ['./cart-order-status.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartService, Router])
    ], CartOrderStatusPage);
    return CartOrderStatusPage;
}());
export { CartOrderStatusPage };
//# sourceMappingURL=cart-order-status.page.js.map