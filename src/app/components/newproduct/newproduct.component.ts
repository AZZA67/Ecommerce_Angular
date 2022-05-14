import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsServicesApi } from 'src/app/Services/products-ser-api.service';
import { Iproduct } from 'src/app/ViewModels/iproduct';
import { Router } from '@angular/router';
import { CategorySerApiService } from 'src/app/Services/category-ser-api.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss']
})

export class NewproductComponent implements OnInit {
  progress: number=0;
  message: string="";
    newproduct:Iproduct={} as Iproduct;
    categories:ICategory[]=[];
    addproductform:FormGroup;
    @Output() public onUploadFinished = new EventEmitter();
    fileToUpload :File=new File([],"");
formData:FormData=new FormData();
  constructor(private http:HttpClient , private fb: FormBuilder,private prdapi:ProductsServicesApi, private catapi:CategorySerApiService,public router: Router) {
   // this.newproduct={"id" :6 ,"Name" : "mandolin","Quantity":13,"Price":3,"Img": "assets/download (4).jpg","CateogryID" :2};
   this.addproductform = fb.group({
    // name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/(admin)|(user)/)]],
    name: ['', [Validators.required, Validators.minLength(3)]],
   quantity: [''],
   price: [''],
    image: [''],
    categoryID:['']
   })
  }
  

  ngOnInit(): void {
    // this.prdapi.addNewProduct(this.newproduct).subscribe(p=>
    //   this.newproduct=p);
    this.catapi.getAllcategories().subscribe(catlist=>{
      this.categories=catlist});

  }

  uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.http.post('http://localhost:40426/image', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded );
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
    
  // get image() {
  //   return this.addproductform.controls['image'];
  // }

    // submitForm() {
    //   var formData: any = new FormData();
    //   formData.append("name", this.form.get('name').value);
    //   formData.append("avatar", this.form.get('avatar').value);
    //   this.http.post('http://localhost:4000/api/create-user', formData).subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   )
    // }
  
submit()
{
  
  this.prdapi.addNewProduct(this.addproductform.value).subscribe(
    result=> {
      console.log("Successful added");
    }) }
}



