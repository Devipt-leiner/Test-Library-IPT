import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'ipt-input',
  template: `
    <div class="input-container">
      <input *ngIf="inputType === 'date'"
        class="input"
        type="{{ inputType ? 'text' : 'date' }}"
        [formControl]="formControl"
        onfocus="this.type='date';"
        onblur="javascript: if( !this.value ) this.type='text';"
        uib-datepicker-popup="dd/MM/yyyy"
        ng-model="inputType"/>

      <input *ngIf="inputType !== 'date' && inputType !== 'time'"
        class="input"
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
