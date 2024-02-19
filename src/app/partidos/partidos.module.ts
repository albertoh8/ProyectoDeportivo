import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoComponent } from './partido/partido.component';
import { PartidosComponent } from './partidos.component';
import { RouterModule, Routes } from '@angular/router';
import { EditPartidoComponent } from './edit-partido/edit-partido.component';
import { AddPartidoComponent } from './add-partido/add-partido.component';

const routes: Routes = [
  {
    path: 'partido/:idLocal', component: PartidoComponent
  },
  {
    path: 'partido/add', component: AddPartidoComponent
  },
  {
    path: 'partido/edit/:idLocal', component: EditPartidoComponent
  },
]


@NgModule({
  declarations: [
    PartidoComponent,
    PartidosComponent,
    EditPartidoComponent,
    AddPartidoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

  ],
  exports: [RouterModule]
})

export class PartidosModule { }
