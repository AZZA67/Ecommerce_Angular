import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModels/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategorySerApiService {

  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , Authorization': 'Token'
      })
    }
  }

getAllcategories() : Observable<ICategory[]>
{
  return this.httpClient.get<ICategory[]>(`http://localhost:40426/api/Category`)
      // .pipe(
      //   retry(3),
      //   catchError((err)=>{})
      // );
}
addnewcategory(category:ICategory) : Observable<ICategory>
{
  return this.httpClient.post<ICategory>(`http://localhost:40426/api/Category`,category)
      // .pipe(
      //   retry(3),
      //   catchError((err)=>{})
      // );
}
updatecategory(catID: number,category:ICategory) : Observable<ICategory>
{
  return this.httpClient.patch<ICategory>(`http://localhost:40426/api/Category/?id=${catID}`,category,this.httpOptions)
      // .pipe(
      //   retry(3),
      //   catchError((err)=>{})
      // );
}

removecategory(catID: number,category:ICategory) : Observable<ICategory>
{
  return this.httpClient.patch<ICategory>(`http://localhost:40426/api/Category/?id=${catID}`,category,this.httpOptions)
      // .pipe(
      //   retry(3),
      //   catchError((err)=>{})
      // );
}
}