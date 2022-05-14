import { ThisReceiver } from '@angular/compiler';
import { inject } from '@angular/core/testing';
import { firstValueFrom, Subject } from 'rxjs';
import { ICategory } from 'src/app/ViewModels/icategory';
import { Iproduct } from 'src/app/ViewModels/iproduct';

import { Component, OnInit } from '@angular/core';
import { ShoppingCartItems } from 'src/app/ViewModels/shopping-cart-items';
import { CategorySerApiService } from 'src/app/Services/category-ser-api.service';
import { CartitemsapiService } from 'src/app/Services/cartitemsapi.service';
import { OrderapiService } from 'src/app/Services/orderapi.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { IUser } from 'src/app/ViewModels/user';
import { Order } from 'src/app/ViewModels/order';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  // user:IUser;
  categorylist:ICategory[]=[];

  selectedCatID:number=0;
  receivedOrderTotalPrice:number=0;
cartitems:ShoppingCartItems[]=[];
  subscription: any;
  ls:string="";
  id:number=0;
  // order:Order;
  // cartitem:ShoppingCartItems;
  user:IUser={username:"mohamedhamed","nationalID":"string","address":"string","email":"user@example.com","password":"AQAAAAEAACcQAAAAEBp6IC3Pv7vX9rgJ7gqxmTPexO95dtU4HWFuchPXq1GqOjRM79nQH1B7m9f42yFvJw==","mobileno":"string"};
  constructor(private auth:AuthenticationService,  private catapi:CategorySerApiService,private cartitemapi:CartitemsapiService,private orderapi:OrderapiService) {
   
  }


   
  ngOnInit(): void {

    this.catapi.getAllcategories().subscribe(catlist=>{
      this.categorylist=catlist});

      this.cartitemapi.viewcartitems().subscribe(cartitem=>{
        this.cartitems=cartitem});
    //this.ls = JSON.parse(localStorage.getItem('cart'));
     
  }
  updateTotalPrice(totalPrice: number)
  {
    this.receivedOrderTotalPrice=totalPrice;
  }
 newitemadded(p:Iproduct)
 {

  var x = <ShoppingCartItems> { productId: p.id , product_name:p.name, product_price:p.price,quantity:p.quantity }; 
//let addedp=new ShoppingCartItems(product.ID,product.Name,product.Price,selectedquantity);

    this.cartitems.push(x);
    this.cartitemapi.addtocart(x).subscribe();
  
 }

 createorder()
 {

 
var order={"dateCreated":new Date,"userID":"0c3f8b18-8884-48d7-b05d-07f4177e22fa","totalprice":this.receivedOrderTotalPrice}
this.orderapi.makeorder(order).subscribe();
 }
get_required_quant(quantity:number) :number
  {
    return  quantity;
  }
// localStorage.setItem('cart', JSON.stringify(x));
 
 remove(ID:number)
 {
this.cartitems.forEach((value,index)=>{
  if(value.productId==ID)
   this.cartitems.splice(index,1);
   this.cartitemapi.deleteProduct(ID).subscribe();
})
 }
 //unsubscripe
 ngOnDestroy() {
  this.subscription.unsubscribe()
}
}
