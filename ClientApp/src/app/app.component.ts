import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.updateLoggedInStatus();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
