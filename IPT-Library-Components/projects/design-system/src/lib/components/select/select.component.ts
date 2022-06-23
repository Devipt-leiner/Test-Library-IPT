import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'ipt-select',
  template: `
    <div class="select-container">
      <label [ngClass]="labelClass">{{ defaultText }}</label>
      <select
        [(ngModel)]="binding"
        (ngModelChange)="seleccionar.emit($event)"
        (click)="click($event)"
        [ngClass]="textClass"
        [ngStyle]="{
          'box-shadow':
          boxShadow === 2
          ? '1px 1px 7.5px #b71c1c'
          : (boxShadow === 1 ? '1px 1px 7.5px #1b5e20' : 'box-shadow: rgba(100, 100, 111, 0.2);')
        }">
        <option *ngFor="let item of data; index as i" [value]="item.code">
          {{ item.name }} {{ item.prefix }}
        </option>
      </select>
    </div>
  `,
  styleUrls: ['./select.css'],
})
export default class SelectComponent {

  binding: any;
  boxShadow: number = 0;
  formControl!: FormControl;
  clicked: boolean = false;

  @Input() isRequired!: boolean; // temas de validacion
  // objeto que me trae el listado
  @Input() data!: any[]; // recibe un array de cualquier cosa
  @Input() defaultText!: any;
  @Input() selectCode!:string;
  @Output() eventSelect = new EventEmitter<string>();
  // type viene de otro componente -> indica de que tipo es el arreglo si pregrade, posgrade o modo
  @Input() set control(value: AbstractControl) {
    if (this.formControl !== value) {
      this.formControl = value as FormControl;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( changes['data']){
      this.binding = this.defaultText;
    }
  }

  seleccionar(evt: string){
    if (this.eventSelect.emit(evt) !== this.defaultText) {
      this.boxShadow = 1;
    }
    else {
      this.boxShadow = 2;
    }
  }

  click(value: PointerEvent) {
    this.clicked = value.isTrusted;
  }

  ngOnInit(): void {
    this.binding = this.defaultText;
  }

  public get textClass(): string {
    return this.defaultText === '' ? 'selected' : 'select';
  }

  public get labelClass(): string {
    return this.clicked === false ? 'label' : 'labelUp';
  }

}
