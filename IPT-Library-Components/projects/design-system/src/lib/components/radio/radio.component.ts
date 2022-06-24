import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: 'ipt-radio',
  template: `
    <label class="cont">
      <input
        class="radio"
        [formControl]="formControl"
        [checked]="radioOption"
        (click)="onSelected.emit($event)"
        type="radio">
      <span></span>
    </label>
  `,
  styleUrls: ['./radio.css']
})

export default class RadioComponent {

  @Input() radioOption: boolean = false;
  @Input() set control(value: AbstractControl) {
    if (this.formControl !== value) {
      this.formControl = value as FormControl;
    }
  }

  @Output() onSelected = new EventEmitter<Event>();

  formControl!: FormControl;

}
