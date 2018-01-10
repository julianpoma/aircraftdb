import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { NewAircraftComponent } from './new-aircraft/new-aircraft.component'

const APP_ROUTES: Routes = [
    { path: '', component: SignInComponent },
    { path: 'aircrafts', component: AircraftListComponent},
    { path: 'aircraft/new', component: NewAircraftComponent},
    { path: 'aircraft/:id', component: AircraftComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES)