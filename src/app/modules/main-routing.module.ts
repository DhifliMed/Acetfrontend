import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from '../components/authfree/landing/landing.component';
import {LoginComponent} from '../components/authfree/login/login.component';
import {FourohfourComponent} from '../components/authfree/fourohfour/fourohfour.component';
import {SignupComponent} from '../components/authfree/signup/signup.component';
import {LostpasswordComponent} from '../components/authfree/lostpassword/lostpassword.component';
import {ChangepasswordComponent} from '../components/authreq/changepassword/changepassword.component';
import {AuthmiddlewareService} from '../services/authmiddleware.service';
import {NonauthmiddlewareService} from '../services/nonauthmiddleware.service';
import {LogoutComponent} from '../components/authreq/logout/logout.component';

const routes: Routes = [
  {path: '', component: LandingComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [NonauthmiddlewareService]},
  {path: 'signup', component: SignupComponent, canActivate: [NonauthmiddlewareService]},
  {path: 'lostpasswd', component: LostpasswordComponent, canActivate: [NonauthmiddlewareService]},
  {path: 'changepasswd', component: ChangepasswordComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthmiddlewareService]},
  {path: '**', component: FourohfourComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
