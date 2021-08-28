import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {MaterialModule} from '../material/material.module';

import { ToDoComponent } from './to-do.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { DefaultDataServiceConfig } from '@ngrx/data';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000',
  timeout: 3000, // request timeout
}

@NgModule({
  declarations: [
    ToDoComponent,
    DashboardComponent,
    TasksTableComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }]
})

export class TodoModule { }
