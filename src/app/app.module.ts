import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {TodosListComponent} from './todos/list/todos-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule, MatProgressSpinnerModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
