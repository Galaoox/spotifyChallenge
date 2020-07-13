import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
    selector: 'app-canciones-populares-discografia',
    templateUrl: './canciones-populares-discografia.component.html',
    styleUrls: ['./canciones-populares-discografia.component.scss']
})
export class CancionesPopularesDiscografiaComponent implements OnInit {
    @Input() idArtista: string;
    canciones: any[] = [];
    constructor(private spotifyService: SpotifyService) { }

    ngOnInit(): void {
        this.obtenerDatos();
    }


    obtenerDatos() {
        this.spotifyService.obtenerTopCanciones(this.idArtista).subscribe(
            (res: any) => {
                this.canciones = res;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    convertirMsAMinutosSegundos(ms) {
        const minutos = Math.floor(ms / 60000);
        const segundos = Math.floor((ms - (minutos * 60000)) / 1000);
        return `${this.concatenarCero(minutos)}:${this.concatenarCero(segundos)}`;
    }

    concatenarCero(texto) {
        texto = String(texto);
        return texto.length < 2 ? '0' + texto : texto;
    }

}
