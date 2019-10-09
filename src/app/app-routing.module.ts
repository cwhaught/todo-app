import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './todos/list/todo-list.component';
import {TodoDetailComponent} from './todos/detail/todo-detail.component';

const routes: Routes = [
  {
    path: 'todos',
    children: [
      {
        path: '',
        component: TodoListComponent,
      },
      {
      path: ':id',
      component: TodoDetailComponent
    }]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
