import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsdetailsComponent } from './components/productsdetails/productsdetails.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [

  {path: '', component:MainlayoutComponent, children: [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    
    {path:'Products', component:ProductsComponent},
    {path:'Products/:pid', component:ProductsdetailsComponent},
    {path:'Order', component:ShoppingCartComponent},
    {path:'contact us', component:ContactUsComponent},
    {path:'about us', component:AboutUsComponent},
    {path:'Admin', component:NewproductComponent},

    {path:'register', component:RegisterComponent},
    
  ]
},
{path:'login', component:LoginComponent},
{path:'Home', component:HomeComponent}
,
  //Wild-card path
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
