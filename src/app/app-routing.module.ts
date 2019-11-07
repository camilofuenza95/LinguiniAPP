import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarBebidasComponent } from './pages/listar-bebidas/listar-bebidas.component';
import { OverlayItemComponent } from './components/overlay-item/overlay-item.component';
import { ListarCervezasComponent } from './pages/listar-cervezas/listar-cervezas.component';
import { ListarPastasComponent } from './pages/listar-pastas/listar-pastas.component';
import { ListarPizzasComponent } from './pages/listar-pizzas/listar-pizzas.component';
import { ListarVinosComponent } from './pages/listar-vinos/listar-vinos.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth-login', pathMatch: 'full' },
  { path: 'auth-login', loadChildren: './pages/auth-login/auth-login.module#AuthLoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'auth-signup', loadChildren: './pages/auth-signup/auth-signup.module#AuthSignupPageModule' },
  { path: 'auth-register', loadChildren: './pages/auth-register/auth-register.module#AuthRegisterPageModule' },
  { path: 'auth-forgot-password', loadChildren: './pages/auth-forgot-password/auth-forgot-password.module#AuthForgotPasswordPageModule' },
  { path: 'cart-list', loadChildren: './pages/cart-list/cart-list.module#CartListPageModule' },
  { path: 'cart-delivery-address', loadChildren: './pages/cart-delivery-address/cart-delivery-address.module#CartDeliveryAddressPageModule' },
  { path: 'cart-delivery-options', loadChildren: './pages/cart-delivery-options/cart-delivery-options.module#CartDeliveryOptionsPageModule' },
  { path: 'cart-payment', loadChildren: './pages/cart-payment/cart-payment.module#CartPaymentPageModule' },
  { path: 'cart-order-status', loadChildren: './pages/cart-order-status/cart-order-status.module#CartOrderStatusPageModule' },
  { path: 'user-change-password', loadChildren: './pages/user-change-password/user-change-password.module#UserChangePasswordPageModule' },
  { path: 'user-orders', loadChildren: './pages/user-orders/user-orders.module#UserOrdersPageModule' },
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'feedback', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule' },
  { path: 'product-list', loadChildren: './pages/product-list/product-list.module#ProductListPageModule' },
  { path: 'user-wish-list', loadChildren: './pages/user-wish-list/user-wish-list.module#UserWishListPageModule' },
  { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'term-and-condition', loadChildren: './pages/term-and-condition/term-and-condition.module#TermAndConditionPageModule' },
  { path: 'privacy-polices', loadChildren: './pages/privacy-polices/privacy-polices.module#PrivacyPolicesPageModule' },
  {path: 'listarBebidas', component: ListarBebidasComponent},
  {path: 'listarCervezas', component: ListarCervezasComponent},
  {path: 'listarPastas', component: ListarPastasComponent},
  {path: 'listarPizzas', component: ListarPizzasComponent},
  {path: 'listarVinos', component: ListarVinosComponent},
  {path: 'overlayItem', component: OverlayItemComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
