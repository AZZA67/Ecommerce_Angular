import { Data } from "@angular/router";
import { ShoppingCartItems } from "./shopping-cart-items";
import { IUser } from "./user";

export interface Order {
   dateCreated:Date; 
   userID:string;
   totalprice:number;
   // user:IUser;
   // shopping_cart_items:ShoppingCartItems[];
}

