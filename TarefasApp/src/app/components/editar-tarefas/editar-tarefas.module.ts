import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarTarefasRoutingModule } from './editar-tarefas-routing.module';
import { EditarTarefasComponent } from './editar-tarefas.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarTarefasComponent
  ],
  imports: [
    CommonModule,
    EditarTarefasRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    EditarTarefasComponent
  ],

})
export class EditarTarefasModule { }
