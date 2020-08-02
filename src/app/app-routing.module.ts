import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {AdminGuard} from './guard/admin.guard';
import {AuthComponent} from './component/auth/auth.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'admin'},
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  },
  // 404
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
