import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import {ImgCtrlPipe} from '../../shared/pipes/img-ctrl.pipe';
import { SingleApiComponent } from './single-api/single-api.component';
import {LazyLoadComponentModule} from '../../shared/directives/lazy-load-component/lazy-load-component.module';
import { FirstSectionComponent } from './first-section/first-section.component';
import { Products2Component } from './products-2/products-2.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    ProductsComponent,
    SingleApiComponent,
    FirstSectionComponent,
    Products2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    ImgCtrlPipe,
    LazyLoadComponentModule
  ]
})
export class HomeModule { }
