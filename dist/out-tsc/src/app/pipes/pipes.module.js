import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormattedPricePipe } from './formatted-price.pipe';
import { ProductFilterPipe } from './product-filter.pipe.';
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib_1.__decorate([
        NgModule({
            declarations: [FormattedPricePipe, ProductFilterPipe],
            imports: [],
            exports: [FormattedPricePipe, ProductFilterPipe]
        })
    ], PipesModule);
    return PipesModule;
}());
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map