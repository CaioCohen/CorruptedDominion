import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './main/inicio/inicio.component';
import { MissoesComponent } from './main/missoes/missoes.component';
import { NpcsComponent } from './main/npcs/npcs.component';
import { MapasComponent } from './main/mapas/mapas.component';
import { SessoesComponent } from './main/sessoes/sessoes.component';
import { CombateComponent } from './main/combate/combate.component';
import { IbexCatalogComponent } from './main/ibex-catalog/ibex-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    MissoesComponent,
    NpcsComponent,
    MapasComponent,
    SessoesComponent,
    CombateComponent,
    IbexCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
