import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ InicioComponent } from './inicio/inicio.component';
import { MissoesComponent } from './missoes/missoes.component';
import { NpcsComponent } from './npcs/npcs.component';
import {MapasComponent} from './mapas/mapas.component';
import { SessoesComponent } from './sessoes/sessoes.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'missoes', component: MissoesComponent },
  { path: 'npcs', component: NpcsComponent },
  { path: 'mapas', component: MapasComponent },
  { path: 'sessoes', component: SessoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
