import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../../service/auth.service';
import {DrawerSelectEvent} from '@progress/kendo-angular-layout';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('drawer') drawer

  public expanded = false;
  public selectedLanguage: string;
  public languages: { id: string, title: string }[] = [];

  public items: Array<any> = [
    {text: 'ADMIN.DASHBOARD', icon: 'k-i-toggle-full-screen-mode', action: null, path: 'dashboard'},
    {text: 'ADMIN.SHEDULER', icon: 'k-i-calendar', action: null, path: 'sheduler'},
    {separator: true, action: null},
    {text: 'ADMIN.EXIT', icon: 'k-i-logout', action: 'logout'},
  ];

  constructor(private authService: AuthService,
              private router: Router,
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
    const comp_arr: string[] = this.router.url.split('/');
    const comp = comp_arr[comp_arr.length - 1]
    this.items.forEach(item => item.selected = (item.path === comp))
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      const comp_arr: string[] = evt.urlAfterRedirects.split('/');
      const comp = comp_arr[comp_arr.length - 1]
      this.items.forEach(item => item.selected = (item.path === comp))
      this.drawer.items = this.items
    });

    const lang = this.translateService.getDefaultLang();
    this.translateService.use(lang);
    this.selectedLanguage = lang;
    this.languages = environment.locales.map(x => {
      return {
        id: x,
        title: `LANGUAGES.${x.toUpperCase()}`,
      };
    });
  }

  logout(): void {
    this.authService.logout();
  }

  public onSelect(ev: any): void {
    if (ev.item.action === 'logout') {
      this.logout();
    } else {
      console.log('selected', ev.item);
    }
  }

  public changeLocale(): void {
    this.translateService.use(this.selectedLanguage);
    this.translateService.setDefaultLang(this.selectedLanguage);
    localStorage.setItem('sync_lang', this.selectedLanguage);
  }

}
