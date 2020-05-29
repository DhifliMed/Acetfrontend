import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from '../components/main.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../../environments/environment';
import {LandingComponent} from '../components/authfree/landing/landing.component';
import {LoginComponent} from '../components/authfree/login/login.component';
import {SignupComponent} from '../components/authfree/signup/signup.component';
import {ChangepasswordComponent} from '../components/authreq/changepassword/changepassword.component';
import {LostpasswordComponent} from '../components/authfree/lostpassword/lostpassword.component';
import {VerifyaccountComponent} from '../components/authfree/verifyaccount/verifyaccount.component';
import {MyComponent} from '../components/authreq/my/my.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {FourohfourComponent} from '../components/authfree/fourohfour/fourohfour.component';
import {ApiService} from '../services/api.service';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {ToastContainerModule, ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LogoutComponent} from '../components/authreq/logout/logout.component';
import {UdashboardRoutingModule} from './udashboard/udashboard-routing.module';
import {UdashboardModule} from './udashboard/udashboard.module';
import {AdmindashboardRoutingModule} from './admindashboard/admindashboard-routing.module';
import {AdmindashboardModule} from './admindashboard/admindashboard.module';

@NgModule({
  declarations: [
    MainComponent,
    MyComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    ChangepasswordComponent,
    LostpasswordComponent,
    VerifyaccountComponent,
    FourohfourComponent,
    LogoutComponent
  ],
  imports: [
    UdashboardModule,
    AdmindashboardModule,
    MainRoutingModule,
    UdashboardRoutingModule,
    AdmindashboardRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPageScrollModule,
    FormsModule,
    ToastContainerModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    HttpClient,
    ApiService,
    AuthService
  ],
  bootstrap: [MainComponent]
})
export class MainModule {
}
