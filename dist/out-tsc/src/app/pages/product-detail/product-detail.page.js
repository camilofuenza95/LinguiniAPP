import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from './../../services/cart.service';
var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(activedRoute, cartService, productService) {
        this.activedRoute = activedRoute;
        this.cartService = cartService;
        this.productService = productService;
        this.pObj = { rec_title: '', display: { qty: '0', indx: '0' } };
    }
    ProductDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        var pro_id = this.activedRoute.snapshot.paramMap.get('pro_id');
        this.productService.getProducts()
            .then(function (res) {
            var result = res;
            console.log(result);
            _this.pObj = result.data.find(function (item) { return item.id === pro_id; });
            _this.pObj.display = {};
            _this.pObj.display.indx = 0;
            _this.pObj.display.qty = 0;
            //console.log(this.productData);
        });
    };
    ProductDetailPage.prototype.addToCart = function (pObj, index) {
        this.cartService.addToCart(pObj, index);
        // this.commonServices.toastMsg('Successfuly Added');
    };
    ProductDetailPage.prototype.LessOneItem = function (pObj, index) {
        this.cartService.removeOneProduct(pObj, index);
    };
    ProductDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.page.html',
            styleUrls: ['./product-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            CartService,
            ProductsService])
    ], ProductDetailPage);
    return ProductDetailPage;
}());
export { ProductDetailPage };
//# sourceMappingURL=product-detail.page.js.map