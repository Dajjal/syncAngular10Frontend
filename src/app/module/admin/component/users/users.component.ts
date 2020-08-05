import {Component, OnInit} from '@angular/core';
import {AppUsersService} from '../../service/users/app-users.service';
import {Observable} from 'rxjs';
import {DataStateChangeEvent, GridDataResult, SelectableSettings} from '@progress/kendo-angular-grid';
import {State} from '@progress/kendo-data-query';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public columns: any[] = [
    {field: 'id', title: 'TABLE.ID', width: '30%'},
    {field: 'login', title: 'AUTH.USER', width: '20%'},
    {field: 'email', title: 'AUTH.USER', width: '30%'}
  ];
  public view: Observable<GridDataResult>;
  public state: State = {
    skip: 0,
    take: 5,
    sort: []
  };
  public pageSizes = [1, 2, 5, 10, 20, {
    text: 'All',
    value: 'all'
  }];
  public selectableSettings: SelectableSettings = {
    mode: 'single'
  };

  constructor(private service: AppUsersService) {
    this.view = this.service;
  }

  ngOnInit(): void {
    this.service.query(this.state);
    this.allData = this.allData.bind(this);
  }

  //
  public allData = (): Observable<any> => {
    return this.service.queryAll(this.state);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    console.log(state);
    this.state = state;
    this.service.query(state);
  }

}
