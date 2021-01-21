import { Component, OnInit } from '@angular/core';
import { Task } from './../task';
import { TodoServiceService } from './../todo-service.service';

@Component({
  selector: 'app-show-todo-list',
  templateUrl: './show-todo-list.component.html',
  styleUrls: ['./show-todo-list.component.css']
})
export class ShowTodoListComponent implements OnInit {
  toDoList: Array<Task> = [];

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }

  taskDone(task: Task) {
    this.taskService.taskDone(task);
  }


  constructor(private taskService: TodoServiceService) {
    this.taskService.getTasksList()
      .subscribe((data: Array<Task>) => {
        this.toDoList = data;
      });
  }


  ngOnInit(): void {
  }

}
