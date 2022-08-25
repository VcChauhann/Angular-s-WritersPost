import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080";
  constructor(private http:HttpClient) { }

  saveUserEmail(email:string){
    localStorage.setItem("userEmail",email);
  }

  getUserEmail(){
    return localStorage.getItem("userEmail");
  }
  
  generateToken(credentials:any){
    return this.http.post(`${this.url}/token`, credentials);

  }

  getToken(){
    return localStorage.getItem("token");
  }
  loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token == undefined || token == '' || token==null){
      return false;
    }
    return true;
  }

  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    return true;
  }
}
