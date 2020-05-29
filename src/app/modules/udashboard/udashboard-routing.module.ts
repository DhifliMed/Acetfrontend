import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MyComponent} from '../../components/authreq/my/my.component';
import {AuthmiddlewareService} from '../../services/authmiddleware.service';
import {DashboardComponent} from '../../components/authreq/my/dashboard/dashboard.component';
import {InvoiceComponent} from '../../components/authreq/my/invoice/invoice.component';
import {ProjectComponent} from '../../components/authreq/my/project/project.component';
import {ProfileComponent} from '../../components/authreq/my/profile/profile.component';
import {TeamsComponent} from '../../components/authreq/my/teams/teams.component';
import {ContractsComponent} from '../../components/authreq/my/contracts/contracts.component';
import {TimetrackComponent} from '../../components/authreq/my/timetrack/timetrack.component';
import {SettingsComponent} from '../../components/authreq/my/settings/settings.component';
import {CurrenttaskComponent} from '../../components/authreq/my/project/currenttask/currenttask.component';
import {CalendarComponent} from '../../components/authreq/my/project/calendar/calendar.component';
import {ReportsComponent} from '../../components/authreq/my/timetrack/reports/reports.component';
import {EfficiencyComponent} from '../../components/authreq/my/timetrack/efficiency/efficiency.component';
import {SprintComponent} from '../../components/authreq/my/project/sprint/sprint.component';

const routes: Routes = [
  {
    path: 'my', component: MyComponent, canActivate: [AuthmiddlewareService],
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: []
      },
      {
        path: 'profile',
        component: ProfileComponent,
        children: []
      },
      {
        path: 'teams',
        component: TeamsComponent,
        children: []
      },
      {
        path: 'contracts',
        component: ContractsComponent,
        children: []
      },
      {
        path: 'projects',
        component: ProjectComponent,
        children: []
      },
      {
        path: 'projects/current-tasks',
        component: CurrenttaskComponent,
        children: []
      },
      {
        path: 'projects/calendar',
        component: CalendarComponent,
        children: []
      },
      {
        path: 'projects/sprints',
        component: SprintComponent,
        children: []
      },
      {
        path: 'timetrack',
        component: TimetrackComponent,
        children: []
      },
      {
        path: 'timetrack/efficiency',
        component: EfficiencyComponent,
        children: []
      },
      {
        path: 'timetrack/reports',
        component: ReportsComponent,
        children: []
      },
      {
        path: 'invoicing',
        component: InvoiceComponent,
        children: []
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: []
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UdashboardRoutingModule {
}
