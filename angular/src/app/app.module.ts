import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AircraftListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
