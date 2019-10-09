import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from '../list/todo.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'weather-app-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo$: Observable<Todo>;

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    const todoId = +this.route.snapshot.paramMap.get('id');

    this.todo$ = this.todoService.get(todoId);
  }

}
