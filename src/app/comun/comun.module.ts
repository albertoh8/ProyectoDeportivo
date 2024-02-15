import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    CabeceraComponent,
    PieComponent
  ],
  exports: [
    HomeComponent,
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComunModule { }
