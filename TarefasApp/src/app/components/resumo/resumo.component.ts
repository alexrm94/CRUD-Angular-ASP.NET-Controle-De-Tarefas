import { Component } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent {
  tarefas: Tarefa[] = [];
  constructor(private tarefasService: TarefasService) {
    this.tarefasService.getTarefas()
      .subscribe((result: Tarefa[]) => (
        this.tarefas = result));
  }

}
