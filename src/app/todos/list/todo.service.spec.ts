import {TestBed} from '@angular/core/testing';

import {Todo, TodoService} from './todo.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('TodosService', () => {
  let service: TodoService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    });

    service = TestBed.get(TodoService);
    http = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a list of todos', () => {
    // == Setup ==
    let actual: Todo[];
    const expected: Todo[] = [{
      id: 123,
      userId: 456,
      title: 'Peter Parker',
      completed: true
    }];

    // == Execute ==
    service.list().subscribe(result => actual = result);

    // == Verify ==
    // flushing my expected here because the service is not manipulating the list in any way
    // if it was I would add another collection of result which would be different from the expected result
    http.expectOne({url: 'https://jsonplaceholder.typicode.com/todos', method: 'GET'}).flush(expected);

    expect(actual).toEqual(expected);
  });

  it('should get a single todo', () => {
    // == Setup ==
    let actual: Todo;
    const expected: Todo = {
      id: 123,
      userId: 456,
      title: 'Ben Reilly',
      completed: true
    };

    // == Execute ==
    service.get(123).subscribe(result => actual = result);

    // == Verify ==
    // flushing my expected here because the service is not manipulating the returned value in any way
    // if it was I would add another object of result which would be different from the expected result
    http.expectOne({url: 'https://jsonplaceholder.typicode.com/todos/123', method: 'GET'}).flush(expected);

    expect(actual).toEqual(expected);
  });
});
