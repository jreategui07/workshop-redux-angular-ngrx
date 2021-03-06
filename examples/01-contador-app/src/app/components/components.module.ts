import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { IncrementarComponent } from './incrementar/incrementar.component';
import { DecrementarComponent } from './decrementar/decrementar.component';
import { MultiplicarComponent } from './multiplicar/multiplicar.component';
import { DividirComponent } from './dividir/dividir.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BannerComponent,
    IncrementarComponent,
    DecrementarComponent,
    MultiplicarComponent,
    DividirComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BannerComponent,
    IncrementarComponent,
    DecrementarComponent,
    MultiplicarComponent,
    DividirComponent
  ]
})
export class ComponentsModule { }
