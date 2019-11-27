import { Component, OnInit, Input } from '@angular/core';
import { Carta } from 'src/app/Modelo/Carta';
import { Orden } from 'src/app/Modelo/Orden';
import { Router, ActivatedRoute } from '@angular/router';
import {formatDate, DatePipe} from '@angular/common';
import { AlertController, Events } from '@ionic/angular';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-listar-bebidas',
  templateUrl: './listar-bebidas.component.html',
  styleUrls: ['./listar-bebidas.component.scss'],
})
export class ListarBebidasComponent implements OnInit {

  cartas: Carta[];
  orden: Orden = {idOrden:0, idCarta:0,idEstado:0,idMesa:0,fechaEmisionOrden:'',imagenCarta: '',nombreCarta:'',nombreEstado:''};
  carta: Carta = new Carta();

  public data: any = [];
    public categoryData: any;
    public subCategroyData: any;
    public selectedCatId: number;
    public _isSkeleton : boolean = true;
    public _hasRecords : boolean = true;
   
    
    _obj : any;
    _image:string;
    _title:string;
    _price:string;
  
    _addon_title:string;
    _addon_sub_title:string;
    _addon_rating:string;
    _addon_reviews:string;
    _addon_discount:string;

    myDate = new Date();

  constructor(public alertController: AlertController,private service: APILinguiniServiceService, private router: Router,
    public productService:ProductsService,
    public cartService:CartService,
    public activedRoute:ActivatedRoute, 
    private ev:Events) { }

    
    
    ngOnInit() {
     
      this.service.getBebidas()
      .subscribe(data => {
      
        this.cartas = data;
      })

      

       //----------Category------------------
       let cat_id = this.activedRoute.snapshot.paramMap.get('cat_id');
       //console.log('cat_id ',cat_id);

       this.productService.getCategories()
         .then(res => {
             let result:any = res;
             //console.log('result',result);
       
           this.categoryData = result.data.find(item => item.id === cat_id);
           this.subCategroyData =  this.categoryData.sub_cat;
           if(this.subCategroyData.length){
               this.selectedCatId = this.subCategroyData[0].id;
               console.log('sub cat id ',this.selectedCatId);

            // this.showProductByCatId(this.subCategroyData[0].id);
           }
           //console.log('this.categoryData ',this.categoryData);
       });
   
   //--------Product--------------------
       this.productService.getProducts()
       .then(res => {
           let result:any = res;
           //this.data = result.data;
           //----------------------------------
           this.data = result.data.filter(item => {
                     item.display = {};
                     if(item.rec_attr.length){
                       item.display.attr_title   = item.rec_attr[0].rec_title;
                       item.display.price        = item.rec_attr[0].rec_attr_price;
                       item.display.sale_price   = item.rec_attr[0].rec_attr_sale_price;
                     }else{
                       item.display.price       = item.rec_price;
                       item.display.sale_price  = item.rec_sale_price;
                     }
                     item.display.indx     = 0;
                     item.display.qty      = 0;

             return item;
           });
           //----------------------------------
           setTimeout(()=>{
               this._isSkeleton = false;
               if(!this.data.length) this._hasRecords = false; else  this._hasRecords = true;
           },2000);
     });
   //--------------------------------
 }

 showProductByCatId(cat_id:number){
    this.selectedCatId = cat_id;

    let tmpData:any = this.data.filter(item => {
       return item.rec_cat_ids.indexOf(cat_id) > -1
    });

    if(!tmpData.length)  this._hasRecords = false; else  this._hasRecords = true;
    
    console.log('tmpData ',tmpData);
 }

 @Input() set isSkeleton(val: boolean) {
  this._isSkeleton = (val !== undefined && val !== null) ? val : false;
}

// @Input() set object(val: any) {


  //this._obj = (val !== undefined && val !== null) ? val : {};
//}

 addToCart(pObj,index){
  this.cartService.addToCart(pObj,index);
}

LessOneItem(pObj,index){
  this.cartService.removeOneProduct(pObj,index);
}

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Éxito!',
    subHeader: 'Su pedido se está preparando',
    message: '¨Puede revisar el estado de sus pedidos dando click al icono de la izquina superior..',
    buttons: ['OK']
  });

  await alert.present();
}

registrarOrden(carta:Carta) {

  this.orden.idCarta = carta.idCarta;

  const idMesa = localStorage.getItem('idMesa');
 /* this.orden.idMesa = parseInt(idMesa);*/
  this.orden.idMesa = 11;
  this.orden.idEstado = 5;
  
  this.orden.fechaEmisionOrden = formatDate(this.myDate, 'dd/MM/yyyy', 'en');
  this.service.registrarOrden(this.orden)
  .subscribe(data=>{
    this.presentAlert();
  });
    }


    
    
  
}
  

     

