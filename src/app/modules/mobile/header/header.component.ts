import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Output() public menuClick = new EventEmitter()
  @Input() public opened = false
  @Input() public loggedIn: boolean | null = false

  constructor() { }

  onMenuClick(): void {
    this.menuClick.emit()
  }

}
