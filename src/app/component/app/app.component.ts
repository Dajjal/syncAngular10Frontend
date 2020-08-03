import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    const lang = localStorage.getItem('sync_lang');
    if (!!lang) {
      this.translateService.setDefaultLang(lang);
    } else {
      this.translateService.setDefaultLang(environment.defaultLocale);
    }
  }
}
