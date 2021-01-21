import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTodoListComponent } from './show-todo-list/show-todo-list.component';
import { ShowDoneListComponent } from './show-done-list/show-done-list.component';
import { DeleteTasksComponent } from './delete-tasks/delete-tasks.component';
import { SaveTasksComponent } from './save-tasks/save-tasks.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ShowTodoListComponent,
    ShowDoneListComponent,
    DeleteTasksComponent,
    SaveTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
