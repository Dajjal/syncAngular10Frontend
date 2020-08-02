import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './component/admin/admin.component';
import {PageNotFoundComponent} from '../../component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  // 404
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
