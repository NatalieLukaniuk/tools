import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {MaterialModule} from '../material/material.module';

import { ToDoComponent } from './to-do.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    ToDoComponent,
    DashboardComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: []
})

export class TodoModule { }
