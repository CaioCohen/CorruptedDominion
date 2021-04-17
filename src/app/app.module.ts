import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './main/inicio/inicio.component';
import { MissoesComponent } from './main/missoes/missoes.component';
import { NpcsComponent } from './main/npcs/npcs.component';
import { MapasComponent } from './main/mapas/mapas.component';
import { SessoesComponent } from './main/sessoes/sessoes.component';
import { CombateComponent } from './main/combate/combate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    MissoesComponent,
    NpcsComponent,
    MapasComponent,
    SessoesComponent,
    CombateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
