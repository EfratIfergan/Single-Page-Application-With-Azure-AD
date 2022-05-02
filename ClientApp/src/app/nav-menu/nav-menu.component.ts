import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  @Input() loggedIn: boolean;
  @Output() loginClicked = new EventEmitter<void>();
  @Output() logoutClicked = new EventEmitter<void>();

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  login() {
    this.loginClicked.emit();
  }

  logout() {
    this.logoutClicked.emit();
  }
}
