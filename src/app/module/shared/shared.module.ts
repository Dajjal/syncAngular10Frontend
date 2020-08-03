import {NgModule} from '@angular/core';
import {LayoutModule} from '@progress/kendo-angular-layout';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {LabelModule} from '@progress/kendo-angular-label';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BreadcrumbsComponent} from './component/breadcrumbs/breadcrumbs.component';
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [
    // Own
    CommonModule,
    RouterModule,
    // Basic
    FormsModule,
    ReactiveFormsModule,
    // Http
    HttpClientModule,
    // Kendo UI
    LayoutModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    // Translation
    TranslateModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    // Http
    HttpClientModule,
    // Kendo UI
    LayoutModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    // Translation
    TranslateModule,
    // Components
    BreadcrumbsComponent,
  ]
})
export class SharedModule {
}
