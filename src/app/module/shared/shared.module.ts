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
import {ExcelModule, GridModule, PDFModule} from "@progress/kendo-angular-grid";
import {PageTitleComponent} from './component/page-title/page-title.component';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {KendoService} from "./service/kendo.service";
import {StandartEditFormComponent} from "./component/standart-edit-form/standart-edit-form.component";
import {DialogsModule} from "@progress/kendo-angular-dialog";

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    BreadcrumbsComponent,
    PageTitleComponent,
    StandartEditFormComponent
  ],
  imports: [
    // Own
    CommonModule,
    RouterModule,
    // Basic
    FormsModule,
    ReactiveFormsModule,
    // Http
    HttpClientModule,
    //
    FontAwesomeModule,
    // Kendo UI
    LayoutModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    DialogsModule,
    // Translation
    TranslateModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    // Http
    HttpClientModule,
    //
    FontAwesomeModule,
    // Kendo UI
    LayoutModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    DialogsModule,
    // Translation
    TranslateModule,
    // Components
    BreadcrumbsComponent,
    PageTitleComponent,
    StandartEditFormComponent,
    //
  ],
  providers: []
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
