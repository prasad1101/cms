import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DalService {

  constructor(private http : HttpClient) { }

getData(): Observable<any>{
console.log(environment.url)
return this.http.get(environment.url);
}

  getDataById(id): Observable<any> {
    console.log(environment.url)
    return this.http.get(environment.url+`/${id}`);
  }

  addCustomer(payload) : Observable<any>{
return this.http.post(environment.url,payload)
  }

  deleteCustomer(id): Observable<any>{
    return this.http.delete(environment.url + `/${id}`)
  }

  updateCustomer(id,payload): Observable<any> {
    return this.http.put(environment.url + `/${id}`,payload)
  }


}
