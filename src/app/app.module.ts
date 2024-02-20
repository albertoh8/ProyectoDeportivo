import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunModule } from './comun/comun.module';
import { SucesosComponent } from './sucesos/sucesos.component';
import { EquiposModule } from './equipos/equipos.module';
import { PartidosModule } from './partidos/partidos.module';
import { SucesosModule } from './sucesos/sucesos.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SucesosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunModule,
    EquiposModule,
    PartidosModule,
    SucesosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
