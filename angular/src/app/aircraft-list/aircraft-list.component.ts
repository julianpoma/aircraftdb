import { Component, OnInit } from '@angular/core';
import { Aircraft } from '../aircraft'
import { AircraftService } from '../aircraft.service';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {

  aircrafts: Aircraft[];

  constructor(private aircraftService: AircraftService) { }

  ngOnInit() {
    this.aircraftService.getAircrafts()
    .then(
      aircrafts => this.aircrafts = aircrafts
    )

  }
}
