import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscografiaRoutingModule } from './discografia-routing.module';
import { IndexDiscografiaComponent } from './index-discografia/index-discografia.component';
import { InformacionDiscografiaComponent } from './informacion-discografia/informacion-discografia.component';
import { AlbumsDiscografiaComponent } from './albums-discografia/albums-discografia.component';
import { CancionesPopularesDiscografiaComponent } from './canciones-populares-discografia/canciones-populares-discografia.component';
import { ArtistasRelacionadosDiscografiaComponent } from './artistas-relacionados-discografia/artistas-relacionados-discografia.component';
import { GeneralModule } from '../../general/general.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { TokenInterceptorService } from '../../general/interceptors/token-interceptor.service';


@NgModule({
    declarations: [
        IndexDiscografiaComponent,
        InformacionDiscografiaComponent,
        AlbumsDiscografiaComponent,
        CancionesPopularesDiscografiaComponent,
        ArtistasRelacionadosDiscografiaComponent,
    ],
    imports: [
        CommonModule,
        DiscografiaRoutingModule,
        GeneralModule,
        HttpClientModule
    ],
    providers: [SpotifyService, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }]
})
export class DiscografiaModule { }
