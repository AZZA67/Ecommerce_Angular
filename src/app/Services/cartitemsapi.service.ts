import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ShoppingCartItems } from '../ViewModels/shopping-cart-items';

@Injectable({
  providedIn: 'root'
})
export class CartitemsapiService  {
  private httpOptions;
  subject = new Subject<any>();
    constructor(private httpClient: HttpClient) {
      this.httpOptions={
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
          // , Authorization': 'Token'
        })
      }
    }

   viewcartitems() : Observable<ShoppingCartItems[]>
    {
      
      return this.httpClient.get<ShoppingCartItems[]>(`http://localhost:40426/api/ShoppingCartItem`)
          // .pipe(
          //   retry(3),
          //   catchError((err)=>{})
          // );
    }
    addtocart(cartdata:ShoppingCartItems) : Observable<ShoppingCartItems>
    {
   
      this.subject.next('changed');
      return this.httpClient.post<ShoppingCartItems>(`http://localhost:40426/api/ShoppingCartItem`,cartdata)
        
    }

//  deletecartitem(id:number) : Observable<ShoppingCartItems>
//     {
//       return this.httpClient.delete<ShoppingCartItems>(`http://localhost:40426/api/ShoppingCartItem`,cartdata)
        
//     }

    deleteProduct(itemID:number): Observable<ShoppingCartItems>
    {
      return this.httpClient.delete<ShoppingCartItems>(`http://localhost:40426/api/ShoppingCartItem/${itemID}`);
    }

   updateProduct(itemID:number,cartitem:ShoppingCartItems): Observable<ShoppingCartItems>
    {
      return this.httpClient.patch<ShoppingCartItems>(`http://localhost:40426/api/ShoppingCartItem/${itemID}`,this.httpOptions);
    }

  }

