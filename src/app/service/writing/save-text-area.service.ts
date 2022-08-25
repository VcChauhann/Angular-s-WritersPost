import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dbContent } from '../../DBContent';

@Injectable({
  providedIn: 'root'
})
export class SaveTextAreaService {

  url="http://localhost:8080";

  constructor(private http:HttpClient) { }

  saveData(data:any){
     return this.http.post(`${this.url}/saveToDB`,data);
  }

}
