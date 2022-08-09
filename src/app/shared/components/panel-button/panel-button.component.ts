import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wo-panel-button',
  templateUrl: './panel-button.component.html',
  styleUrls: ['./panel-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelButtonComponent {

  @Input() public icon?: string
  @Input() public label?: string

  constructor() { }

}
