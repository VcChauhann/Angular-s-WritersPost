import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/service/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService) { }

  value = "";
  hidePassword = true;
  
  data={
    email:'',
    userName:'',
    password:''
  }
  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  userRegisteration(){
    this.registerService.registerUser(this.data).subscribe(
      res=>{
        console.log("userRegister");
        console.log(res);
        
      },
      err=>{
        console.log("registerError");
        console.log(err);
        
      }
    )
  }
}
