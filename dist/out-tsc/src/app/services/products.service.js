import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
var ProductsService = /** @class */ (function () {
    function ProductsService(api) {
        this.api = api;
    }
    ProductsService.prototype.getCategories = function (params) {
        var _this = this;
        //return this.api.get('dashboard-slider');
        return new Promise(function (resolve, reject) {
            _this.api.get('categories')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProductsService.prototype.getProducts = function (params) {
        var _this = this;
        //return this.api.get('dashboard-slider');
        return new Promise(function (resolve, reject) {
            _this.api.get('products')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProductsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], ProductsService);
    return ProductsService;
}());
export { ProductsService };
//# sourceMappingURL=products.service.js.map