import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MissoesComponent } from './missoes/missoes.component';
import { NpcsComponent } from './npcs/npcs.component';
import { MapasComponent } from './mapas/mapas.component';
import { SessoesComponent } from './sessoes/sessoes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    MissoesComponent,
    NpcsComponent,
    MapasComponent,
    SessoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
