import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  selectedLanguage: string;
  languages: { id: string, title: string }[] = [];

  public loginForm: FormGroup = new FormGroup({
    loginFld: new FormControl('', Validators.required),
    passwordFld: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
              private router: Router,
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
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

  changeLocale(): void {
    this.translateService.use(this.selectedLanguage);
    this.translateService.setDefaultLang(this.selectedLanguage);
    localStorage.setItem('sync_lang', this.selectedLanguage);
  }

  public login(login: string, password: string): void {
    this.loginForm.markAllAsTouched();
    console.log('login clicked');
    console.log('valid', this.loginForm.valid);
    if (this.loginForm.valid) {
      this.authService.login(login, password).subscribe((canLoad) => {
        console.log('canLoad', canLoad);
        if (canLoad) {
          this.router.navigate(['/admin']);
        }
      });
    }
  }

  public clearForm(): void {
    this.loginForm.reset();
  }

}
