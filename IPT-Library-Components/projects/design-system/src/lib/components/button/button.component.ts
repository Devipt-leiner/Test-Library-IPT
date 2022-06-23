import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ipt-button',
  template: `<button *ngIf="isEnabled"
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >
    {{ label }}
  </button>

  <button *ngIf="!isEnabled"
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {

  @Input() primary: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label: string = 'Button';
  @Input() isEnabled: boolean = true;

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary && this.isEnabled === true
      ? 'ipt-button--primary'
      : this.isEnabled === false ? 'ipt-button--primary-disabled'
      : 'ipt-button--secondary';

    return ['ipt-button', `ipt-button--${this.size}`, mode];
  }
}
