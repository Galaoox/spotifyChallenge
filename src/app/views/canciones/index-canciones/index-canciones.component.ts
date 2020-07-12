import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../../services/spotify.service';
import { DomSanitizer } from '@angular/platform-browser';
import { IndexArtistasComponent } from '../../artistas/index-artistas/index-artistas.component';


@Component({
    selector: 'app-index-canciones',
    templateUrl: './index-canciones.component.html',
    styleUrls: ['./index-canciones.component.scss'],
    providers: [SpotifyService]
})
export class IndexCancionesComponent implements OnInit, OnDestroy {
    canciones = [];
    urlSiguiente = null;
    urlAnterior = null;
    cargando = false;
    termino = '';
    buscadorSuscripcion: Subscription;
    constructor(private router: ActivatedRoute, private spotifyService: SpotifyService, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.escucharBuscador();
    }

    ngOnDestroy(): void {
        this.buscadorSuscripcion.unsubscribe();
    }


    obtenerDatos(termino, endPoint = null) {
        this.cargando = true;
        this.canciones = [];
        if (termino && termino !== '' && termino !== ' ') {
            this.spotifyService.obtenerCanciones(termino, endPoint).subscribe(
                (res: any) => {
                    this.cargando = false;
                    this.canciones = res.items;
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
            this.termino = null;
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

    cambiarCanciones(evento: boolean) {
        const url = evento ? this.urlSiguiente : this.urlAnterior;
        this.obtenerDatos(this.termino, url);
    }

    validarUrl(id) {
        const url = 'https://open.spotify.com/embed/track/' + id;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }



}
