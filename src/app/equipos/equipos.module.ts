import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos.component';
import { ListEquiposComponent } from './list-equipos/list-equipos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListEquiposComponent },
  { path: 'equipo/:id', component: EquipoComponent }
]


@NgModule({
  declarations: [
    EquiposComponent,
    ListEquiposComponent,
    EquipoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

  ],
  exports: [RouterModule]
})
export class EquiposModule { }
