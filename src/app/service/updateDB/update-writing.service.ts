import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dbContent } from 'src/app/DBContent';

@Injectable({
  providedIn: 'root'
})
export class UpdateWritingService {

  
  url="http://localhost:8080";

  constructor(private http:HttpClient) { }

  getData(userName:any):Observable<dbContent[]>{
    return this.http.post<dbContent[]>(`${this.url}/getDbData`,userName);
  }

  deleteData(id:number){
    const idMap={
      "id":id
    }
    return this.http.post(`${this.url}/deleteSelectedData`,idMap);
  }

  
  getDataOfId(id:number):Observable<dbContent>{
    const idMap={
      "id":id
    }
    return this.http.post<dbContent>(`${this.url}/getDataOfId`,idMap);
  }

  saveEditedData(data:dbContent){
    return this.http.post(`${this.url}/saveEditing`,data);
  }
}
