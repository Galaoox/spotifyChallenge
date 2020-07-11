import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BotonesComponent } from './components/botones/botones.component';
import { ListaCardsComponent } from './components/lista-cards/lista-cards.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [NavbarComponent, BotonesComponent, ListaCardsComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class GeneralModule { }
