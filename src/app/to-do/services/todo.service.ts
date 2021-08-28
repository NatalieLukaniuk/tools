import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Task } from '../models/task';



@Injectable({ providedIn: 'root' })
export class ToDoService extends EntityCollectionServiceBase<Task> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Task', serviceElementsFactory);
  }
}
