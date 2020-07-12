import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexDiscografiaComponent } from './index-discografia/index-discografia.component';


const routes: Routes = [
    {
        path: '',
        component: IndexDiscografiaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DiscografiaRoutingModule { }
