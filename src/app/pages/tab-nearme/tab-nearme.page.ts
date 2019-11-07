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
        banner_img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-12-07-at-3-39-25-pm-1544215180.png",
        addon_title:"Orgenic Vegetable Set",
        addon_sub_title:"Roma Tomatoes, Red Onions, Kalamata Olives...",
        rating:"4.8",
        review:"545",
        offer:"45% of | Use Coupon EATME"
      },
      {
        banner_img:"https://hybridtemplates.com/demos/food-point/images/banner_01.png",
        addon_title:"Orgenic Vegetable Set",
        addon_sub_title:"Roma Tomatoes, Red Onions, Kalamata Olives...",
        rating:"3.2",
        review:"559",
        offer:"40% of | Use Coupon EATME"
      },
      {
        banner_img:"https://hybridtemplates.com/demos/food-point/images/banner_03.png",
        addon_title:"Orgenic Vegetable Set",
        addon_sub_title:"Roma Tomatoes, Red Onions, Kalamata Olives...",
        rating:"5.0",
        review:"854",
        offer:"30% of | Use Coupon EATME"
      },
      {
        banner_img:"https://hybridtemplates.com/demos/food-point/images/banner_04.png",
        addon_title:"Orgenic Vegetable Set",
        addon_sub_title:"Roma Tomatoes, Red Onions, Kalamata Olives...",
        rating:"4.8",
        review:"987",
        offer:"50% of | Use Coupon EATME"
      },
      {
        banner_img:"https://hybridtemplates.com/demos/food-point/images/banner_05.png",
        addon_title:"Orgenic Vegetable Set",
        addon_sub_title:"Roma Tomatoes, Red Onions, Kalamata Olives...",
        rating:"4.9",
        review:"999",
        offer:"35% of | Use Coupon EATME"
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
