import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Login } from '../ViewModels/-login';
import { IUser } from '../ViewModels/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  httpOptions = {

    headers: new HttpHeaders({

    'Content-Type': 'application/json',
    responseType: 'text'
    }
    
    )

    };
    

  url:string="http://localhost:40426/api/Account";

  constructor(private client:HttpClient ) { 

  }

  Register(data:any):Observable<IUser>
  {
    console.log(data);
return this.client.post<IUser>(this.url+"/register",data,this.httpOptions)

  }

  public loginUser (data:any):Observable<Login>
  {
    // this.getToken()

    return this.client.post<Login>(this.url+"/login",data,this.httpOptions)
   
   
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
  getloggedinuser()
  {
    
    return this.client.get<any>(this.url+"/getuser");
  }

  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean indicating whether or not the token is expired
  //   return tokenNotExpired(token);
  // }

  }

