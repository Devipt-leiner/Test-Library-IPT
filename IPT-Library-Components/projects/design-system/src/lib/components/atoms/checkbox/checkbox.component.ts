import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: 'ipt-checkbox',
  template: `
    <label class="cont">
      <input
        class="checkbox"
        [formControl]="formControl"
        [checked]="checkboxOption"
        (click)="onChecked.emit($event)"
        type="checkbox">
      <span></span>
    </label>
  `,
  styleUrls: ['./checkbox.css']
})

export class CheckboxComponent {

  @Input() checkboxOption: boolean = false;
  @Input() set control(value: AbstractControl) {
    if (this.formControl !== value) {
      this.formControl = value as FormControl;
    }
  }

  @Output() onChecked = new EventEmitter<Event>();

  formControl!: FormControl;

}
