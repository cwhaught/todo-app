import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListComponent} from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent]
    })
      .overrideTemplate(TodoListComponent, '')
      .compileComponents();

    // i am overriding the template above on purpose,
    // I intend these tests only to be used for unit testing
    // and templates can cause issues when building the component
    // for a large scale application I would prefer e2e tests
    // but I didn't want to fumble through those as I am more familiar with
    // writing unit tests in jest
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
