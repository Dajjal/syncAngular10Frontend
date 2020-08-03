import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './component/admin/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ShedulerComponent} from './component/sheduler/sheduler.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ShedulerComponent
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
