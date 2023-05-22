import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarTarefaRoutingModule } from './criar-tarefa-routing.module';
import { CriarTarefaComponent } from './criar-tarefa.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CriarTarefaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CriarTarefaRoutingModule
  ]
})
export class CriarTarefaModule { }
