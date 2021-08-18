import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Task} from './models/task';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  isScreenWide: boolean | undefined;

  fetchedTasks: Observable<Task[]>;
  allTasks: Task[];
  tasksToDisplay: Task[] = [];
  currentTab = 'Tasks to complete';
  categories: string[] = [];
  listHasChanged = false;


  constructor(private breakpointObserver: BreakpointObserver,
              private db: AngularFirestore
              ) { }

  ngOnInit(): void {
    this.isScreenWide = this.breakpointObserver.isMatched('(min-width: 768px)');
    this.getSavedList();
  }

  getSavedList(): void{
    this.fetchedTasks = this.db.collection<Task>('mock-to-do').valueChanges();
    this.fetchedTasks.subscribe(res => {
      this.allTasks = res;
      this.updatePageStateOnListLoad();
    });
  }

  updatePageStateOnListLoad(): void{
    this.updateTasksToDisplay(this.currentTab);
    this.getCategories();
    this.listHasChanged = false;
  }

  updateTasksToDisplay(prop: string): void{
    // this.resetIsChecked();
    if (prop === 'All tasks') {
      this.tasksToDisplay = this.allTasks;
    } else if (prop === 'With due date') {
      this.showTasksWithDueDate();
    } else if (prop === 'Important' || prop === 'Completed' || prop === 'Tasks to complete') {
      this.showTasksWithProp(prop);
    } else {
      this.showTasksWithCategory(prop);
    }
    console.log(this.tasksToDisplay);
  }

  getCategories(): void{
    this.categories = [];
    for (const task of this.allTasks){
      if (!task.isCompleted){
        for (const tag of task.categories){
          if (!this.categories.includes(tag)){
            this.categories.push(tag);
          }
        }
      }
    }
  }

  showTasksWithDueDate(): void{
    this.tasksToDisplay = this.allTasks.filter(task => task.dueDate && !task.isCompleted);
  }

  showTasksWithProp(prop: string): void{
    if (prop === 'Important') {
      this.tasksToDisplay = this.allTasks.filter(task => task.isImportant && !task.isCompleted);
    } else if (prop === 'Completed'){
      this.tasksToDisplay = this.allTasks.filter(task => task.isCompleted);
    } else if (prop === 'Tasks to complete') {
      this.tasksToDisplay = this.allTasks.filter(task => !task.isCompleted);
    }
  }

  showTasksWithCategory(category: string): void{
    this.tasksToDisplay = this.allTasks.filter(task => task.categories.includes(category) && !task.isCompleted);
  }

  handleTabChange(event: string): void{
    this.currentTab = event;
    this.updateTasksToDisplay(event);
  }

}
