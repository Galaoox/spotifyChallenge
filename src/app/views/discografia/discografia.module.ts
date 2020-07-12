import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscografiaRoutingModule } from './discografia-routing.module';
import { IndexDiscografiaComponent } from './index-discografia/index-discografia.component';
import { InformacionDiscografiaComponent } from './informacion-discografia/informacion-discografia.component';
import { AlbumsDiscografiaComponent } from './albums-discografia/albums-discografia.component';
import { CancionesPopularesDiscografiaComponent } from './canciones-populares-discografia/canciones-populares-discografia.component';
import { ArtistasRelacionadosDiscografiaComponent } from './artistas-relacionados-discografia/artistas-relacionados-discografia.component';


@NgModule({
  declarations: [IndexDiscografiaComponent, InformacionDiscografiaComponent, AlbumsDiscografiaComponent, CancionesPopularesDiscografiaComponent, ArtistasRelacionadosDiscografiaComponent],
  imports: [
    CommonModule,
    DiscografiaRoutingModule
  ]
})
export class DiscografiaModule { }
