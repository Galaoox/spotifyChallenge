import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-lanzamientos',
  templateUrl: './index-lanzamientos.component.html',
  styleUrls: ['./index-lanzamientos.component.scss']
})
export class IndexLanzamientosComponent implements OnInit {
  datos = this.mockDatos();


  constructor() { }

  ngOnInit(): void {
  }




  mockDatos() {
    return [
      {
        nombre: 'pruebas 1'
      },
      {
        nombre: 'pruebas 2'
      },
      {
        nombre: 'pruebas 3'
      },
      {
        nombre: 'pruebas 4'
      },
      {
        nombre: 'pruebas 6'
      },
      {
        nombre: 'pruebas 6'
      }
    ];
  }

}
