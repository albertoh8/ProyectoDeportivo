import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoComponent } from './partido/partido.component';
import { PartidosComponent } from './partidos.component';



@NgModule({
  declarations: [
    PartidoComponent,
    PartidosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PartidosModule { }
