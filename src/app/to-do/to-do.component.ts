import { ToDoService } from './services/to-do.service';
import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Task} from './models/task';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  isScreenWide: boolean | undefined;

  // fetchedTasks: Observable<Task[]>;
  tasksFromDatabase = [];
  tasksToDisplay: Task[] = [];
  currentTab = 'Tasks to complete';
  categories: string[] = [];
  listHasChanged = false;

  loading$: Observable<boolean>;


  constructor(private breakpointObserver: BreakpointObserver,
              private todoService: ToDoService
              ) {
                
               }

  ngOnInit(): void {
    this.isScreenWide = this.breakpointObserver.isMatched('(min-width: 768px)');
    this.getAllTasks();
  }

  getAllTasks(){
    this.todoService.getAllTasks().subscribe(
      res => {        
        for (let key in res){
          const task = res[key];
          task.id = key;          
          this.tasksFromDatabase.push(task);          
        }
        console.log(this.tasksFromDatabase)
        this.updatePageOnListLoad();
      }
    )
  }
  updatePageOnListLoad(): void{
    this.updateTasksToDisplay(this.currentTab);
    this.getCategories();
    this.listHasChanged = false;
  }

 updateTasksToDisplay(prop: string): void{
   switch(prop){
     case 'All tasks': this.tasksToDisplay = this.tasksFromDatabase;
     break;
     case 'With due date': this.tasksToDisplay = this.tasksFromDatabase.filter(task => task.dueDate && !task.isCompleted);
     break;
     case 'Important': this.tasksToDisplay = this.tasksFromDatabase.filter(task => task.isImportant && !task.isCompleted);
     break;
     case 'Completed': this.tasksToDisplay = this.tasksFromDatabase.filter(task => task.isCompleted);
     break;
     case 'Tasks to complete': this.tasksToDisplay = this.tasksFromDatabase.filter(task => !task.isCompleted);
     break;
     default: this.tasksToDisplay = this.tasksFromDatabase.filter(task => task.categories.includes(prop) && !task.isCompleted);
   }
  }

   getCategories(): void{
     this.categories = [];
     for (let task of this.tasksFromDatabase){
       if(!task.isCompleted){
         for (let cat of task.categories){
           if (!this.categories.includes(cat)){
             this.categories.push(cat);
           }
         }
       }
     }
    }

 handleTabChange(event: string): void{
   this.currentTab = event;
   this.updateTasksToDisplay(event);
  }

  test(){
    console.log(this.tasksFromDatabase)
  }

  onTaskDelete(tasks){

  }

  addTask(){

  }

  saveTasks(){

  }

  // getSavedList(): void{
  //   this.fetchedTasks = this.db.collection<Task>('mock-to-do').valueChanges();
  //   this.fetchedTasks.subscribe(res => {
  //     this.allTasks = res;
  //     this.updatePageStateOnListLoad();
  //   });
  // }


}
