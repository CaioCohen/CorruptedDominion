import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ InicioComponent } from './main/inicio/inicio.component';
import { MissoesComponent } from './main/missoes/missoes.component';
import { NpcsComponent } from './main/npcs/npcs.component';
import {MapasComponent} from './main/mapas/mapas.component';
import { SessoesComponent } from './main/sessoes/sessoes.component';
import { CombateComponent } from './main/combate/combate.component';
import { InventarioComponent } from './main/inventario/inventario.component';
import { IbexCatalogComponent } from './main/ibex-catalog/ibex-catalog.component';
import { PavilhaoComponent } from './main/pavilhao/pavilhao.component';
import { LoresComponent } from './main/lores/lores.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'missoes', component: MissoesComponent },
  { path: 'npcs', component: NpcsComponent },
  { path: 'mapas', component: MapasComponent },
  { path: 'sessoes', component: SessoesComponent },
  { path: 'combate', component: CombateComponent },
  { path: 'mapas/ibexcatalog', component: IbexCatalogComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'mapas/pavilhao', component: PavilhaoComponent },
  { path: 'lores', component: LoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
