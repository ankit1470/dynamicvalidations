import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testing1Component } from './testing1/testing1.component';
import { Testing2Component } from './testing2/testing2.component';



@NgModule({
  declarations: [
    Testing1Component,
    Testing2Component
  ],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
