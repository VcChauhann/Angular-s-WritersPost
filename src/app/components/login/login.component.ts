import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: 'Vivek',
    password: ''
  }
  constructor(private loginService: LoginService) { }

  hidePassword = true;
  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submitted");
    this.loginService.generateToken(this.credentials).subscribe(
      (res: any) => {
        console.log(res.token);
        this.loginService.loginUser(res.token);
        if (this.loginService.isLoggedIn()) {
          this.loginService.saveUserEmail(this.credentials.username);
        }
        window.location.href = "/dashboard";

      },
      err => {
        console.log(err);

      }
    );

  }

}
