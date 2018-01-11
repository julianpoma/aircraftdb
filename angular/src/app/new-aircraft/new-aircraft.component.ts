import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../aircraft.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-aircraft',
  templateUrl: './new-aircraft.component.html',
  styleUrls: ['./new-aircraft.component.css']
})
export class NewAircraftComponent implements OnInit {

  constructor(private aircraftService: AircraftService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.aircraftService.newAircraft(f.value)
    .subscribe(
      response => console.log(response),
      err => console.log(err),
      () => this.router.navigate(['aircrafts'])
    )
  }
}
