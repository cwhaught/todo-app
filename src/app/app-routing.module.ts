import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodosListComponent} from './todos/list/todos-list.component';
import {TodoDetailComponent} from './todos/detail/todo-detail.component';

const routes: Routes = [
  {
    path: 'todos',
    children: [
      {
        path: '',
        component: TodosListComponent,
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
