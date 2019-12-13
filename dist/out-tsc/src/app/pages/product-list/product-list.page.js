import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartService } from './../../services/cart.service';
import { Events } from '@ionic/angular';
var ProductListPage = /** @class */ (function () {
    function ProductListPage(productService, cartService, activedRoute, ev) {
        var _this = this;
        this.productService = productService;
        this.cartService = cartService;
        this.activedRoute = activedRoute;
        this.ev = ev;
        this.data = [];
        this._isSkeleton = true;
        this._hasRecords = true;
        this.ev.subscribe('reset-product-qty', function (name) {
            _this.cartService.restCartProducts(_this.data);
        });
    }
    ProductListPage.prototype.ngOnInit = function () {
        var _this = this;
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
    ProductListPage.prototype.showProductByCatId = function (cat_id) {
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
    ProductListPage.prototype.addToCart = function (pObj, index) {
        this.cartService.addToCart(pObj, index);
    };
    ProductListPage.prototype.LessOneItem = function (pObj, index) {
        this.cartService.removeOneProduct(pObj, index);
    };
    ProductListPage = tslib_1.__decorate([
        Component({
            selector: 'app-product-list',
            templateUrl: './product-list.page.html',
            styleUrls: ['./product-list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService,
            CartService,
            ActivatedRoute,
            Events])
    ], ProductListPage);
    return ProductListPage;
}());
export { ProductListPage };
//# sourceMappingURL=product-list.page.js.map