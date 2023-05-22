import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {
  tarefa!: Tarefa;
  formTarefa!: FormGroup;
  id! : number


  constructor(
    private tarefasService: TarefasService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }
  onSubmit() {
    //const idParam: number = +this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.formTarefa.value);

    this.tarefasService.updateTarefa(this.id,this.formTarefa.value) .subscribe(
      (res) => {
        alert("Tarefa editada com sucesso!");
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
        alert("ocorreu um erro ao atualizar a tarefa");
      }
    )

  }

  createForm(tarefa: Tarefa) {
    this.formTarefa = new FormGroup({
      id: new FormControl(tarefa.id),
      atividade: new FormControl(tarefa.atividade),
      status: new FormControl(tarefa.status),
    })

  }

  ngOnInit() {
    this.createForm(new Tarefa());

    this.id= +this.route.snapshot.paramMap.get('id')!;
    this.tarefasService.getTarefaById(this.id).subscribe(res => {
      this.tarefa = {
        id: +this.route.snapshot.paramMap.get('id')!,
        atividade: res.atividade,
        status: res.status
      };
      this.formTarefa.patchValue({ atividade: this.tarefa.atividade });
      this.formTarefa.patchValue({ status: this.tarefa.status });
      this.formTarefa.patchValue({ id: this.tarefa.id });

    });
  }

}
