import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/lanzamientos/lanzamientos.module').then(m => m.LanzamientosModule)
  },
  {
    path: 'artistas/',
    loadChildren: () => import('./views/artistas/artistas.module').then(m => m.ArtistasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
