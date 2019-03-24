import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  parent: AppComponent;

  constructor(parent: AppComponent) {
    this.parent = parent;
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.parent.sidebar = !this.parent.sidebar;
  }

}
