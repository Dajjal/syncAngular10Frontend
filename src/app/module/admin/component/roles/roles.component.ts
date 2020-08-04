import {Component, OnInit} from '@angular/core';
import {AppRolesService} from "../../service/roles/app-roles.service";
import {
  DataStateChangeEvent,
  GridDataResult, SelectableSettings,
} from "@progress/kendo-angular-grid";
import {Observable} from "rxjs";
import {State} from "@progress/kendo-data-query";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [AppRolesService]
})
export class RolesComponent implements OnInit {
  public columns: any[] = [
    {field: 'id', title: 'TABLE.ID', width: '30%'},
    {field: 'name', title: 'TABLE.NAME', width: '70%'}
  ];
  public view: Observable<GridDataResult>;
  public state: State = {
    skip: 0,
    take: 1,
    sort: []
  };
  public pageSizes = [1, 2, 5, 10, 20, {
    text: 'All',
    value: 'all'
  }];
  public selectable_settings: SelectableSettings = {
    mode: 'single'
  };
  //
  public isNew: boolean;
  public editDataItem: any;


  //
  constructor(private service: AppRolesService) {
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
  //
  public dataStateChange(state: DataStateChangeEvent): void {
    console.log(state);
    this.state = state;
    this.service.query(state);
  }
  //
  public addHandler() {
    this.editDataItem = {};
    this.isNew = true;
  }
  //
  public saveHandler(item: any) {
    /*this.grid_selected_rows = [];
    this.update_button_disabled = true;
    this.delete_button_disabled = true;*/
    //
    if (this.isNew) {
      // insert
      console.log('insert');
      /*this.service.insert(item, (result) => {
        this.loadData();
      });*/
    } else {
      // update
      console.log('update');
      /*this.service.update(item, (result) => {
        this.loadData();
      });*/
    }
    this.editDataItem = undefined;
  }

  public cancelHandler() {
    this.editDataItem = undefined;
  }

}
