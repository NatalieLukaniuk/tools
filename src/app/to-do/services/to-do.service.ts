import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
pantryApi = 'https://getpantry.cloud/apiv1/pantry/71a87c32-079b-4dc2-82d7-40dae1160f34/basket/natalie';
  constructor(private http: HttpClient) { }

  saveTasks(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(this.pantryApi, data, httpOptions)
  }

  deleteTask(){

  }

  getAllTasks(){
    return this.http.get('https://getpantry.cloud/apiv1/pantry/71a87c32-079b-4dc2-82d7-40dae1160f34/basket/natalie')
  }
}
