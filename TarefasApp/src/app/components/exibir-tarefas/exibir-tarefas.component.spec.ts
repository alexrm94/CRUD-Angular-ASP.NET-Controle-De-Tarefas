import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirTarefasComponent } from './exibir-tarefas.component';

describe('ExibirTarefasComponent', () => {
  let component: ExibirTarefasComponent;
  let fixture: ComponentFixture<ExibirTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirTarefasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
