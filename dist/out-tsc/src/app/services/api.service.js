import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.url = 'assets/data';
    }
    ApiService.prototype.get = function (endpoint, params, reqOpts) {
        this.APIPATH = this.url + '/';
        if (!reqOpts) {
            reqOpts = {
                params: new HttpParams()
            };
        }
        endpoint = endpoint + '.json';
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new HttpParams();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        console.log(this.url + endpoint);
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    ApiService.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    ApiService.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    ApiService.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    ApiService.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    ApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map