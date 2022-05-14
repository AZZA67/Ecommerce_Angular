import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServicesService } from 'src/app/Services/products-services.service';
import { Location } from '@angular/common';
import { Iproduct } from 'src/app/ViewModels/iproduct';
import { ProductsServicesApi } from 'src/app/Services/products-ser-api.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.scss']
})
export class ProductsdetailsComponent implements OnInit {

  private currPrdID:number=0;
  private prdIDsList: number[]=[];
  currPrd:Iproduct|undefined=undefined;
  constructor(private activatedRoute:ActivatedRoute
            , private router: Router
            , private prdService:ProductsServicesService
            , private location: Location,
            private prdapi:ProductsServicesApi) { }

            ngOnInit(): void {
              // this.prdapi.getAllProducts().subscribe(prdlist=>{
              //   this.prdIDsList=catlist});
              this.prdIDsList=this.prdService.getPrdIDsList();
              // this.currPrdID=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
              // this.currPrd=this.prdService.getProductByID(this.currPrdID);
              this.activatedRoute.paramMap.subscribe(paramMap=>{
                this.currPrdID=Number(paramMap.get("pid"));
            this.prdapi.getProductByID(this.currPrdID).subscribe(p=>this.currPrdID=p.id)
              });
              // alert(this.prdID);
            }

  goBack()
  {
    this.location.back();
  }

  prevProduct()
  {
    let currIndex=this.prdIDsList.findIndex((val)=>val==this.currPrdID);
    if(currIndex!=0)
    {
      this.currPrdID=this.prdIDsList[currIndex-1];
      this.router.navigate(['/Products', this.currPrdID]);
    }
  }
  nextProduct()
  {
    let currIndex=this.prdIDsList.findIndex((val)=>val==this.currPrdID);
    if(currIndex<this.prdIDsList.length-1)
    {
      this.currPrdID=this.prdIDsList[currIndex+1];
      this.router.navigate(['/Products', this.currPrdID]);
    }

  }

  isFirstItem():boolean
  {
    return this.currPrdID==this.prdIDsList[0];
  }

  islastItem():boolean
  {
    return this.currPrdID==this.prdIDsList[this.prdIDsList.length-1];
  }

}
