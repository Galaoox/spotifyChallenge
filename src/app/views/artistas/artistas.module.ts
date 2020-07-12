import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { ArtistasRoutingModule } from './artistas-routing.module';
import { IndexArtistasComponent } from './index-artistas/index-artistas.component';
import { GeneralModule } from '../../general/general.module';
import { SpotifyService } from '../../services/spotify.service';
import { TokenInterceptorService } from '../../general/interceptors/token-interceptor.service';


@NgModule({
    declarations: [IndexArtistasComponent],
    imports: [
        CommonModule,
        ArtistasRoutingModule,
        GeneralModule
    ],
    providers: [SpotifyService, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }]
})
export class ArtistasModule { }
