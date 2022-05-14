import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { BirthdateExtractorPipe } from './pipes/birthdate-extractor.pipe';
import { CreditCardFormatterPipe } from './pipes/credit-card-formatter.pipe';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsdetailsComponent } from './components/productsdetails/productsdetails.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrderComponent } from './components/order/order.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { Tokeninterceptor } from './ViewModels/tokeninterceptor';
//import { FormsModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    ProductCardDirective,
    BirthdateExtractorPipe,
    CreditCardFormatterPipe,
    ShoppingCartComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    ProductsdetailsComponent,
    MainlayoutComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    NewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    HttpClientModule,
   ReactiveFormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Tokeninterceptor,
      multi: true
    }]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
