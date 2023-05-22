import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  private url = 'tarefas';

  constructor(private http: HttpClient) { }

  public helloWorld(): Observable<string> {
    return this.http.get(environment.apiUrl, { responseType: 'text' });
  }

  public getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getTarefaById(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${environment.apiUrl}/${this.url}/${id}`);
  }

public updateTarefa(id:number,tarefa: Tarefa): Observable<Tarefa[]> {
    return this.http.put<Tarefa[]>(
      `${environment.apiUrl}/${this.url}/${id}`, tarefa);
  }

  public createTarefa(tarefa: Tarefa): Observable<Tarefa[]> {
    return this.http.post<Tarefa[]>(
      `${environment.apiUrl}/${this.url}`, tarefa );
  }

  public deleteTarefa(tarefa: Tarefa): Observable<Tarefa[]> {
    return this.http.delete<Tarefa[]>(
      `${environment.apiUrl}/${this.url}/${tarefa.id}`
    );
  }



}
