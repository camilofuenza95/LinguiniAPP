import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menu-carrito',
  templateUrl: './menu-carrito.component.html',
  styleUrls: ['./menu-carrito.component.scss'],
})
export class MenuCarritoComponent implements OnInit {

  public isVisibaleCart = true;
  constructor(public cartService:CartService) { }

  ngOnInit() {
    window.addEventListener('keyboardDidShow', (event) => {
      // Describe your logic which will be run each time when keyboard is about to be shown.
      //console.log(event.keyboardHeight);
      this.isVisibaleCart = false;
  });

  window.addEventListener('keyboardDidHide', () => {
      // Describe your logic which will be run each time keyboard is closed.
      this.isVisibaleCart = true;
  });

}

  

}


