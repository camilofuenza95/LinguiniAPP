import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';
import { OrdenJoincomprobante } from 'src/app/Modelo/OrdenJoinComprobante';
import { Comprobantes } from 'src/app/Modelo/Comprobantes';
import { TipoPago } from 'src/app/Modelo/TipoPago';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.page.html',
  styleUrls: ['./cart-payment.page.scss'],
})
export class CartPaymentPage implements OnInit {
ordenJoinComprobantes: OrdenJoincomprobante[];



  public cartData:any;
  public paymentOptions:any;
  comprobantes:Comprobantes={idComprobante:0,fechaEmisionComprobante:'',totalComprobante:0,idTipoPago:0, idMesa:0};
  tiposPago: TipoPago[];
  total:number;
  
  constructor(
    public cartService:CartService,
    public router:Router,
    public commonService:CommonService,
    private service: APILinguiniServiceService,
    public alertController: AlertController) { 

      this.cartData = this.cartService.getCart();
        console.log(this.cartData);


    }

    
    
  ngOnInit() {
    
    
    const idMesa = localStorage.getItem('idMesa');

    this.service.getTotalAPAgar(parseInt(idMesa))
    .subscribe(data => {
    
      this.total= data;
    })

    this.service.mostrarComprobante(parseInt(idMesa))
    .subscribe(data => {
    
      this.ordenJoinComprobantes= data;
    })

    this.service.getTipoPago()
    .subscribe(data2 => {
    
      this.tiposPago= data2;
    })

  }
  
  setPaymentMethod(obj){
    this.cartData.paymentMethod = obj;
  }

  moveNext(){
    if(this.cartData.paymentMethod.code==''){
        this.commonService.showAlert("Select payment option to proceed.");
    }else{
        this.router.navigateByUrl('/cart-order-status');
    }
        
  }
  idTipoPago:number;
  idMesa:number;
  radioButtonSelected(tp:TipoPago){
    
    this.comprobantes.idTipoPago=tp.idTipoPago;
   
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Éxito!',
      subHeader: 'Cuenta Pagada',
      message: '¨Muchas gracias por su visita, devuelva el tablet al garzón',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  pagarCuenta(){
  
   
    const idMesa = localStorage.getItem('idMesa');
    this.comprobantes.idMesa = parseInt(idMesa);

    this.comprobantes.totalComprobante=this.total;
    
    this.service.agregarComprobante(this.comprobantes).subscribe(
      data=>{

        this.service.pagarOrden(parseInt(idMesa))

        .subscribe(data=>{
          this.router.navigate(['./auth-login']);
          this.presentAlert();
        })
      }
    );
   


  }
}
