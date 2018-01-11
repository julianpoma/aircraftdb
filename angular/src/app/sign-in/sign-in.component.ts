import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.authService.login(f.value.email, f.value.password)
      .subscribe(
        response => console.log(response),
        error => console.log(error),
        () => this.router.navigate(['aircrafts'])
      )
  }
}
