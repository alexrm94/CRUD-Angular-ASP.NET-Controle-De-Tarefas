import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarTarefasComponent } from './editar-tarefas.component';

const routes: Routes = [
  { path: '', component: EditarTarefasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarTarefasRoutingModule { }
