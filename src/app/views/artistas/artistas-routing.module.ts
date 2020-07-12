import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexArtistasComponent } from './index-artistas/index-artistas.component';


const routes: Routes = [
    {
        path: '',
        component: IndexArtistasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtistasRoutingModule { }
