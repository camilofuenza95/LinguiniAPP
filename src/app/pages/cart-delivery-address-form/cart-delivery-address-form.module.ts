import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CartDeliveryAddressFormPage } from './cart-delivery-address-form.page';

const routes: Routes = [
  {
    path: '',
    component:CartDeliveryAddressFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartDeliveryAddressFormPage]
})
export class CartDeliveryAddressFormPageModule {}
