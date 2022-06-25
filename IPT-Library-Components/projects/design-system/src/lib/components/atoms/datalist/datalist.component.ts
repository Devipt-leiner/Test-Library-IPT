import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'ipt-datalist',
  template: `
    <div class="input-container">
      <label [ngClass]="labelClass">{{ placeHolder }}</label>
      <input
        type="text"
        class="input"
        (click)="click($event)"
        [attr.list]="datalistId"
        (change)="optionChanged($event)"
      />

      <datalist id="{{ datalistId }}">
        <option *ngFor="let item of datalistData; index as i" [value]="item.name">
          {{item.name}} {{item.last_name}}
        </option>
      </datalist>
    </div>
  `,
  styleUrls: ['./datalist.css'],
})
export class DatalistComponent {

  @Input() datalistId!: string;
  @Input() datalistData!: any[];
  @Input() placeHolder!: string;
  @Input() validateText!: string;
  @Input() initalData!: string;

  @Output() isChanged = new EventEmitter<string>();

  formControl!: FormGroup;
  clicked: boolean = false;

  constructor(fb: FormBuilder) {
    this.formControl = fb.group({
      dataListControl: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    if(this.initalData != null) {
      this.formControl.controls['dataListControl'].setValue(this.initalData);
    }
  }

  optionChanged(event: any) {
    let selectOption = this.datalistData.find(element =>  element.name == event.target.value);

    if (typeof(selectOption) != 'undefined') {
      this.isChanged.emit(selectOption.code);
    } else {
      this.isChanged.emit('-1');
      this.formControl.controls['dataListControl'].setValue(null);
    }
  }

  click(value: MouseEvent) {
    this.clicked = value.isTrusted;
  }

  public get labelClass(): string {
    return this.clicked === false ? 'label' : 'labelUp';
  }
}
