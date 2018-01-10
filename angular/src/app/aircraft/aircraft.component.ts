import { Component, OnInit } from '@angular/core';
import { Aircraft } from '../aircraft';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {

  aircraft: Aircraft;

  constructor() { }

  ngOnInit() {
  }

}
