import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from './todo.service';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

export class TodosDataSource implements DataSource<Todo> {

  private todos$ = new BehaviorSubject<Todo[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private todosService: TodoService) {}

  connect(collectionViewer: CollectionViewer): Observable<Todo[]> {
    return this.todos$;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.todos$.complete();
    this.loadingSubject.complete();
  }

  loadTodos() {
    this.loadingSubject.next(true);

    this.todosService.list().pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(todos => this.todos$.next(todos));
  }
}

@Component({
  selector: 'weather-app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource;

  constructor(private todosService: TodoService) {
  }

  ngOnInit() {
    this.dataSource = new TodosDataSource(this.todosService);
    this.dataSource.loadTodos();
  }

}
