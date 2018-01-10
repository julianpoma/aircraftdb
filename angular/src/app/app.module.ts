import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { AircraftService } from './aircraft.service';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { NewAircraftComponent } from './new-aircraft/new-aircraft.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AircraftListComponent,
    AircraftComponent,
    NewAircraftComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [AircraftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
