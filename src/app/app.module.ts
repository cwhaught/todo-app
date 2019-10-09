import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {TodosListComponent} from './todos/list/todos-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatMenuModule, MatProgressSpinnerModule, MatTableModule, MatToolbarModule} from '@angular/material';
import { TodoDetailComponent } from './todos/detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
