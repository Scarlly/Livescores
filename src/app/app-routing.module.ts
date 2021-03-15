import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { GameStatsComponent } from './modules/game-stats/game-stats.component';
import { AgendadoComponent } from './modules/posts/agendado/agendado.component';
import { AoVivoComponent } from './modules/posts/ao-vivo/ao-vivo.component';
import { EncerradoComponent } from './modules/posts/encerrado/encerrado.component';

import { PostsComponent } from './modules/posts/posts.component';
import { TodosJogosComponent } from './modules/posts/todos-jogos/todos-jogos.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: PostsComponent,
    children: [
      { path: '', component: AoVivoComponent },
      { path: '', component: TodosJogosComponent },
      { path: '', component: AgendadoComponent },
      { path: '', component: EncerradoComponent }]
  },
  { path: 'stats', component: GameStatsComponent, }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

