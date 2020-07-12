import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    buscador: FormGroup;


    constructor(private router: Router, private fb: FormBuilder) { }

    ngOnInit(): void {
        this.buscador = this.crearFormulario();
    }

    crearFormulario() {
        return this.fb.group({
            artista: [null],
            cancion: [null]
        });
    }


    buscar(artista = true) {
        const ruta = artista ? '/artistas' : '/canciones';
        const termino = artista ? this.buscador.value.artista : this.buscador.value.cancion;

        this.router.navigate([ruta], { queryParams: { termino: termino ? termino : '' } });
    }

    limpiarCampo(artista = true) {
        console.log("entro a esto");
        this.buscador.reset();
    }

}
