import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { InicioComponent } from './inicio/inicio.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'sobre',
    component: SobreMimComponent
  },
  {
    path: 'projetos',
    component: MeusProjetosComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'curriculo',
    component: CurriculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
