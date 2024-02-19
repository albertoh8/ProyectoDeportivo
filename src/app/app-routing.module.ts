import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comun/home/home.component';
import { PartidosComponent } from './partidos/partidos.component';
import { SucesosComponent } from './sucesos/sucesos.component';
import { EquiposComponent } from './equipos/equipos.component';
import { PartidoComponent } from './partidos/partido/partido.component';
import { AddPartidoComponent } from './partidos/add-partido/add-partido.component';
import { EditPartidoComponent } from './partidos/edit-partido/edit-partido.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'partidos', component: PartidosComponent,
    loadChildren: () => import('./partidos/partidos.module').then(m => m.PartidosModule)
  },
  { path: 'sucesos', component: SucesosComponent },
  { path: 'equipos', component: EquiposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
