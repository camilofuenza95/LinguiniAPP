import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Events, AlertController } from '@ionic/angular';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';
var CartListPage = /** @class */ (function () {
    function CartListPage(cartService, router, ev, alertController, service) {
        this.cartService = cartService;
        this.router = router;
        this.ev = ev;
        this.alertController = alertController;
        this.service = service;
    }
    CartListPage.prototype.ngOnInit = function () {
        var _this = this;
        var idMesa = localStorage.getItem('idMesa');
        this.service.getPedidos(parseInt(idMesa))
            /*this.service.getPedidos(11)*/
            .subscribe(function (data) {
            _this.ordenes = data;
        });
        //this.cartData = this.cartService.getCartData();
        // this.cartData = [ {"id":"1","cat_id":"11","rec_title":"Bacon Burgers on Brioche Buns","rec_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia facilisis faucibus. Phasellussit amet ex id diam finibus laoreet. Pellentesque tempus semper leo bibendum lobortis.","rec_price":"43.00","rec_sale_price":"35.00","rec_img":"http://foodcircle.hybridtemplates.com/v2/images/breakfast.png","addon_title":"Orgenic Vegetable Set", "addon_sub_title":"Roma Tomatoes, Red Onions, Kalamata Olives...","addon_rating":"4.8","addon_reviews":"545","addon_discount":"40% of | Use Coupon EATME","display":{"indx":"0","qty":"0"},"quantity":100,"rec_attr":[{"id":"55","rec_pid":"1","rec_attr_id":"3","rec_attr_vid":"1","rec_attr_price":"25.00","rec_attr_sale_price":"20.00","qty":"0","stock":"","rec_title":"500 gm"}]}];
    };
    CartListPage.prototype.ngOnDestroy = function () {
        this.ev.publish('reset-product-qty', "true");
    };
    CartListPage.prototype.addToCart = function (pObj, index) {
        console.log('pObj ', pObj);
        this.cartService.addToCart(pObj, index);
    };
    CartListPage.prototype.removeCartItem = function (pObj) {
        this.cartService.removeProduct(pObj);
    };
    CartListPage.prototype.LessOneItem = function (pObj, index) {
        this.cartService.removeOneProduct(pObj, index);
    };
    CartListPage.prototype.moveNext = function () {
        this.router.navigateByUrl('/cart-payment');
    };
    CartListPage.prototype.cancelarOrden = function (orden) {
        var _this = this;
        this.service.cancelarOrden(orden.idOrden)
            .subscribe(function (data) {
            _this.ordenes = _this.ordenes.filter(function (c) { return c !== orden; });
        });
    };
    CartListPage = tslib_1.__decorate([
        Component({
            selector: 'app-cart-list',
            templateUrl: './cart-list.page.html',
            styleUrls: ['./cart-list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartService,
            Router,
            Events,
            AlertController,
            APILinguiniServiceService])
    ], CartListPage);
    return CartListPage;
}());
export { CartListPage };
//# sourceMappingURL=cart-list.page.js.map