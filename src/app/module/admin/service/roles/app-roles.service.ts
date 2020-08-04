import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KendoService} from '../../../shared/service/kendo.service';
import {GridDataResult} from '@progress/kendo-angular-grid';

@Injectable({
  providedIn: 'root'
})
export class AppRolesService extends KendoService {

  constructor(http: HttpClient) {
    super(http, 'roles');
  }

}
