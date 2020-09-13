import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Aircraft } from "./aircraft";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class AircraftService {

    url = "http://localhost:8000/";
    
    constructor(private http: Http) {
    }

    getAircrafts() {
        return this.http.get(
            this.url +'aircraft',
            { headers: new Headers({'Authorization': 'Bearer '+localStorage.getItem('token')})}
        )
        .map(
            response => response.json().aircrafts,
            error => console.log(error)
        );
    }

    getAircraft(id) {
        return this.http.get(
            this.url + 'aircraft/' + id,
            { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
        )
        .map(
            response => response.json().aircraft,
            error => console.log(error)
        );
    }

    newAircraft(aircraft) {
        return this.http.post(
            this.url + 'aircraft',
            aircraft,
            { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
        )
        .map(
            response => response.json(),
            error => console.log(error)
        );
    }

    deleteAircraft(id) {
        return this.http.delete(
            this.url + 'aircraft/' + id,
            { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
        )
        .map(
            response => response.json(),
            error => console.log(error)
        )
    }

    editAircraft (id, aircraft) {
        return this.http.put(
            this.url + 'aircraft/' + id,
            aircraft,
            { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
        )
        .map(
            response => response.json(),
            error => console.log(error)
        )
    }
}
