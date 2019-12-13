import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FormattedPricePipe = /** @class */ (function () {
    function FormattedPricePipe() {
    }
    FormattedPricePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var newone = parseFloat(value).toFixed(2);
        return '$' + this.getFomatedPrice(newone);
    };
    FormattedPricePipe.prototype.getFomatedPrice = function (n) {
        //n = n.toFixed(2);
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    FormattedPricePipe = tslib_1.__decorate([
        Pipe({
            name: 'formattedPrice'
        })
    ], FormattedPricePipe);
    return FormattedPricePipe;
}());
export { FormattedPricePipe };
//# sourceMappingURL=formatted-price.pipe.js.map