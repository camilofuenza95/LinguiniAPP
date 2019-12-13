import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Carta } from 'src/app/Modelo/Carta';
import { AlertController, Events } from '@ionic/angular';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { formatDate } from '@angular/common';
var ListarPastasComponent = /** @class */ (function () {
    function ListarPastasComponent(alertController, service, router, productService, cartService, activedRoute, ev) {
        this.alertController = alertController;
        this.service = service;
        this.router = router;
        this.productService = productService;
        this.cartService = cartService;
        this.activedRoute = activedRoute;
        this.ev = ev;
        this.orden = { idOrden: 0, idCarta: 0, idEstado: 0, idMesa: 0, fechaEmisionOrden: '', imagenCarta: '', nombreCarta: '', nombreEstado: '' };
        this.carta = new Carta();
        this.data = [];
        this._isSkeleton = true;
        this._hasRecords = true;
        this.myDate = new Date();
    }
    ListarPastasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPastas()
            .subscribe(function (data) {
            _this.cartas = data;
        });
        //----------Category------------------
        var cat_id = this.activedRoute.snapshot.paramMap.get('cat_id');
        //console.log('cat_id ',cat_id);
        this.productService.getCategories()
            .then(function (res) {
            var result = res;
            //console.log('result',result);
            _this.categoryData = result.data.find(function (item) { return item.id === cat_id; });
            _this.subCategroyData = _this.categoryData.sub_cat;
            if (_this.subCategroyData.length) {
                _this.selectedCatId = _this.subCategroyData[0].id;
                console.log('sub cat id ', _this.selectedCatId);
                // this.showProductByCatId(this.subCategroyData[0].id);
            }
            //console.log('this.categoryData ',this.categoryData);
        });
        //--------Product--------------------
        this.productService.getProducts()
            .then(function (res) {
            var result = res;
            //this.data = result.data;
            //----------------------------------
            _this.data = result.data.filter(function (item) {
                item.display = {};
                if (item.rec_attr.length) {
                    item.display.attr_title = item.rec_attr[0].rec_title;
                    item.display.price = item.rec_attr[0].rec_attr_price;
                    item.display.sale_price = item.rec_attr[0].rec_attr_sale_price;
                }
                else {
                    item.display.price = item.rec_price;
                    item.display.sale_price = item.rec_sale_price;
                }
                item.display.indx = 0;
                item.display.qty = 0;
                return item;
            });
            //----------------------------------
            setTimeout(function () {
                _this._isSkeleton = false;
                if (!_this.data.length)
                    _this._hasRecords = false;
                else
                    _this._hasRecords = true;
            }, 2000);
        });
        //--------------------------------
    };
    ListarPastasComponent.prototype.showProductByCatId = function (cat_id) {
        this.selectedCatId = cat_id;
        var tmpData = this.data.filter(function (item) {
            return item.rec_cat_ids.indexOf(cat_id) > -1;
        });
        if (!tmpData.length)
            this._hasRecords = false;
        else
            this._hasRecords = true;
        console.log('tmpData ', tmpData);
    };
    Object.defineProperty(ListarPastasComponent.prototype, "isSkeleton", {
        set: function (val) {
            this._isSkeleton = (val !== undefined && val !== null) ? val : false;
        },
        enumerable: true,
        configurable: true
    });
    // @Input() set object(val: any) {
    //this._obj = (val !== undefined && val !== null) ? val : {};
    //}
    ListarPastasComponent.prototype.addToCart = function (pObj, index) {
        this.cartService.addToCart(pObj, index);
    };
    ListarPastasComponent.prototype.LessOneItem = function (pObj, index) {
        this.cartService.removeOneProduct(pObj, index);
    };
    ListarPastasComponent.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Éxito!',
                            subHeader: 'Su pedido se está preparando',
                            message: '¨Puede revisar el estado de sus pedidos dando click al icono de la izquina superior..',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListarPastasComponent.prototype.registrarOrden = function (carta) {
        var _this = this;
        this.orden.idCarta = carta.idCarta;
        var idMesa = localStorage.getItem('idMesa');
        this.orden.idMesa = parseInt(idMesa);
        /* this.orden.idMesa = 11;*/
        this.orden.idEstado = 5;
        this.orden.fechaEmisionOrden = formatDate(this.myDate, 'dd/MM/yyyy', 'en');
        this.service.registrarOrden(this.orden)
            .subscribe(function (data) {
            _this.presentAlert();
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], ListarPastasComponent.prototype, "isSkeleton", null);
    ListarPastasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-listar-pastas',
            templateUrl: './listar-pastas.component.html',
            styleUrls: ['./listar-pastas.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController, APILinguiniServiceService, Router,
            ProductsService,
            CartService,
            ActivatedRoute,
            Events])
    ], ListarPastasComponent);
    return ListarPastasComponent;
}());
export { ListarPastasComponent };
//# sourceMappingURL=listar-pastas.component.js.map