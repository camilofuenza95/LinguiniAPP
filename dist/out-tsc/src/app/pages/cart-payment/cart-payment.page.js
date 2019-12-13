import * as tslib_1 from "tslib";
import { CommonService } from './../../services/common.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';
var CartPaymentPage = /** @class */ (function () {
    function CartPaymentPage(cartService, router, commonService, service) {
        this.cartService = cartService;
        this.router = router;
        this.commonService = commonService;
        this.service = service;
        this.cartData = this.cartService.getCart();
        console.log(this.cartData);
    }
    CartPaymentPage.prototype.ngOnInit = function () {
        var _this = this;
        var idMesa = localStorage.getItem('idMesa');
        this.service.mostrarComprobante(parseInt(idMesa))
            .subscribe(function (data) {
            _this.ordenJoinComprobantes = data;
        });
        this.service.getTipoPago()
            .subscribe(function (data2) {
            _this.tiposPago = data2;
        });
    };
    CartPaymentPage.prototype.setPaymentMethod = function (obj) {
        this.cartData.paymentMethod = obj;
    };
    CartPaymentPage.prototype.moveNext = function () {
        if (this.cartData.paymentMethod.code == '') {
            this.commonService.showAlert("Select payment option to proceed.");
        }
        else {
            this.router.navigateByUrl('/cart-order-status');
        }
    };
    CartPaymentPage.prototype.radioButtonSelected = function (tp) {
        this.idTipoPago = tp.idTipoPago;
    };
    CartPaymentPage.prototype.pagarCuenta = function () {
        var idMesa = localStorage.getItem('idMesa');
        this.comprobantes.idMesa = parseInt(idMesa);
        this.comprobantes.totalComprobante = 0;
        this.comprobantes.idTipoPago = this.idTipoPago;
        console.log(this.comprobantes.idMesa);
        console.log(this.comprobantes.totalComprobante);
        console.log(this.comprobantes.idTipoPago);
        this.service.agregarComprobante(this.comprobantes);
    };
    CartPaymentPage = tslib_1.__decorate([
        Component({
            selector: 'app-cart-payment',
            templateUrl: './cart-payment.page.html',
            styleUrls: ['./cart-payment.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartService,
            Router,
            CommonService,
            APILinguiniServiceService])
    ], CartPaymentPage);
    return CartPaymentPage;
}());
export { CartPaymentPage };
//# sourceMappingURL=cart-payment.page.js.map