import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-exibir-tarefas',
  templateUrl: './exibir-tarefas.component.html',
  styleUrls: ['./exibir-tarefas.component.css']
})
export class ExibirTarefasComponent {
  title = 'TarefasApp';
  tarefas: Tarefa[] = [];
  tarefa!: Tarefa;
  tarefa2!: Tarefa;
  tarefa3!: Tarefa;
  tarefaToEdit?: Tarefa;
  private url = 'tarefas';
  selectedTarefaId: number = 1;
  helloWorld: string | undefined;
  selectedTarefa!: Tarefa;

  constructor(private tarefasService: TarefasService, private router: Router ) {

    this.tarefasService.helloWorld()
      .subscribe((data) => {
      this.helloWorld = data;
    });

    this.tarefasService.getTarefas()
      .subscribe((result: Tarefa[]) => (
        this.tarefas = result));


  }

  deletar(tarefa: Tarefa) {
    if(confirm("Tem certeza que quer deletar?"))
    this.tarefasService.deleteTarefa(tarefa).subscribe(
      () => {
        this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
        alert("Tarefa excluída com sucesso!");
      },
      (error) => {
        console.log(error);
        alert("Ocorreu um erro ao excluir a tarefa");
      }
    );
  }



}
