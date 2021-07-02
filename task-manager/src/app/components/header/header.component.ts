import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  // A constructor runs whenever a component is initialized
  constructor() { }

  // Lifecycle method functions here
  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log("toggle");
  }
}
