import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeViewComponent } from './main-views/home-view/home-view.component';
import { LoginViewComponent } from './main-views/login-view/login-view.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterViewComponent } from './main-views/register-view/register-view.component';
import { AboutUsViewComponent } from './main-views/about-us-view/about-us-view.component';
import { ProductViewComponent } from './main-views/product-view/product-view.component';
import { DetailViewComponent } from './main-views/detail-view/detail-view.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { WishListComponent } from './main-views/wish-list/wish-list.component';
import { ContactViewComponent } from './main-views/contact-view/contact-view.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HomeViewComponent, 
    LoginViewComponent, 
    MainNavigationComponent, 
    RegisterViewComponent, 
    AboutUsViewComponent,
    ProductViewComponent, 
    DetailViewComponent, 
    ProductCardComponent, 
    ProductListComponent, 
    WishListComponent, ContactViewComponent, 
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
