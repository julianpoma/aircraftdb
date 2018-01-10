import { Component, OnInit } from '@angular/core';
import { Aircraft } from '../aircraft';
import { AircraftService } from '../aircraft.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {

  aircraft: Aircraft;

  constructor(private aircraftService: AircraftService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.aircraftService.getAircraft(params.id)
      .then (
      aircraft => this.aircraft = aircraft
      )
      .catch(error => console.log(error))
    );
  }

}
