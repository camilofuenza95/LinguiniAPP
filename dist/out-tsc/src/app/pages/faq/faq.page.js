import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FaqPage = /** @class */ (function () {
    function FaqPage() {
        this.data = [];
    }
    FaqPage.prototype.ngOnInit = function () {
        for (var i = 0; i < 5; i++) {
            this.data.push({
                id: i,
                title: 'Title ' + i,
                details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                icon: 'ios-arrow-forward-outline',
                showDetails: false
            });
        }
    };
    FaqPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'ios-arrow-forward-outline';
        }
        else {
            this.data.forEach(function (obj, index) {
                obj.showDetails = false;
                obj.icon = 'ios-arrow-forward-outline';
            });
            data.showDetails = true;
            data.icon = 'ios-arrow-down-outline';
        }
    };
    FaqPage = tslib_1.__decorate([
        Component({
            selector: 'app-faq',
            templateUrl: './faq.page.html',
            styleUrls: ['./faq.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FaqPage);
    return FaqPage;
}());
export { FaqPage };
//# sourceMappingURL=faq.page.js.map