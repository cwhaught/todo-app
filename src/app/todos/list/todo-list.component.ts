import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from './todo.service';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

export class TodoListDataSource implements DataSource<Todo> {

  private todos$ = new BehaviorSubject<Todo[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private todoService: TodoService) {}

  connect(): Observable<Todo[]> {
    return this.todos$;
  }

  disconnect(): void {
    // clean up our observables to prevent memory leaks
    this.todos$.complete();
    this.loadingSubject.complete();
  }

  load() {
    // mark loading to true for anyone who is watching the loading indicator
    this.loadingSubject.next(true);

    this.todoService.list().pipe(
      catchError(() => {
        // return an empty list on error to prevent issues in the ui
        return of([]);
      }),
      finalize(() => {
        // make sure after our observable completes we mark loading as false
        return this.loadingSubject.next(false);
      })
    )
      .subscribe(todos => {
        // we have a successful result, emit the latest list of todos
        return this.todos$.next(todos);
      });
  }
}

@Component({
  selector: 'weather-app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource: TodoListDataSource;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.dataSource = new TodoListDataSource(this.todoService);
    this.load();
  }

  load() {
    this.dataSource.load();
  }

}
