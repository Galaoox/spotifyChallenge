import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexCancionesComponent } from './index-canciones/index-canciones.component';


const routes: Routes = [
    {
        path: '',
        component: IndexCancionesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CancionesRoutingModule { }
