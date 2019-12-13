import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { UserService } from './../../services/user.service';
import { CommonService } from './../../services/common.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartDeliveryAddressFormPage } from '../cart-delivery-address-form/cart-delivery-address-form.page';
var CartDeliveryAddressPage = /** @class */ (function () {
    function CartDeliveryAddressPage(cartService, userSerices, commonServices, modalController, router) {
        this.cartService = cartService;
        this.userSerices = userSerices;
        this.commonServices = commonServices;
        this.modalController = modalController;
        this.router = router;
    }
    CartDeliveryAddressPage.prototype.ngOnInit = function () {
        this.cartData = this.cartService.getCart();
        this.addressData = this.userSerices.getAddress();
    };
    CartDeliveryAddressPage.prototype.addAddress = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: CartDeliveryAddressFormPage
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartDeliveryAddressPage.prototype.editAddress = function (obj) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: CartDeliveryAddressFormPage,
                            componentProps: {
                                'addr': obj
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartDeliveryAddressPage.prototype.removeAddress = function (obj) {
        this.userSerices.removeAddress(obj);
    };
    CartDeliveryAddressPage.prototype.setDeliveryAddress = function (obj) {
        this.cartData.deliveryAddress = obj;
    };
    CartDeliveryAddressPage.prototype.moveNext = function () {
        if (this.cartData.deliveryAddress == '') {
            this.commonServices.showAlert("Select delivery address to proceed.");
        }
        else {
            this.cartData.discount.amount = '2.50';
            this.router.navigateByUrl('/cart-delivery-options');
        }
    };
    CartDeliveryAddressPage = tslib_1.__decorate([
        Component({
            selector: 'app-cart-delivery-address',
            templateUrl: './cart-delivery-address.page.html',
            styleUrls: ['./cart-delivery-address.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartService,
            UserService,
            CommonService,
            ModalController,
            Router])
    ], CartDeliveryAddressPage);
    return CartDeliveryAddressPage;
}());
export { CartDeliveryAddressPage };
//# sourceMappingURL=cart-delivery-address.page.js.map