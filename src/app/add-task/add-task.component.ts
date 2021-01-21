import { Component, OnInit } from '@angular/core';
import { Task } from './../task';
import { TodoServiceService } from './../todo-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask = '';
  taskDate = new Date();

  addTask() {
    const object: Task =
      ({ name: this.newTask, date: this.taskDate });
    this.taskService.addTask(object);
    this.newTask = '';
  }



  constructor(private taskService: TodoServiceService) { }

  ngOnInit(): void {
  }

}
