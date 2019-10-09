import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
