import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyLoadComponentDirective} from './lazy-load-component.directive';



@NgModule({
  declarations: [
    LazyLoadComponentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazyLoadComponentDirective
  ]
})
export class LazyLoadComponentModule { }
