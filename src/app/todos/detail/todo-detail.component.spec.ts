import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailComponent } from './todo-detail.component';

describe('DetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
