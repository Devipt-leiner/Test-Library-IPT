import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'ipt-input',
  template: `
    <div class="input-container">
      <input *ngIf="inputType === 'date'"
        placeholder="{{ placeHolder }}"
        class="input"
        type="{{ inputType ? 'text' : 'date' }}"
        [formControl]="formControl"
        onfocus="this.type='date';"
        onblur="javascript: if( !this.value ) this.type='text';"
        uib-datepicker-popup="dd/MM/yyyy"
        ng-model="inputType"/>

      <input *ngIf="inputType !== 'date' && inputType !== 'time'"
        placeholder="{{ placeHolder }}"
        class="input"
        [ngStyle]="{
          'box-shadow':
          formControl.value === ''
          ? 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
          : formControl.valid
          ? '1px 1px 7.5px #1b5e20'
          : '1px 1px 7.5px #b71c1c'
        }"
        class="input"
        type="{{ inputType }}"
        [formControl]="formControl"
        [attr.list]="list"/>

        <input *ngIf="inputType === 'time'"
          class="input"
          type="time"
          [formControl]="formControl"
          [min]="'06:00:00'"
          max="22:00:00"
          step="900"
          autocomplete="on"
          value="08:00:00"
          (click)="click($event)"

          [ngStyle]="{
            'box-shadow':
              formControl.value === ''
                ? 'box-shadow: rgba(100, 100, 111, 0.2);'
                : formControl.valid
                ? '1px 1px 7.5px #1b5e20'
                : '1px 1px 7.5px #b71c1c'
          }"
        />

      <label [ngClass]="{'labelUp': formControl.value !== ''}">{{ placeHolder }}</label>

      <p *ngIf="!formControl.valid && formControl.value !== '' && formControl.touched">
        {{ validateText }}
      </p>
    </div>
    `,
  styleUrls: ['./input.css'],
})
export class InputComponent {

  public codeValue!: string;
  data: any[] = [];
  formControl!: FormControl;
  clicked: boolean = false;

  @Input() inputType!: string;
  @Input() placeHolder!: string;
  @Input() validateText?: string;
  @Input() list?: string; //Para el datalist
  @Input() iconUrl?: string;
  @Input() set control(value: AbstractControl | string) {
    if (this.formControl !== value) {
      this.formControl = value as FormControl;
    }
  }

  click(value: MouseEvent) {
    this.clicked = value.isTrusted;
  }

}
