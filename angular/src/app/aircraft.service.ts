import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Aircraft } from "./aircraft";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AircraftService {

    url = "http://aircraft.io/api/";
    
    constructor(private http: Http) {
    }

    getAircrafts() {
        return this.http.get(this.url +'aircraft')
            .map(
                response => response.json().aircrafts,
                error => console.log(error)
            );
    }

    getAircraft(id) {
        return this.http.get(this.url + 'aircraft/' + id)
            .map(
                response => response.json().aircraft,
                error => console.log(error)
            );
    }

}