import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

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
import { InventarioComponent } from './main/inventario/inventario.component';
import { PavilhaoComponent } from './main/pavilhao/pavilhao.component';
import { SegundoAndarComponent } from './main/pavilhao/segundo-andar/segundo-andar.component';
import { TerceiroAndarComponent } from './main/pavilhao/terceiro-andar/terceiro-andar.component';
import { LoresComponent } from './main/lores/lores.component';

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
    IbexCatalogComponent,
    InventarioComponent,
    PavilhaoComponent,
    SegundoAndarComponent,
    TerceiroAndarComponent,
    LoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
