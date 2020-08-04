import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './module/shared/shared.module';

import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {AuthComponent} from './component/auth/auth.component';
import {AppComponent} from './component/app/app.component';
import {Router} from '@angular/router';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MissingTranslationService} from './service/missing-translation.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptorService} from "./service/jwt-interceptor.service";
import { DialogsModule } from '@progress/kendo-angular-dialog';



export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Shared Module
    SharedModule,
    // Routing
    AppRoutingModule,
    // Translation
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingTranslationService
      },
      useDefaultLang: true,
    }),

  ],
  exports: [],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
