import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

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
