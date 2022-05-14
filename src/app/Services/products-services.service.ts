import { Injectable } from '@angular/core';
import { Iproduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {
  Prodlist: Iproduct[];
  constructor() {
    this.Prodlist=[
      {id:1,name:"cola",quantity:1,price:6,image:"assets/download (1).jpg",cateogryID:1},
      {id:2,name:"chipsy",quantity:12,price:6,image:"assets/images (2).jpg",cateogryID:2},
      {id:2,name:"karateh",quantity:12,price:5,image:"assets/download (2).jpg",cateogryID:2},
      {id:2,name:"mrenda",quantity:12,price:5,image:"assets/images (1).jpg",cateogryID:1}
     ]
   }
   getProductsByCateogryID(catID: number): Iproduct[] {
    if (catID == 0) {
      return this.Prodlist;
    }
    else
      return this.Prodlist.filter(prd => prd.cateogryID == catID);
  }

  getProductByID(prdID: number): Iproduct|undefined
  {
    return this.Prodlist.find(prd=>prd.id==prdID);
  }

  addNewProduct(prd:Iproduct):void
  {
    this.Prodlist.push(prd);
  }

  getPrdIDsList(): number[] 
  {
    return this.Prodlist.map(prd=>prd.id);
  }



}