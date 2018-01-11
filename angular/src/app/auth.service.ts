import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()

export class AuthService {
  constructor(private http: Http) {

  }

  isLoggedIn: Boolean;

  login(email:string, pass:string) {
    return this.http.post(
      'http://aircraft.io/api/login',
      {email: email, password: pass}
    )
    .map(
      response => {
        return response.json().token;
      })
    .do(
      (token) => {
        localStorage.setItem('token', token);
        this.isLoggedIn = true;
      }
    )
  }

  checkAuth() {
    if(localStorage.getItem('token')) {
      this.isLoggedIn=true;
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false
  }
}