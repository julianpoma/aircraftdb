import { Component, OnInit } from '@angular/core';
import { Aircraft } from '../aircraft';
import { AircraftService } from '../aircraft.service';
import { ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {

  aircraft: Aircraft;
  actualId: Number;

  constructor(private aircraftService: AircraftService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.actualId = params.id;

        this.aircraftService
          .getAircraft(params.id)
          .subscribe(
            aircraft => this.aircraft = aircraft,
            error => console.log(error)
          )
      }
    );
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.aircraftService.editAircraft(this.actualId, f.value)
      .subscribe(
        response => console.log(response),
        err => console.log(err),
        () => this.router.navigate(['aircrafts'])
      )
  }

  onDelete(id) {
    this.aircraftService.deleteAircraft(id)
    .subscribe(
      response => console.log(response),
      err => console.log(err),
      () => this.router.navigate(['aircrafts'])
    )
  }
}