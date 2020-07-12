import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LanzamientosRoutingModule } from './lanzamientos-routing.module';
import { IndexLanzamientosComponent } from './index-lanzamientos/index-lanzamientos.component';
import { GeneralModule } from '../../general/general.module';
import { SpotifyService } from '../../services/spotify.service';
import { TokenInterceptorService } from '../../general/interceptors/token-interceptor.service';


@NgModule({
    declarations: [IndexLanzamientosComponent],
    imports: [
        CommonModule,
        LanzamientosRoutingModule,
        GeneralModule,
        HttpClientModule
    ],
    providers: [SpotifyService, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }]
})
export class LanzamientosModule { }
