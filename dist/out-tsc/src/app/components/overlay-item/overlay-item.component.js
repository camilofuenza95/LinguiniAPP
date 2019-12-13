import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';
import { Carta } from 'src/app/Modelo/Carta';
var OverlayItemComponent = /** @class */ (function () {
    function OverlayItemComponent(cartService, service) {
        this.cartService = cartService;
        this.service = service;
        this.orden = { idOrden: 0, idCarta: 0, idEstado: 0, idMesa: 0, fechaEmisionOrden: '', imagenCarta: '', nombreCarta: '', nombreEstado: '' };
        this.carta = new Carta();
    }
    OverlayItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getBebidas()
            .subscribe(function (data) {
            _this.cartas = data;
        });
    };
    Object.defineProperty(OverlayItemComponent.prototype, "isSkeleton", {
        set: function (val) {
            this._isSkeleton = (val !== undefined && val !== null) ? val : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayItemComponent.prototype, "object", {
        set: function (val) {
            this._obj = (val !== undefined && val !== null) ? val : {};
        },
        enumerable: true,
        configurable: true
    });
    OverlayItemComponent.prototype.addToCart = function (pObj, index) {
        this.cartService.addToCart(pObj, index);
    };
    OverlayItemComponent.prototype.LessOneItem = function (pObj, index) {
        this.cartService.removeOneProduct(pObj, index);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], OverlayItemComponent.prototype, "isSkeleton", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], OverlayItemComponent.prototype, "object", null);
    OverlayItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-overlay-item',
            templateUrl: './overlay-item.component.html',
            styleUrls: ['./overlay-item.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartService, APILinguiniServiceService])
    ], OverlayItemComponent);
    return OverlayItemComponent;
}());
export { OverlayItemComponent };
//# sourceMappingURL=overlay-item.component.js.map