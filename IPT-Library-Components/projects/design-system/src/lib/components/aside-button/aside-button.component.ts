import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'ipt-aside-button',
  template: `
    <div [ngSwitch]="buttonActive">
      <a *ngSwitchCase="0" class="flex-item-menu__link" (click)="clickAction.emit()">
        <img src="{{ icon }}" alt="icon_url" />
        <p [ngStyle]="{'color': textColor}">{{ text }}</p>
      </a>

      <a *ngSwitchCase="1" class="flex-item-menu__link flex-item-active" (click)="clickAction.emit()">
        <img src="{{ icon }}" alt="icon_url" />
        <p [ngStyle]="{'color': textColor}">{{ text }}</p>
      </a>
    </div>
  `,
  styleUrls: ['./aside-button.css']
})

export default class AsideButtonComponent {
  @Input() icon!: string;
  @Input() text!: string;
  @Input() type!: string;
  @Input() url?: string;
  @Input() textColor!: string
  @Input() buttonActive?: boolean;
  @Output() isClicked = new EventEmitter<boolean>();


  clickAction() {
    this.isClicked.emit(true);
  }

}
