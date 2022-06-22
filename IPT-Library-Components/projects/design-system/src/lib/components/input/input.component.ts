import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ipt-input',
  template: `
    <div class="input-container">
      <input *ngIf="inputType === 'date'"
        type="{{ inputType ? 'text' : 'date' }}"
        placeholder="{{ placeHolder }}"
        [formControl]="formControl"
        [ngClass]="classes"
        onfocus="this.type='date';"
        onblur="javascript: if( !this.value ) this.type='text';"
        uib-datepicker-popup="dd/MM/yyyy"
        ng-model="inputType"/>

      <input *ngIf="inputType !== 'date'"
        [ngStyle]="{
          'box-shadow':
          formControl.value === ''
          ? 'box-shadow: rgba(100, 100, 111, 0.2);'
          : formControl.valid
          ? '1px 1px 7.5px #1b5e20'
          : '1px 1px 7.5px #b71c1c'
        }"
        class="input"
        type="{{ inputType }}"
        placeholder="{{ placeHolder }}"
        [formControl]="formControl"
        [attr.list]="list"/>

      <p *ngIf="!formControl.valid && formControl.value !== ''">
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
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() validateText?: string;
  @Input() list?: string; //Para el datalist
  @Input() iconUrl?: string;
  @Input() set control(value: AbstractControl) {
    if (this.formControl !== value) {
      this.formControl = value as FormControl;
    }
  }

  public get classes(): string {
    return this.size === 'small'
    ? 'ipt-input--small'
    : 'ipt-input--large'
  }

}
