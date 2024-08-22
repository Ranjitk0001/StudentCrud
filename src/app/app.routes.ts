import { Routes } from '@angular/router';
import { StudComponent } from './stud/stud.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {path:"homepath",component:AppComponent},
    {path:"studpath",component:StudComponent},
    {path:"loginpath",component:LoginComponent},
  
    
];
