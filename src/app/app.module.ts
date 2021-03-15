import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { GameStatsComponent } from './modules/game-stats/game-stats.component';
import { AoVivoComponent } from './modules/posts/ao-vivo/ao-vivo.component';
import { AgendadoComponent } from './modules/posts/agendado/agendado.component';
import { EncerradoComponent } from './modules/posts/encerrado/encerrado.component';
import { TodosJogosComponent } from './modules/posts/todos-jogos/todos-jogos.component';

@NgModule({
  declarations: [
    AppComponent,
    GameStatsComponent,
    TodosJogosComponent,
    AoVivoComponent,
    AgendadoComponent,
    EncerradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
