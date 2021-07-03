import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  // A constructor runs whenever a component is initialized
  constructor(private uiservice: UiService) { }

  // Lifecycle method functions here
  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiservice.toggleAddTask();
  }
}
