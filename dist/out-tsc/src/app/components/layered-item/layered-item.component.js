import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var LayeredItemComponent = /** @class */ (function () {
    function LayeredItemComponent() {
    }
    LayeredItemComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(LayeredItemComponent.prototype, "isSkeleton", {
        set: function (val) {
            this._isSkeleton = (val !== undefined && val !== null) ? val : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayeredItemComponent.prototype, "object", {
        set: function (val) {
            this._obj = (val !== undefined && val !== null) ? val : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayeredItemComponent.prototype, "icon", {
        set: function (val) {
            this._icon = (val !== undefined && val !== null) ? val : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayeredItemComponent.prototype, "link", {
        set: function (val) {
            this._link = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LayeredItemComponent.prototype, "isSkeleton", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LayeredItemComponent.prototype, "object", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], LayeredItemComponent.prototype, "icon", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LayeredItemComponent.prototype, "link", null);
    LayeredItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-layered-item',
            templateUrl: './layered-item.component.html',
            styleUrls: ['./layered-item.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LayeredItemComponent);
    return LayeredItemComponent;
}());
export { LayeredItemComponent };
//# sourceMappingURL=layered-item.component.js.map