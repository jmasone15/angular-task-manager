import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from "../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  // On load, we will call the task service function that gets the tasks array and then sets it to the empty task array
  ngOnInit(): void {
    // Subscribe is similar to a promise method
    this.taskService
      .getTasks()
      .subscribe((tasks) => this.tasks = tasks);
  };

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  };

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  };

  addTask(task: Task) {
    this.taskService
      .addTask(task)
      .subscribe((task) => (this.tasks.push(task)));
  }
}
