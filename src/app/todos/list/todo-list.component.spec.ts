import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListComponent} from './todo-list.component';
import {Todo, TodoService} from './todo.service';
import Mock = jest.Mock;
import {of} from 'rxjs';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: Mock<TodoService>;
  const mockedService = {list: jest.fn()};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [{provide: TodoService, useValue: mockedService}]
    })
      .overrideTemplate(TodoListComponent, '')
      .compileComponents();

    // i am overriding the template above on purpose,
    // I intend these tests only to be used for unit testing
    // and templates can cause issues when building the component
    // for a large scale application I would prefer e2e tests
    // but I didn't want to fumble through those as I am more familiar with
    // writing unit tests in jest

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

    todoService = TestBed.get(TodoService);

    mockedService.list.mockReturnValue(of([]));
  });

  beforeEach(async () => {
    await fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos', () => {
    // == Setup ==
    let actual: Todo[];
    const expected: Todo[] = [{
      id: 123,
      userId: 456,
      title: 'Peter Parker',
      completed: true
    }];

    mockedService.list.mockReturnValue(of(expected));

    // == Execute ==
    component.load();
    component.dataSource.connect().subscribe(result => actual = result);

    // == Verify ==
    expect(actual).toEqual(expected);
  });
});
