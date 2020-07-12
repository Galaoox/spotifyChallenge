import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }



    buscar(termino, artista = true) {
        const ruta = artista ? 'artistas/' : 'canciones/';
        this.router.navigateByUrl(ruta + termino);
    }

}
