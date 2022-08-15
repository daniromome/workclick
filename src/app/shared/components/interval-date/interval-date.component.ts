import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IntervalDate } from 'src/app/models/user.model';
import { FormFrom } from '../../utils/form-from.type';

@Component({
  selector: 'wo-interval-date',
  templateUrl: './interval-date.component.html',
  styleUrls: ['./interval-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntervalDateComponent {

  @Input() form?: FormGroup<FormFrom<IntervalDate>>
  @Input() label?: string

  constructor() { }

  onlyNumbers(event: KeyboardEvent): void {
    switch (event.key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "Enter":
      case "Tab":
      case "Backspace":
        break

      default:
        event.preventDefault()
        break
    }
  }

}
