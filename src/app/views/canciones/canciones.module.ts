import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenInterceptorService } from '../../general/interceptors/token-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CancionesRoutingModule } from './canciones-routing.module';
import { IndexCancionesComponent } from './index-canciones/index-canciones.component';
import { SpotifyService } from '../../services/spotify.service';
import { GeneralModule } from '../../general/general.module';


@NgModule({
    declarations: [IndexCancionesComponent],
    imports: [
        CommonModule,
        CancionesRoutingModule,
        GeneralModule,
        HttpClientModule
    ],
    providers: [SpotifyService, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }]
})
export class CancionesModule { }
