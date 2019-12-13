import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';
var AuthLoginPage = /** @class */ (function () {
    function AuthLoginPage(alertController, service, router) {
        this.alertController = alertController;
        this.service = service;
        this.router = router;
        this.mesaEncontrada = { idMesa: 0, idEmpleado: 0, idEstado: 0, cantidadPersonas: 0 };
    }
    AuthLoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMeseros()
            .subscribe(function (data) {
            _this.empleados = data;
        });
        this.service.getMesas()
            .subscribe(function (data) {
            _this.mesas = data;
        });
    };
    AuthLoginPage.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Éxito!',
                            subHeader: 'Garzón y Mesa Registrados',
                            message: 'Puede entregar el tablet al cliente..',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthLoginPage.prototype.registrarMesa = function () {
        var _this = this;
        this.service.buscarMesa(this.selectedMesa)
            .subscribe(function (data) {
            _this.mesaEncontrada = data;
        });
        this.mesaEncontrada.idEstado = 3;
        this.mesaEncontrada.idEmpleado = this.selectedEmpleado;
        this.mesaEncontrada.idMesa = this.selectedMesa;
        this.mesaEncontrada.cantidadPersonas = this.mesaEncontrada.cantidadPersonas;
        localStorage.setItem('idMesa', this.mesaEncontrada.idMesa.toString());
        this.service.modificarMesa(this.mesaEncontrada)
            .subscribe(function (data) {
            _this.mesaEncontrada = data;
            _this.router.navigate(['./menu/dashboard']);
            _this.presentAlert();
        });
    };
    AuthLoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-auth-login',
            templateUrl: './auth-login.page.html',
            styleUrls: ['./auth-login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController, APILinguiniServiceService, Router])
    ], AuthLoginPage);
    return AuthLoginPage;
}());
export { AuthLoginPage };
//# sourceMappingURL=auth-login.page.js.map