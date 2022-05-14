import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { inject } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { CategorySerApiService } from 'src/app/Services/category-ser-api.service';
import { ProductsServicesApi } from 'src/app/Services/products-ser-api.service';
import { ProductsServicesService } from 'src/app/Services/products-services.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { Iproduct } from 'src/app/ViewModels/iproduct';
import { ShoppingCartItems } from 'src/app/ViewModels/shopping-cart-items';
import { Store } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges{
 s1=new Store("food",'/assets/download.jpg',["assiut","qena","sohag"]);
 @Input() receivedSelCatID:number=0;
 orderTotalPrice:number=0;
clientName:string="";
clientbirthdate:string=" ";
creditcard:string=" ";
iscardshown:boolean=true;
istableShown:boolean=true;
categorylist:ICategory[]=[];
purchasedate: Date = new Date();
prdListOfCat: Iproduct[]=[];
cartitems:ShoppingCartItems[]=[];
@Output() onTotalPriceChanged: EventEmitter<number>;
@Output() onaddtocartclicked: EventEmitter<Iproduct>;
@Output() required_quantity: EventEmitter<number>;
  constructor(private prdServiceapi:ProductsServicesApi,private catser:CategorySerApiService) { 
    this.onTotalPriceChanged= new EventEmitter<number>();
    this.onaddtocartclicked= new EventEmitter<Iproduct>();
  this.required_quantity=new EventEmitter<number>();
this.catser.getAllcategories().subscribe(catlist=>{
  this.categorylist=catlist});
   }
   ngOnInit(): void {
//api categories
    this.catser.getAllcategories().subscribe(catlist=>{
      this.categorylist=catlist});

//api products
      this.prdServiceapi.getProductsByCatID(this.receivedSelCatID).subscribe(prodl=>{
        this.prdListOfCat=prodl});
   //static array
      //this.prdListOfCat=this.prdService.getProductsByCateogryID(this.receivedSelCatID);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.prdServiceapi.getProductsByCatID(this.receivedSelCatID).subscribe(prodl=>{
      this.prdListOfCat=prodl});
      // console.log(this.prdListOfCat)
    //this.prdListOfCat=this.prdService.getProductsByCateogryID(this.receivedSelCatID);

    //  if (this.receivedSelCatID==0)
    // {
    //   this.prdListOfCat=this.Prodlist;
    // }
    // else
    //   this.prdListOfCat=this.Prodlist.filter(prd=> prd.CateogryID==this.receivedSelCatID);
    // this.catser.getAllcategories().subscribe(catlist=>{
    //   this.categorylist=catlist;
    // });
  }
//    onOptionsSelected(value:string){
//     var c=this.categorylist.find(x=>x.Name==value);
//     var catid=c?.id;
// var productslist=this.prdServiceapi.Prodlist.filter(x=>x.CateogryID==catid)
// productslist.forEach(product => {
//       console.log("the products is " + product.Name);
//  }
//  );
// return productslist;
// }

  toggleTable()
{
  this.istableShown= !this.istableShown;
}
DecreaseQuantity(p:Iproduct )
{
  p.quantity--;
//  quantity=quantity-1;
}
ShowDetails(p:Iproduct) 
{
  this.iscardshown= !this.iscardshown;
  return p.id;
}

// makeorder(shopping_cart_items:ShoppingCartItems[])
// {

// }
updatetotalprice(req_quan:number,price:number)
{
this.orderTotalPrice+=req_quan*price;
this.onTotalPriceChanged.emit(this.orderTotalPrice);
}

newproductadded(req_quantity:number,selectep:Iproduct)
{
  //selectep.quantity=req_quantity;
  this.onaddtocartclicked.emit(selectep);
  this.required_quantity.emit(req_quantity);
}
// public createImgPath = (serverPath: string) => { 
//   return `http://localhost:4200/${serverPath}`; 
// }
}