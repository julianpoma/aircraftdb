import { Component, OnInit } from '@angular/core';
import { Aircraft } from '../aircraft'
import { AircraftService } from '../aircraft.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {

  aircrafts: Aircraft[];

  constructor(private aircraftService: AircraftService, private auth:AuthService) { }

  ngOnInit() {
    this.aircraftService.getAircrafts()
    .subscribe(
      aircrafts => this.aircrafts = aircrafts,
      error => console.log(error)
    );
  }
}
