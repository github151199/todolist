import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './../todo-service.service';

@Component({
  selector: 'app-save-tasks',
  templateUrl: './save-tasks.component.html',
  styleUrls: ['./save-tasks.component.css']
})
export class SaveTasksComponent implements OnInit {

  saveTasks() {
    this.taskService.saveTasks();
  }

  constructor(private taskService: TodoServiceService) { }

  ngOnInit(): void {
    this.taskService.readTasks();
  }

}
