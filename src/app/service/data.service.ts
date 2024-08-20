import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../pojo/Student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) {}
    
  serverPath:string="http://localhost:8085/v1/admin/";
  
  getData(url:string, options: Options):Observable<any>
  {
    options = this.setHeaders(options);
    return this.httpClient.get(this.serverPath+url, options);
  }


  insertData(url:string,obj:any, options: Options):Observable<any>
  {
    options = this.setHeaders(options);
    return this.httpClient.post(this.serverPath + url,obj , options);
  }

  
  updateData(url:string,obj:any, options: Options):Observable<any>
  {
    options = this.setHeaders(options);
    return this.httpClient.put(this.serverPath + url,obj , options);
  }

  deleteData(url:string, options: Options):Observable<any>
  {
    options = this.setHeaders(options);
    return this.httpClient.delete(this.serverPath + url, options);
  }

  private setHeaders(options:Options) {
    if (!options)
      options = new Options();
    if (sessionStorage.getItem('access-token')) {
      options.headers['access-token'] = sessionStorage.getItem('access-token');
    }
    return options;
  }


}


export class Options {
  params: any;
  headers: any;
  observe: any;
  constructor() {
    this.params = {};
    this.headers = {};
    this.observe = 'body';
  }
}
