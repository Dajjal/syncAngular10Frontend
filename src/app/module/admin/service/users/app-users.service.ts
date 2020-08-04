import {Injectable} from '@angular/core';
import {KendoService} from "../../../shared/service/kendo.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppUsersService extends KendoService {

  constructor(http: HttpClient) {
    super(http, 'users');
  }

}
