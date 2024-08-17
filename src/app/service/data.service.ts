import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../pojo/Student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) {}
    
  serverPath:string="http://localhost:8085/"
  
  getData(url:string):Observable<any>
  {
    return this.httpClient.get(this.serverPath+url);
  }


  insertData(url:string,obj:any):Observable<any>
  {
    return this.httpClient.post(this.serverPath + url,obj );
  }
}
