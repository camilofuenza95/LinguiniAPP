import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { AlertController } from '@ionic/angular';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab-nearme',
  templateUrl: './tab-nearme.page.html',
  styleUrls: ['./tab-nearme.page.scss'],
})
export class TabNearmePage implements OnInit {

  public data:any;
  public bannerData:any;
  public _isSkeleton:boolean=true;
  constructor(public productService:ProductsService,public alertController: AlertController, private service: APILinguiniServiceService, private router: Router) {
    
   }

  ngOnInit() {

    this.bannerData = [
      {
        banner_img:"https://www.canal108.cl/fondopizza.jpeg",
        addon_title:"Pizza Tradicional al Linguini",
        addon_sub_title:"Aceitunas de oliva, Pimientos verdes, Cebolla morada...",
        rating:"4.8",
        review:"545",
        offer:"45% descuento días Lunes"
      },
      {
        banner_img:"https://www.canal108.cl/fondopasta.jpeg",
        addon_title:"Tortiglioni a la Bolognesa",
        addon_sub_title:"Albahaca fresa, salsa de tomates casera, pasta de la casa...",
        rating:"4.2",
        review:"559",
        offer:"20% descuento días Jueves"
      },
      {
        banner_img:"https://www.canal108.cl/fondovinos.jpeg",
        addon_title:"Vino de la Casa",
        addon_sub_title:"Uvas selectas, guardado en roble durante 5 años...",
        rating:"5.0",
        review:"854",
        offer:"2x1 días Viernes"
      }
    ];


   this.productService.getCategories()
    .then(res => {
        let result:any = res;
       // console.log(result);
        this.data = result.data;
        setTimeout(()=>{
          this._isSkeleton = false;
        },3000);
    });
    this.data=null;
  }

}
