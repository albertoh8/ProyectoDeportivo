import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comun/home/home.component';
import { PartidosComponent } from './partidos/partidos.component';
import { SucesosComponent } from './sucesos/sucesos.component';
import { EquiposComponent } from './equipos/equipos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'sucesos', component: SucesosComponent },
  { path: 'equipos', component: EquiposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
