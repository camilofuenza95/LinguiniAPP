import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { AlertController } from '@ionic/angular';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';
import { Router } from '@angular/router';
var TabNearmePage = /** @class */ (function () {
    function TabNearmePage(productService, alertController, service, router) {
        this.productService = productService;
        this.alertController = alertController;
        this.service = service;
        this.router = router;
        this._isSkeleton = true;
    }
    TabNearmePage.prototype.ngOnInit = function () {
        var _this = this;
        this.bannerData = [
            {
                banner_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-12-07-at-3-39-25-pm-1544215180.png",
                addon_title: "Orgenic Vegetable Set",
                addon_sub_title: "Roma Tomatoes, Red Onions, Kalamata Olives...",
                rating: "4.8",
                review: "545",
                offer: "45% of | Use Coupon EATME"
            },
            {
                banner_img: "https://hybridtemplates.com/demos/food-point/images/banner_01.png",
                addon_title: "Orgenic Vegetable Set",
                addon_sub_title: "Roma Tomatoes, Red Onions, Kalamata Olives...",
                rating: "3.2",
                review: "559",
                offer: "40% of | Use Coupon EATME"
            },
            {
                banner_img: "https://hybridtemplates.com/demos/food-point/images/banner_03.png",
                addon_title: "Orgenic Vegetable Set",
                addon_sub_title: "Roma Tomatoes, Red Onions, Kalamata Olives...",
                rating: "5.0",
                review: "854",
                offer: "30% of | Use Coupon EATME"
            },
            {
                banner_img: "https://hybridtemplates.com/demos/food-point/images/banner_04.png",
                addon_title: "Orgenic Vegetable Set",
                addon_sub_title: "Roma Tomatoes, Red Onions, Kalamata Olives...",
                rating: "4.8",
                review: "987",
                offer: "50% of | Use Coupon EATME"
            },
            {
                banner_img: "https://hybridtemplates.com/demos/food-point/images/banner_05.png",
                addon_title: "Orgenic Vegetable Set",
                addon_sub_title: "Roma Tomatoes, Red Onions, Kalamata Olives...",
                rating: "4.9",
                review: "999",
                offer: "35% of | Use Coupon EATME"
            }
        ];
        this.productService.getCategories()
            .then(function (res) {
            var result = res;
            // console.log(result);
            _this.data = result.data;
            setTimeout(function () {
                _this._isSkeleton = false;
            }, 3000);
        });
        this.data = null;
    };
    TabNearmePage = tslib_1.__decorate([
        Component({
            selector: 'app-tab-nearme',
            templateUrl: './tab-nearme.page.html',
            styleUrls: ['./tab-nearme.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService, AlertController, APILinguiniServiceService, Router])
    ], TabNearmePage);
    return TabNearmePage;
}());
export { TabNearmePage };
//# sourceMappingURL=tab-nearme.page.js.map