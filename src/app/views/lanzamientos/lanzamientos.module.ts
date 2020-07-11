import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanzamientosRoutingModule } from './lanzamientos-routing.module';
import { IndexLanzamientosComponent } from './index-lanzamientos/index-lanzamientos.component';
import { GeneralModule } from '../../general/general.module';


@NgModule({
  declarations: [IndexLanzamientosComponent],
  imports: [
    CommonModule,
    LanzamientosRoutingModule,
    GeneralModule
  ]
})
export class LanzamientosModule { }
