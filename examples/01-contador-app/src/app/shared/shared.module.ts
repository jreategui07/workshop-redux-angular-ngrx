import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnResetComponent } from './btn-reset/btn-reset.component';

@NgModule({
  declarations: [
    BtnResetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnResetComponent
  ]
})
export class SharedModule { }
