import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var APILinguiniServiceService = /** @class */ (function () {
    function APILinguiniServiceService(http) {
        this.http = http;
        this.Url = 'http://localhost:8034/api';
        this.httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    APILinguiniServiceService.prototype.mostrarComprobante = function (idMesa) {
        return this.http.get(this.Url + '/orden/mostrarComprobante/' + idMesa);
    };
    APILinguiniServiceService.prototype.cancelarOrden = function (idOrden) {
        return this.http.delete(this.Url + '/orden/' + idOrden);
    };
    APILinguiniServiceService.prototype.getCategorias = function () {
        return this.http.get(this.Url + '/categoria/all');
    };
    APILinguiniServiceService.prototype.getPedidos = function (idMesa) {
        return this.http.get(this.Url + '/orden/' + idMesa);
    };
    APILinguiniServiceService.prototype.getMeseros = function () {
        return this.http.get(this.Url + '/empleado/meserosAPP');
    };
    APILinguiniServiceService.prototype.agregarComprobante = function (comprobantes) {
        return this.http.post(this.Url + '/comprobante/' + comprobantes.totalComprobante + '/' + comprobantes.idTipoPago + '/' + comprobantes.idMesa + '/addorden', comprobantes);
    };
    APILinguiniServiceService.prototype.getTipoPago = function () {
        return this.http.get(this.Url + '/tipoPago/listarTipoPago');
    };
    APILinguiniServiceService.prototype.getMesas = function () {
        return this.http.get(this.Url + '/mesa/allDisponibles');
    };
    APILinguiniServiceService.prototype.buscarMesa = function (idMesa) {
        return this.http.get(this.Url + '/mesa/' + idMesa);
    };
    APILinguiniServiceService.prototype.modificarMesa = function (mesa) {
        return this.http.put(this.Url + '/mesa' + '/' + mesa.idEstado + '/' + mesa.idEmpleado + '/' + mesa.idMesa, mesa);
    };
    APILinguiniServiceService.prototype.getPastas = function () {
        return this.http.get(this.Url + '/carta/pastas');
    };
    APILinguiniServiceService.prototype.getBebidas = function () {
        return this.http.get(this.Url + '/carta/bebidas');
    };
    APILinguiniServiceService.prototype.getPizzas = function () {
        return this.http.get(this.Url + '/carta/pizzas');
    };
    APILinguiniServiceService.prototype.getVinos = function () {
        return this.http.get(this.Url + '/carta/vinos');
    };
    APILinguiniServiceService.prototype.getCervezas = function () {
        return this.http.get(this.Url + '/carta/cervezas');
    };
    APILinguiniServiceService.prototype.registrarOrden = function (orden) {
        return this.http.post(this.Url + '/orden/' + orden.idMesa + '/' + orden.idCarta + '/addorden', orden);
    };
    APILinguiniServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], APILinguiniServiceService);
    return APILinguiniServiceService;
}());
export { APILinguiniServiceService };
//# sourceMappingURL=apilinguini-service.service.js.map