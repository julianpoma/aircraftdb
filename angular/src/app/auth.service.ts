import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()

export class AuthService {
  constructor(private http: Http) {

  }

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
      (token) => {localStorage.setItem('token', token)}
    )
  }
}