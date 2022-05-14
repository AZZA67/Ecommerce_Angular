import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
userregisterformgroup:FormGroup;
  constructor(private fb: FormBuilder,private authservice:AuthenticationService) {
    this.userregisterformgroup = fb.group({
      // name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/(admin)|(user)/)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: [''],
      nationalID: [''],
      address: [''],
      mobileno: [''],
      password: [''],
    //   Username: string;
    //   Email: string;
    //   Address: string;
    // NationalID:string;
    // Mobileno: string;
    // Password: string;
  //   "username": "string",
  // "email": "user@example.com",
  // "nationalID": "string",
  // "address": "string",
  // "mobileno": "string",
  // "password": "string"
    

    });

  }

  ngOnInit(): void {



  }

  get name() {
    return this.userregisterformgroup.controls['Username'];
  }

  get email() {
    return this.userregisterformgroup.controls['Email'];
  }
  get mobileNo(): FormArray {
    return this.userregisterformgroup.controls['MobileNo'] as FormArray;
  }
  get password() {
    return this.userregisterformgroup.controls['Password'];
  }

  get nationalid() {
    return this.userregisterformgroup.controls['NationalID'];
  }

  get confirmPassword() {
    return this.userregisterformgroup.controls['NationalID'];
  }

  register(){
    this.authservice.Register(this.userregisterformgroup.value).subscribe(
      result=> {
        console.log("Successful registration");
      })
    }
  


}
