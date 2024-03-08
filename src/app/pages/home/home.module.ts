import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import {ImgCtrlPipe} from '../../shared/pipes/img-ctrl.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    ImgCtrlPipe
  ]
})
export class HomeModule { }
