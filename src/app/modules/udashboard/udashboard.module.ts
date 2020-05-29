import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UdashboardRoutingModule} from './udashboard-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {MainRoutingModule} from '../main-routing.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../../../environments/environment';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastContainerModule, ToastrModule} from 'ngx-toastr';
import {ApiService} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';
import {MainComponent} from '../../components/main.component';
import {ProfileComponent} from '../../components/authreq/my/profile/profile.component';
import {DashboardComponent} from '../../components/authreq/my/dashboard/dashboard.component';
import {ProjectComponent} from '../../components/authreq/my/project/project.component';
import {InvoiceComponent} from '../../components/authreq/my/invoice/invoice.component';
import {TeamsComponent} from '../../components/authreq/my/teams/teams.component';
import {SprintComponent} from '../../components/authreq/my/project/sprint/sprint.component';
import {TaskComponent} from '../../components/authreq/my/project/task/task.component';
import {RightSidebarComponent} from '../../components/authreq/my/layout/right-sidebar/right-sidebar.component';
import {LeftSidebarComponent} from '../../components/authreq/my/layout/left-sidebar/left-sidebar.component';
import {TimetrackComponent} from '../../components/authreq/my/timetrack/timetrack.component';
import {ContractsComponent} from '../../components/authreq/my/contracts/contracts.component';


@NgModule({
  declarations: [
    RightSidebarComponent,
    LeftSidebarComponent,
    ProfileComponent,
    DashboardComponent,
    ProjectComponent,
    InvoiceComponent,
    TeamsComponent,
    SprintComponent,
    TaskComponent,
    TimetrackComponent,
  ],
  imports: [
    CommonModule,
    UdashboardRoutingModule,
    BrowserModule,
    MainRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    NgxPageScrollModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastContainerModule,
    ToastrModule.forRoot()
  ],
  providers: [
    HttpClient,
    ApiService,
    AuthService
  ],
  exports: [
    LeftSidebarComponent,
    RightSidebarComponent
  ],
  bootstrap: [MainComponent]
})
export class UdashboardModule {
}
