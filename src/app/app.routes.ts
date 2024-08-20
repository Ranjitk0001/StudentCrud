import { Routes } from '@angular/router';
import { StudComponent } from './stud/stud.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"studpath",component:StudComponent},
    {path:"loginpath",component:LoginComponent},
    
];
