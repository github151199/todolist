import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './../todo-service.service';

@Component({
  selector: 'app-delete-tasks',
  templateUrl: './delete-tasks.component.html',
  styleUrls: ['./delete-tasks.component.css']
})
export class DeleteTasksComponent implements OnInit {

  deleteTasks() {
    this.taskService.deleteTasks();
  }


  constructor(private taskService: TodoServiceService) { }

  ngOnInit(): void {
  }

}
