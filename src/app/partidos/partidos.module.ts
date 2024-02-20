import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoComponent } from './partido/partido.component';
import { PartidosComponent } from './partidos.component';
import { RouterModule, Routes } from '@angular/router';
import { EditPartidoComponent } from './edit-partido/edit-partido.component';
import { AddPartidoComponent } from './add-partido/add-partido.component';
import { PartidosListComponent } from './partidos-list/partidos-list.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: PartidosListComponent
  },
  {
    path: 'partido/:idLocal', component: PartidoComponent
  },
  {
    path: 'addPartido', component: AddPartidoComponent
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
    AddPartidoComponent,
    PartidosListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule

  ],
  exports: [RouterModule]
})

export class PartidosModule { }
