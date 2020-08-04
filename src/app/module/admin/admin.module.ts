import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './component/admin/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ShedulerComponent} from './component/sheduler/sheduler.component';
import { UsersComponent } from './component/users/users.component';
import { RolesComponent } from './component/roles/roles.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ShedulerComponent,
    UsersComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule {
}
