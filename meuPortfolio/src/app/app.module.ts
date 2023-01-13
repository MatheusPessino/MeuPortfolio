import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreMimComponent,
    CurriculoComponent,
    MeusProjetosComponent,
    ContatoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
