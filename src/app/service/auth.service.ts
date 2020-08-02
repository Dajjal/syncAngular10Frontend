import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = '/auth';

  // tslint:disable-next-line:variable-name
  private _isLoggedIn = false;
  get isLoggedIn(): boolean {
    const store = localStorage.getItem('sync_logged');
    console.log('sync_logged', store);
    if (!!store) {
      const logged = Boolean(store);
      if (logged) {
        this._isLoggedIn = true;
      }
    }
    return this._isLoggedIn;
  }

  constructor(private router: Router) {
  }


  login(login: string, password: string): Observable<boolean> {
    console.log('logged in', this.isLoggedIn);
    console.log('login');
    if (login === 'admin' && password === 'admin') {
      this._isLoggedIn = true;
      localStorage.setItem('sync_logged', 'true');
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    console.log('logged in', this.isLoggedIn);
    console.log('logout');
    localStorage.removeItem('sync_logged');
    this._isLoggedIn = false;
    this.router.navigate([this.loginUrl]);
  }

}
