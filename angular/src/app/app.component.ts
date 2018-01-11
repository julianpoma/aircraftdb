import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aicraft DB';

  isLoggedIn: Boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['aircrafts']);
      this.authService.isLoggedIn = true;
    }
    else {
      this.authService.isLoggedIn = false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.authService.isLoggedIn = false;
  }
}
