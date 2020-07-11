import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from './components/botones/botones.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { MensajeAlertaComponent } from './components/mensaje-alerta/mensaje-alerta.component';



@NgModule({
    declarations: [BotonesComponent, LoadingComponent, MensajeAlertaComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [BotonesComponent, LoadingComponent, MensajeAlertaComponent],

})
export class GeneralModule { }
