import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Login } from 'src/app/ViewModels/-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }


  public loginForm: FormGroup;
  public errorMessage: string = '';
   public showError: boolean;
  // private _returnUrl: string;
  constructor(private _authService: AuthenticationService, private _router: Router, private _route: ActivatedRoute) { 
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
    this.showError=false;
  }
  ngOnInit(): void {
   
    // this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }
  public validateControl = (controlName: string) => {
    return this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }
  
  login(){
    this._authService.loginUser(this.loginForm.value).subscribe(
      result=> {
       console.log('logged in successfully');
      })
    }



    

}
