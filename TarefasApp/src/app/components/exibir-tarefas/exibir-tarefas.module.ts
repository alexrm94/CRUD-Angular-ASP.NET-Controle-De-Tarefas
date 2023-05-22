import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibirTarefasRoutingModule } from './exibir-tarefas-routing.module';
import { ExibirTarefasComponent } from './exibir-tarefas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExibirTarefasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExibirTarefasRoutingModule,

  ],
  exports: [
    ExibirTarefasRoutingModule
  ],

})
export class ExibirTarefasModule { }
