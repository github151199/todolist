import { Component, OnInit } from '@angular/core';
import { Task } from './../task';
import { TodoServiceService } from './../todo-service.service';

@Component({
  selector: 'app-show-done-list',
  templateUrl: './show-done-list.component.html',
  styleUrls: ['./show-done-list.component.css']
})
export class ShowDoneListComponent implements OnInit {

  doneTasks: Array<Task> = [];
  constructor(private taskService: TodoServiceService) {
    this.taskService.getTasksDone().subscribe(data => {
      this.doneTasks = data;
    });
  }

  ngOnInit(): void {
  }

}
