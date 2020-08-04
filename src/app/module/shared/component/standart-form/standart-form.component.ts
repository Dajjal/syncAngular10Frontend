import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {
  DataStateChangeEvent, GridComponent, GridDataResult, RowArgs,
  SelectableSettings
} from '@progress/kendo-angular-grid';
import {DataSourceRequestState} from '@progress/kendo-data-query';
import {NorthwindService} from '../../../../services/base.service';
import {AppTranslationService} from '../../../../services/app-translation.service';
import {LangChangeEvent} from '@ngx-translate/core';
import {isNullOrEmptyString} from '@progress/kendo-data-query/dist/npm/utils';

@Component({
  template: '<div></div>',
  encapsulation: ViewEncapsulation.None
})
export class StandartFormComponent implements OnInit {

  public view: Observable<GridDataResult>;

  public update_button_disabled = true;
  public delete_button_disabled = true;

  public editDataItem: any;
  public isNew: boolean;

  public grid_colums = {
    // name
    name_kz: {hidden: true},
    name_qz: {hidden: true},
    name_ru: {hidden: true},
    name_en: {hidden: true},
    // code
    code: {hidden: false}
  };

  public selectable_settings: SelectableSettings = {
    mode: 'single'
  };

  public grid_selected_rows = [];

  public state: DataSourceRequestState = {
    skip: 0,
    take: 20,
    sort: [
      {field: 'name_ru', dir: 'asc'}
    ]
  };

  @ViewChild(GridComponent) grid: GridComponent;

  constructor(public service: NorthwindService,
              public lang_service: AppTranslationService) {

    this.lang_service.getService().onLangChange.subscribe((event: LangChangeEvent) => {
      this.grid_selected_rows = [];
      //
      this.grid_colums.name_kz.hidden = true;
      this.grid_colums.name_qz.hidden = true;
      this.grid_colums.name_ru.hidden = true;
      this.grid_colums.name_en.hidden = true;
      //
      this.grid_colums[`name_${event.lang}`].hidden = false;
      const obj = this.state.sort.find(q => q.field.indexOf('name_') !== -1);
      obj['field'] = `name_${event.lang}`;
      //
      this.loadData();
    });
  }

  ngOnInit() {
    this.grid_colums[`name_${this.lang_service.getDefaultLanguage()}`].hidden = false;
    this.state.sort[0].field = `name_${this.lang_service.getDefaultLanguage()}`;
    //
    this.view = this.service;
    this.loadData();
    this.allData = this.allData.bind(this);
  }

  public loadData(): void {
    this.service.query(this.state);
  }

  public allData = (): Observable<any> => {
    return this.service.queryAll(this.state);
  };

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.loadData();
  }

  public row_selection(context: RowArgs): any {
    return context.dataItem;
  }

  public grid_row_selected(e) {
    if (e.length > 0) {
      this.update_button_disabled = false;
      this.delete_button_disabled = false;
    } else {
      this.update_button_disabled = true;
      this.delete_button_disabled = true;
    }
  }

  public addHandler() {
    this.editDataItem = {};
    this.isNew = true;
  }

  public editHandler() {
    this.editDataItem = this.grid_selected_rows[0];
    this.isNew = false;
  }

  public deleteHandler() {
    this.service.delete(this.grid_selected_rows[0]['id'], (result) => {
      this.grid_selected_rows = [];
      this.update_button_disabled = true;
      this.delete_button_disabled = true;
      this.loadData();
    });
  }

  public saveHandler(item: any) {
    this.grid_selected_rows = [];
    this.update_button_disabled = true;
    this.delete_button_disabled = true;
    //
    if (this.isNew) {
      // insert
      item.id = 0;
      this.service.insert(item, (result) => {
        this.loadData();
      });
    } else {
      // update
      this.service.update(item, (result) => {
        this.loadData();
      });
    }
    this.editDataItem = undefined;
  }

  public cancelHandler() {
    this.editDataItem = undefined;
  }

}
