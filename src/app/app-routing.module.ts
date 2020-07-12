import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./views/lanzamientos/lanzamientos.module').then(m => m.LanzamientosModule)
    },
    {
        path: 'artistas/:termino',
        loadChildren: () => import('./views/artistas/artistas.module').then(m => m.ArtistasModule)
    },
    {
        path: 'canciones/:termino',
        loadChildren: () => import('./views/canciones/canciones.module').then(m => m.CancionesModule)
    },
    {
        path: 'discografia/',
        loadChildren: () => import('./views/discografia/discografia.module').then(m => m.DiscografiaModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
