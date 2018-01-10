import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Aircraft } from "./aircraft";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AircraftService {

    url = "http://aircraft.io/api/";
    
    constructor(private http: Http) {
    }

    getAircrafts(): Promise<Aircraft[]> {
        return this.http.get(this.url +'aircraft')
            .toPromise()
            .then(response => response.json().aircrafts)
            .catch(error => console.log(error))
    }

}