import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';

@Component({
  selector: 'weather-app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  public list$;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.list$ = this.todosService.get();
  }

}
