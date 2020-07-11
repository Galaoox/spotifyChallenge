import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexLanzamientosComponent } from './index-lanzamientos/index-lanzamientos.component';


const routes: Routes = [
  {
    path: '',
    component: IndexLanzamientosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanzamientosRoutingModule { }
