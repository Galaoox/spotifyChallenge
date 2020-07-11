import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from './components/botones/botones.component';
import { ListaCardsComponent } from './components/lista-cards/lista-cards.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [BotonesComponent, ListaCardsComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [BotonesComponent, ListaCardsComponent, CardComponent]
})
export class GeneralModule { }
