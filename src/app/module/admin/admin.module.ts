import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './component/admin/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {PageNotFoundComponent} from '../../component/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    TranslateModule
  ]
})
export class AdminModule {
}
