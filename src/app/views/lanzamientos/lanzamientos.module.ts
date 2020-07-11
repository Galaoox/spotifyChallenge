import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LanzamientosRoutingModule } from './lanzamientos-routing.module';
import { IndexLanzamientosComponent } from './index-lanzamientos/index-lanzamientos.component';
import { GeneralModule } from '../../general/general.module';
import { SpotifyService } from '../../services/spotify.service';


@NgModule({
    declarations: [IndexLanzamientosComponent],
    imports: [
        CommonModule,
        LanzamientosRoutingModule,
        GeneralModule,
        HttpClientModule
    ],
    providers: [SpotifyService]
})
export class LanzamientosModule { }
