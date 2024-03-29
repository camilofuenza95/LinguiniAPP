import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../Modelo/Empleado';
import {Mesa} from '../Modelo/Mesa';
import {Carta} from '../Modelo/Carta';
import {Orden} from '../Modelo/Orden';
import { Categoria } from '../Modelo/Categoria';
import { OrdenJoincomprobante } from '../Modelo/OrdenJoinComprobante';
import { Comprobantes } from '../Modelo/Comprobantes';
import { TipoPago } from '../Modelo/TipoPago';

@Injectable({
  providedIn: 'root'
})
export class APILinguiniServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8034/api';

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});
mostrarComprobante(idMesa:number){
  return this.http.get<OrdenJoincomprobante[]>(this.Url + '/orden/mostrarComprobante/' + idMesa);
}

  cancelarOrden(idOrden:number){
    return this.http.delete<Orden>(this.Url + '/orden/' + idOrden);
  }

  getCategorias(){
    return this.http.get<Categoria[]>(this.Url + '/categoria/all');
  }
  getPedidos(idMesa:number){
    return this.http.get<Orden[]>(this.Url + '/orden/'+ idMesa);
  }
  
  getMeseros() {
    return this.http.get<Empleado[]>(this.Url + '/empleado/meserosAPP');
  }

  agregarComprobante(comprobantes:Comprobantes ){
    return this.http.post<Comprobantes>(this.Url + '/comprobante/' + comprobantes.totalComprobante + '/' + comprobantes.idTipoPago+ '/' + comprobantes.idMesa +'/agregarComprobante', comprobantes);
   
  }

  getTotalAPAgar(idMesa:number){
    return this.http.get<number>(this.Url + '/orden/' + idMesa + '/totalAPagar');
  }

  getTipoPago(){
    return this.http.get<TipoPago[]>(this.Url + '/tipoPago/listarTipoPago');
  }

  pagarOrden(idMesa: number) {
    return this.http.put<number>(this.Url + '/orden/pagarOrden/' + idMesa,idMesa);   
      }

    
 

  getMesas() {
    return this.http.get<Mesa[]>(this.Url + '/mesa/allDisponibles');
  }
  buscarMesa(idMesa: number){
    return this.http.get<Mesa>(this.Url + '/mesa/' + idMesa);
      }

  modificarMesa(mesa: Mesa) {
    return this.http.put<Mesa>(this.Url + '/mesa' + '/' + mesa.idEstado + '/' + mesa.idEmpleado + '/' + mesa.idMesa, mesa);   
      }

  getPastas(){
    return this.http.get<Carta[]>(this.Url + '/carta/pastas');
    }
    getBebidas(){
      return this.http.get<Carta[]>(this.Url + '/carta/bebidas');
    }
    getPizzas(){
      return this.http.get<Carta[]>(this.Url + '/carta/pizzas');
    }
    getVinos(){
      return this.http.get<Carta[]>(this.Url + '/carta/vinos');
    }
    getCervezas(){
      return this.http.get<Carta[]>(this.Url + '/carta/cervezas');
    }
    registrarOrden(orden: Orden){
      return this.http.post<Orden>(this.Url + '/orden/' + orden.idMesa + '/' + orden.idCarta + '/addorden', orden);
    }
    
}
