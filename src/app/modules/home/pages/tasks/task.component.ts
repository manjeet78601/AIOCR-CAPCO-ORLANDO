import { Component, OnInit } from '@angular/core';
import { TaskService } from '@/core/services/task.service'
import { Task } from '@/shared/models/task';


@Component({
  selector: 'app-home',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {

  isLoading: boolean = false;
  tasks: Task[];
  imageUrl: '';

  submenuOpen:boolean = false;

  constructor(private taskService: TaskService) {
    this.isLoading = true;
    this.taskService.getTasks().subscribe( tasks => {
      this.tasks = tasks;
      this.isLoading = false;

      console.log(this.tasks);
    });
  }

  ngOnInit() {

  }

  getOpacity(task: Task) {
    return task.nbrItems > 0 ? 1 : 0.5;
  }

  toggleSubmenu() {
    this.submenuOpen = !this.submenuOpen;
  }

}
