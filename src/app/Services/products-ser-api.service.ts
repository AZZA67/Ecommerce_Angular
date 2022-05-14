import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, from, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../ViewModels/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductsServicesApi {

  private httpOptions;

  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      // , Authorization': 'Token'
      
      }
      
      )
    }
  }
 url:string="http://localhost:40426/api/Product";
  getAllProducts(): Observable<Iproduct[]>
  {
    return this.httpClient.get<Iproduct[]>(this.url)
        // .pipe(
        //   retry(3),
        //   catchError((err)=>{})
        // );
  }

  getProductsByCatID(CateogryID: number): Observable<Iproduct[]>
  {
    return this.httpClient.get<Iproduct[]>(`http://localhost:40426/catid/${CateogryID}`);
  }

  getProductByID(prdID: number): Observable<Iproduct>
  {
    return this.httpClient.get<Iproduct>(`http://localhost:40426/api/Product/?prod${prdID}`);
  }

  addNewProduct(newPrd: Iproduct): Observable<Iproduct>
  {
    return this.httpClient.post<Iproduct>(this.url,newPrd,this.httpOptions);
  }

  updateProduct(prdID: number, newPrd: Iproduct): Observable<Iproduct>
  {
    return this.httpClient.patch<Iproduct>(this.url, JSON.stringify(newPrd),this.httpOptions);
  }
 
  deleteProduct(prdID:number): Observable<Iproduct>
  {
    return this.httpClient.delete<Iproduct>(`http://localhost:40426/api/Product/?id${prdID}`,this.httpOptions);
  }
}
