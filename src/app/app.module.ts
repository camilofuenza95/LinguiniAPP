import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { CartDeliveryAddressFormPageModule } from './pages/cart-delivery-address-form/cart-delivery-address-form.module';
import { ListarBebidasComponent } from './pages/listar-bebidas/listar-bebidas.component';
import { OverlayItemComponent } from './components/overlay-item/overlay-item.component';
import { ListarCervezasComponent } from './pages/listar-cervezas/listar-cervezas.component';
import { ListarPizzasComponent } from './pages/listar-pizzas/listar-pizzas.component';
import { ListarVinosComponent } from './pages/listar-vinos/listar-vinos.component';
import { ListarPastasComponent } from './pages/listar-pastas/listar-pastas.component';


library.add(fab,fas,far);

@NgModule({
  declarations: [AppComponent,
    ListarBebidasComponent,
    ListarCervezasComponent,
    ListarPastasComponent,
    ListarPizzasComponent,
    ListarVinosComponent,
    OverlayItemComponent],
  entryComponents: [],
  imports: [BrowserModule,
    
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'ios'
    }), 
     AppRoutingModule,
     HttpClientModule,
     FontAwesomeModule,
     CartDeliveryAddressFormPageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
