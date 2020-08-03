import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './component/admin/admin.component';
import {PageNotFoundComponent} from '../../component/page-not-found/page-not-found.component';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {ShedulerComponent} from "./component/sheduler/sheduler.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {
    path: '',
    component: AdminComponent,
    data: {
      title: 'ADMIN.PAGE'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'ADMIN.DASHBOARD'
        },
      },
      {
        path: 'sheduler',
        component: ShedulerComponent,
        data: {
          title: 'ADMIN.SHEDULER'
        },
      },
      // 404
      {path: '**', component: PageNotFoundComponent}
    ]
  },
  // 404
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
