import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopify-inventory-management';

  isLoggedIn: boolean = false;

  onLogin(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }
}
