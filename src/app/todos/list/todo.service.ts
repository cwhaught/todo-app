import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  list(): Observable<Todo[]> {
    // i repeat urls here, ideally there would be an api interceptor or some other
    // utility to reduce that
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  get(id: number): Observable<Todo> {
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
