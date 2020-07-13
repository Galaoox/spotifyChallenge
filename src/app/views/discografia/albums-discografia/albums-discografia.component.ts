import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
    selector: 'app-albums-discografia',
    templateUrl: './albums-discografia.component.html',
    styleUrls: ['./albums-discografia.component.scss']
})
export class AlbumsDiscografiaComponent implements OnInit {
    @Input() idArtista: string;
    albums = [];
    urlSiguiente = null;
    urlAnterior = null;
    cargando = false;


    constructor(private spotifyService: SpotifyService) { }

    ngOnInit(): void {
        this.obtenerDatos();
    }


    obtenerDatos(endPoint = null) {
        this.cargando = true;
        this.spotifyService.obtenerAlbumsArtista(endPoint, this.idArtista).subscribe(
            (res: any) => {
                this.cargando = false;
                this.albums = res.items;
                this.urlAnterior = res.previous;
                this.urlSiguiente = res.next;
            },
            (error) => {
                console.log(error);
                this.cargando = false;
            }
        );
    }

    cambiarAlbums(evento: boolean) {
        const url = evento ? this.urlSiguiente : this.urlAnterior;
        this.obtenerDatos(url);
    }

    obtenerAno(fecha: string) {
        return fecha.split('-')[0];
    }


}

