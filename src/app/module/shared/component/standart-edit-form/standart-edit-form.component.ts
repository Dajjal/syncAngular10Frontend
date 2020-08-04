import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {isNullOrUndefined} from 'util';
import {isNotNullOrEmptyString} from '@progress/kendo-data-query/dist/npm/utils';

@Component({
  selector: 'app-standart-edit-form',
  templateUrl: './standart-edit-form.component.html',
  styleUrls: ['./standart-edit-form.component.scss']
})
export class StandartEditFormComponent {

  public integrated = true;
  public active = false;
  public editForm: FormGroup = new FormGroup({
    'id': new FormControl(''),
    //
    'name': new FormControl('', Validators.required),
    /*'name_kz': new FormControl('', Validators.required),
    'name_qz': new FormControl('', Validators.required),
    'name_ru': new FormControl('', Validators.required),
    'name_en': new FormControl('', Validators.required)*/
  });

  @Input()
  public isNew = false;

  @Input()
  public set model(item: any) {

    console.log('item', item);
    console.log('active', this.active);

    if (!isNullOrUndefined(item)) {

      // добавление
      /*if (this.isNew) {
        this.integrated = false;
      } else { // изменение
        if (isNotNullOrEmptyString(item['code'])) {
          this.integrated = true;
        } else {
          this.integrated = false;
        }
      }*/

      this.editForm.reset(item);
    }
    this.active = item !== undefined;

    console.log('active', this.active);
  }

  @Output()
  public cancel: EventEmitter<any> = new EventEmitter();

  @Output()
  public save: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  public onSave(e): void {
    e.preventDefault();
    this.save.emit(this.editForm.value);
    this.active = false;
  }

  public onCancel(e): void {
    e.preventDefault();
    this.closeForm();
  }

  private closeForm() {
    this.active = false;
    this.cancel.emit();
  }

}
