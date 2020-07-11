import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from './components/botones/botones.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [BotonesComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [BotonesComponent],

})
export class GeneralModule { }
