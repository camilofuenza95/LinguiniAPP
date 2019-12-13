import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
var SlidingBannersComponent = /** @class */ (function () {
    function SlidingBannersComponent() {
        this._data = [];
        this._isSkeleton = false;
    }
    SlidingBannersComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SlidingBannersComponent.prototype, "data", {
        set: function (val) {
            var data = (val !== undefined && val !== null) ? val : [];
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlidingBannersComponent.prototype, "isSkeleton", {
        set: function (val) {
            this._isSkeleton = (val !== undefined && val !== null) ? val : false;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        ViewChild('abcd'),
        tslib_1.__metadata("design:type", Object)
    ], SlidingBannersComponent.prototype, "_data", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], SlidingBannersComponent.prototype, "data", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], SlidingBannersComponent.prototype, "isSkeleton", null);
    SlidingBannersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sliding-banners',
            templateUrl: './sliding-banners.component.html',
            styleUrls: ['./sliding-banners.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SlidingBannersComponent);
    return SlidingBannersComponent;
}());
export { SlidingBannersComponent };
//# sourceMappingURL=sliding-banners.component.js.map