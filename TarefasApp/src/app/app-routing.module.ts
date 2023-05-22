import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarTarefasComponent } from './components/editar-tarefas/editar-tarefas.component';

import { ExibirTarefasComponent } from './components/exibir-tarefas/exibir-tarefas.component';
import { CriarTarefaComponent } from './components/criar-tarefa/criar-tarefa.component';
import { ResumoComponent } from './components/resumo/resumo.component';

const routes: Routes = [
  { path: '', component: ExibirTarefasComponent},
  { path: 'editar/:id', component: EditarTarefasComponent },
  { path: 'criar', component: CriarTarefaComponent },
  { path: 'resumo', component: ResumoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
