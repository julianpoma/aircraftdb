import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { NewAircraftComponent } from './new-aircraft/new-aircraft.component'
import { AuthGuard } from './auth/auth.guard';
import { NotfoundComponent } from './auth/notfound/notfound.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo:'/aircrafts', pathMatch: 'full' },
    { path: 'login', component: SignInComponent },
    { path: 'aircrafts', component: AircraftListComponent, canActivate:[AuthGuard]},
    { path: 'aircraft/new', component: NewAircraftComponent, canActivate: [AuthGuard]},
    { path: 'aircraft/:id', component: AircraftComponent, canActivate: [AuthGuard]},
    { path: '**', component: NotfoundComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES)