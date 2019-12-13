import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ChooseLanguagePage = /** @class */ (function () {
    function ChooseLanguagePage() {
        this.selctedLanguage = 1;
    }
    ChooseLanguagePage.prototype.ngOnInit = function () {
        this.langData = [
            { id: 1, title: "English" },
            { id: 2, title: "French" },
            { id: 3, title: "German" },
            { id: 4, title: "Greek" },
            { id: 5, title: "Polish" },
            { id: 6, title: "Russian" },
            { id: 7, title: "Korean" },
            { id: 8, title: "Spanish" }
        ];
    };
    ChooseLanguagePage = tslib_1.__decorate([
        Component({
            selector: 'app-choose-language',
            templateUrl: './choose-language.page.html',
            styleUrls: ['./choose-language.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ChooseLanguagePage);
    return ChooseLanguagePage;
}());
export { ChooseLanguagePage };
//# sourceMappingURL=choose-language.page.js.map