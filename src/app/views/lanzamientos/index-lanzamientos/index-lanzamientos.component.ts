import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { Router } from '@angular/router';

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
    cargando = false;


    constructor(private spotifyService: SpotifyService, private router: Router) { }

    ngOnInit(): void {
        this.obtenerDatos();
    }


    obtenerDatos(endPoint = null) {
        this.cargando = true;
        this.spotifyService.obtenerLanzamientos(endPoint).subscribe(
            (res: any) => {

                this.cargando = false;

                this.lanzamientos = res.items;
                this.urlAnterior = res.previous;
                this.urlSiguiente = res.next;

            },
            (error) => {
                console.log(error);
                this.cargando = false;
            }
        );
    }


    verDiscografia(artistaId) {
        this.router.navigateByUrl('discografia/' + artistaId);
    }


    cambiarLanzamientos(evento: boolean) {
        const url = evento ? this.urlSiguiente : this.urlAnterior;
        this.obtenerDatos(url);
    }


}
