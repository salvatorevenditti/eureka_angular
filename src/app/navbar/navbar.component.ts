import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  loginPage: boolean = false;
  @Input()
  registerPage: boolean = false;
  @Input()
  isLoggedIn: boolean = false;

  mouseOverTooltipChecked: boolean = false;
  showLoginButton: boolean = true;
  showSigninButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(this.loginPage) {
      this.showLoginButton = false;
    }

    if(this.registerPage) {
      this.showSigninButton = false;
    }

    if(this.isLoggedIn) {
      this.showLoginButton = false;
      this.showSigninButton = false;
    }
  }

}
