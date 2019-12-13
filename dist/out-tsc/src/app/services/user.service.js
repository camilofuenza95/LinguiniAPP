import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
var UserService = /** @class */ (function () {
    function UserService(api) {
        this.api = api;
        this.data = [{ id: "1", houseNumber: "454", streetName: "Main Street", state: "California", city: "Menhaten", mobileNumber: "5854585478" }];
    }
    UserService.prototype.addAddress = function (obj) {
        obj.id = 1;
        if (this.data.length > 0) {
            obj.id = parseInt(this.data[this.data.length - 1].id) + 1;
        }
        this.data.push(obj);
    };
    UserService.prototype.updateAddress = function (obj) {
        this.data.forEach(function (addr, i) {
            if (obj.id === addr.id) {
                this.data[i] = obj;
            }
        }.bind(this));
    };
    UserService.prototype.getAddress = function () { return this.data; };
    UserService.prototype.removeAddress = function (obj) {
        console.log(obj);
        this.data.forEach(function (addr, i) {
            if (obj.id === addr.id) {
                this.data.splice(i, 1);
            }
        }.bind(this));
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map