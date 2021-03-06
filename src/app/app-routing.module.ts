import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthguardService } from './authguard.service';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: 'login', component:LoginComponent},

   { path: 'about', component:AboutusComponent},
  { 
    path: 'loginhome', component:LoginHomeComponent,
    canActivate: [AuthguardService],
}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
