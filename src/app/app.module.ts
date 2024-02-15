import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunModule } from './comun/comun.module';
import { SucesosComponent } from './sucesos/sucesos.component';

@NgModule({
  declarations: [
    AppComponent,
    SucesosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
