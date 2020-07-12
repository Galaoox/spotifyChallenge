import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
    selector: 'app-index-artistas',
    templateUrl: './index-artistas.component.html',
    styleUrls: ['./index-artistas.component.scss']
})
export class IndexArtistasComponent implements OnInit, OnDestroy {
    artistas = [];
    urlSiguiente = null;
    urlAnterior = null;
    cargando = false;
    termino = '';
    buscadorSuscripcion: Subscription;

    constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) { }

    ngOnInit(): void {
        this.escucharBuscador();
    }

    ngOnDestroy(): void {

        this.buscadorSuscripcion.unsubscribe();
    }

    obtenerDatos(termino, endPoint = null) {

        this.cargando = true;
        this.artistas = [];
        if (termino && termino !== '') {
            this.spotifyService.obtenerArtistas(termino, endPoint).subscribe(
                (res: any) => {

                    this.cargando = false;

                    this.artistas = res.items;
                    this.urlAnterior = res.previous;
                    this.urlSiguiente = res.next;

                },
                (error) => {
                    console.log(error);
                    this.cargando = false;
                }
            );
        } else {
            this.cargando = false;
        }
    }

    escucharBuscador() {
        this.buscadorSuscripcion = this.router.queryParams.subscribe((params) => {
            this.termino = params.termino;
            this.urlAnterior = null;
            this.urlSiguiente = null;
            this.obtenerDatos(this.termino);

        });
    }

    cambiarArtistas(evento: boolean) {
        const url = evento ? this.urlSiguiente : this.urlAnterior;
        this.obtenerDatos(this.termino, url);
    }
    validarImagen(artista) {
        return artista.images.length > 0 ? artista.images[0].url : 'assets/default-img.png';
    }

}
