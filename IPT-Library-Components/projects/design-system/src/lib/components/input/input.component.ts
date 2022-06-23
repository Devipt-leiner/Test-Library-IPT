import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'ipt-input',
  template: `
    <div class="input-container">
      <input *ngIf="inputType === 'date'"
        #myInput
        class="input"
        type="{{ inputType ? 'text' : 'date' }}"
        [formControl]="formControl"
        [ngClass]="classes"
        onfocus="this.type='date';"
        onblur="javascript: if( !this.value ) this.type='text';"
        uib-datepicker-popup="dd/MM/yyyy"
        ng-model="inputType"/>

      <input *ngIf="inputType !== 'date'"
        #myInput
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
        [ngClass]="classes"
        [attr.list]="list"/>

      <label [ngClass]="{'labelUp': formControl.value !== ''}">{{ placeHolder }}</label>

      <p *ngIf="!formControl.valid && formControl.value !== '' && formControl.touched">
        {{ validateText }}
      </p>
    </div>
    `,
  styleUrls: ['./input.css'],
})
export default class InputComponent {

  public codeValue!: string;
  data: any[] = [];
  formControl!: FormControl;

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

}
