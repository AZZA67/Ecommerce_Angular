import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../ViewModels/order';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {
  private httpOptions;
  constructor(private http:HttpClient) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , Authorization': 'Token'
      })
    }
  }
 makeorder(order:Order) : Observable<Order>
  {
    return this.http.post<Order>(`http://localhost:40426/api/Order`,order);
  }


}
