import { Injectable } from '@angular/core';
import { Task } from './task';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  tasksList: Array<Task> = [];
  tasksListObs = new BehaviorSubject<Array<Task>>([]);

  tasksDone: Array<Task> = [];
  tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  addTask(newTask: Task) {
    this.tasksList.push(newTask);
    this.tasksListObs.next(this.tasksList);
  }
  removeTask(task: Task) {
    this.tasksList = this.tasksList.filter(item => item !== task);
    this.tasksListObs.next(this.tasksList);
  }

  taskDone(task: Task) {
    this.tasksDone.push(task);
    this.removeTask(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksList(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDone(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }


  deleteTasks() {
    this.tasksList = [];
    this.tasksListObs.next(this.tasksList);
    this.tasksDone = [];
    this.tasksDoneObs.next(this.tasksDone);
  }

  saveTasks() {
    localStorage.setItem('todoList', JSON.stringify(this.tasksList));
    localStorage.setItem('doneList', JSON.stringify(this.tasksDone));
  }

  readTasks() {
    const storageTasksList =
      JSON.parse(localStorage.getItem('todoList'));
    if (storageTasksList) {
      this.tasksList = storageTasksList;
    }
    this.tasksListObs.next(this.tasksList);

    const storageTasksDone =
      JSON.parse(localStorage.getItem('doneList'));
    if (storageTasksDone) {
      this.tasksDone = storageTasksDone;
    }
    this.tasksDoneObs.next(this.tasksDone);
  }



  constructor() { }
}
