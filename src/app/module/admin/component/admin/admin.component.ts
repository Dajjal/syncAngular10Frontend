import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../service/auth.service';
import {DrawerSelectEvent} from '@progress/kendo-angular-layout';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public expanded = false;
  public selected = 'Avatar';

  public items: Array<any> = [
    {separator: true},
    {text: 'ADMIN.EXIT', icon: 'k-i-logout', selected: true, action: 'logout'},
  ];

  constructor(private authService: AuthService,
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
    console.log('langs', this.translateService.getLangs());
    console.log('browser cur lang', this.translateService.getBrowserCultureLang());
    console.log('browser lang', this.translateService.getBrowserLang());
    console.log('default lang', this.translateService.getDefaultLang());
  }

  logout(): void {
    this.authService.logout();
  }

  public onSelect(ev: DrawerSelectEvent): void {
    if (ev.item.action === 'logout') {
      this.logout();
    } else {
      this.selected = ev.item.text;
    }
  }

}
