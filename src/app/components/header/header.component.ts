import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIn = false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logOut(){
    this.loginService.logOut();
    window.location.reload();
  }
}
