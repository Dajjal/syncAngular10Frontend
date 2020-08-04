import {Injectable, isDevMode} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    /*const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });

      if (isDevMode()) {
        req = req.clone({
          url: 'http://localhost:5555' + req.url
        });
      }
    } else {
      if (isDevMode()) {
        req = req.clone({
          url: 'http://localhost:5555' + req.url
        });
      }
    }*/

    if (isDevMode()) {
      req = req.clone({
        url: 'http://localhost:8080' + req.url
      });
    }

    return next.handle(req);
  }
}
