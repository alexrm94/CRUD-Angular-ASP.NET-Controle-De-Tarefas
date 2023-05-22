import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarTarefasModule } from './components/editar-tarefas/editar-tarefas.module';
import { ExibirTarefasModule } from './components/exibir-tarefas/exibir-tarefas.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarTarefaModule } from './components/criar-tarefa/criar-tarefa.module';
import { ResumoModule } from './components/resumo/resumo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EditarTarefasModule,
    ExibirTarefasModule,
    CriarTarefaModule,
    ResumoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
