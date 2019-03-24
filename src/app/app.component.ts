import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebar: boolean;

  constructor() {
    this.sidebar = true;
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;

    console.log("hello");
  }
}
