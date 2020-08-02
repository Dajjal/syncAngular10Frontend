import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '@progress/kendo-angular-layout';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {LabelModule} from '@progress/kendo-angular-label';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
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
  ]
})
export class SharedModule {
}
