import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent {
  tarefa!: Tarefa;
  formTarefa!: FormGroup;
  id! : number


  constructor(
    private fb: FormBuilder,
    private tarefasService: TarefasService,
    private router: Router,
  ) {

  }
  onSubmit() {
    const tarefa = this.formTarefa.value;
    console.log(tarefa);
    this.tarefasService.createTarefa(tarefa).subscribe(
      (res) => {
        alert("Tarefa criada com sucesso!");
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
        alert("ocorreu um erro ao atualizar a tarefa");
      }
    )

  }


  ngOnInit() {
    this.formTarefa = this.fb.group({
      atividade: [''],
      status: [''],

  });
  }

}
