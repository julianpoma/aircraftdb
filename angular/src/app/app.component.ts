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
    if (! this.authService.checkAuth()) {
      this.router.navigate(['login']);
    }
  }

  logout() {
    this.authService.logout().subscribe(
      resp => console.log(resp),
      err => console.log(err),
      () => console.log("Unsubscribed")
    );
  }
}
