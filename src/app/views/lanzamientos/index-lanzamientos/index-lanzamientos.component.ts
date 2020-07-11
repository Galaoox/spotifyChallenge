import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
    selector: 'app-index-lanzamientos',
    templateUrl: './index-lanzamientos.component.html',
    styleUrls: ['./index-lanzamientos.component.scss'],
    providers: [SpotifyService]
})
export class IndexLanzamientosComponent implements OnInit {
    lanzamientos = [];
    urlSiguiente = null;
    urlAnterior = null;


    constructor(private spotifyService: SpotifyService) { }

    ngOnInit(): void {
        this.obtenerDatos();
    }


    obtenerDatos() {
        this.spotifyService.obtenerLanzamientos().subscribe(
            (res: any) => {
                console.log(res);
                this.lanzamientos = res.items;
                this.urlAnterior = res.previous;
                this.urlSiguiente = res.next;
            },
            (error) => {
                console.log(error);
            }
        );
    }


    verDiscografia(artistaId) {
        console.log(artistaId);
    }



}
