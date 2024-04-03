import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  @Output() loginEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  login() {
    // Perform login validation here
    if (this.username === 'admin' && this.password === 'admin') {
      // Emit true when login is successful
      this.loginEvent.emit(true);
      this.route.navigateByUrl('/products');
    } else {
      // Emit false when login fails
      this.loginEvent.emit(false);
    }
  }

}
