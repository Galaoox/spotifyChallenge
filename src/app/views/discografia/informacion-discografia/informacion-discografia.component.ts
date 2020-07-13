import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
    selector: 'app-informacion-discografia',
    templateUrl: './informacion-discografia.component.html',
    styleUrls: ['./informacion-discografia.component.scss']
})
export class InformacionDiscografiaComponent implements OnInit {
    @Input() idArtista: string;
    artista: any = null;
    relacionados: any = null;
    constructor(private spotifyService: SpotifyService) { }

    ngOnInit(): void {
        this.obtenerDatosArtista();
        this.obtenerDatosRelacionados();
    }


    obtenerDatosArtista() {
        this.spotifyService.obtenerInfoArtista(this.idArtista).subscribe(
            (res: any) => {
                this.artista = res;
            },
            (error) => {
                console.log(error);
            }
        );
    }
    obtenerDatosRelacionados() {
        this.spotifyService.obtenerArtistasRelacionados(this.idArtista).subscribe(
            (res: any) => {
                this.relacionados = res;
            },
            (error) => {
                console.log(error);
            }
        );
    }

}
