import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-botones',
    templateUrl: './botones.component.html',
    styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit {
    @Input() btnSiguiente = false;
    @Input() btnAnterior = false;
    @Output() accion = new EventEmitter(false);
    constructor() { }

    ngOnInit(): void {
    }

    onClick(evento) {
        this.accion.emit(evento);
    }

}
