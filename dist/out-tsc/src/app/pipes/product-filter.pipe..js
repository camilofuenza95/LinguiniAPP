import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var ProductFilterPipe = /** @class */ (function () {
    function ProductFilterPipe() {
    }
    ProductFilterPipe.prototype.transform = function (items, cat_id) {
        if (!items || !cat_id) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        //console.log('fitler ',cat_id);
        return items.filter(function (item) { return item.rec_cat_ids.indexOf(cat_id) !== -1; });
    };
    ProductFilterPipe = tslib_1.__decorate([
        Pipe({
            name: 'productFilter'
        })
    ], ProductFilterPipe);
    return ProductFilterPipe;
}());
export { ProductFilterPipe };
//# sourceMappingURL=product-filter.pipe..js.map