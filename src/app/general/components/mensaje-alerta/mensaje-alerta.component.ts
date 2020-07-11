import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-mensaje-alerta',
    templateUrl: './mensaje-alerta.component.html',
    styleUrls: ['./mensaje-alerta.component.scss']
})
export class MensajeAlertaComponent implements OnInit {
    @Input() texto = '';
    constructor() { }

    ngOnInit(): void {
    }

}
