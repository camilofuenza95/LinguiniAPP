import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { CommonService } from './../../services/common.service';
var CartDeliveryOptionsPage = /** @class */ (function () {
    function CartDeliveryOptionsPage(cartService, router, commonService) {
        this.cartService = cartService;
        this.router = router;
        this.commonService = commonService;
        this.cartData = this.cartService.getCart();
        var cDate = new Date();
        this.minDate = cDate.getFullYear() + "-" + ("0" + (cDate.getMonth() + 1)).slice(-2) + "-" + cDate.getDate();
        var lastDay = new Date(cDate.getFullYear(), cDate.getMonth() + 2, 0);
        this.maxDate = cDate.getFullYear() + "-" + ("0" + (cDate.getMonth() + 2)).slice(-2) + "-" + lastDay.getDate();
        this.myDate = new Date().toISOString();
        //console.log(lastDay);
        this.isExpressDelivery = true;
        this.deliveryOptions = [
            { id: 1, type: "Express Delivery", amount: "10.00", code: 'EXP' },
            { id: 2, type: "Schedule Delivery", amount: "0", code: 'SCH' }
        ];
    }
    CartDeliveryOptionsPage.prototype.ngOnInit = function () {
    };
    CartDeliveryOptionsPage.prototype.checkout = function () {
    };
    CartDeliveryOptionsPage.prototype.setDeliveryMethod = function (obj) {
        this.cartData.deliveryMethod = obj;
        if (obj.code == 'SCH')
            this.isExpressDelivery = false;
        else
            this.isExpressDelivery = true;
    };
    CartDeliveryOptionsPage.prototype.moveNext = function () {
        if (this.cartData.deliveryMethod.code == '') {
            this.commonService.showAlert("Select delivery option to proceed.");
        }
        else {
            this.router.navigateByUrl('/cart-payment');
        }
    };
    CartDeliveryOptionsPage = tslib_1.__decorate([
        Component({
            selector: 'app-cart-delivery-options',
            templateUrl: './cart-delivery-options.page.html',
            styleUrls: ['./cart-delivery-options.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartService,
            Router,
            CommonService])
    ], CartDeliveryOptionsPage);
    return CartDeliveryOptionsPage;
}());
export { CartDeliveryOptionsPage };
//# sourceMappingURL=cart-delivery-options.page.js.map