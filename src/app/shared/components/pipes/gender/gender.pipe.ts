import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../../../enums/gender.interface';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case Gender.ANY:
        return 'Indistinto'
      case Gender.F:
        return 'Femenino'
      case Gender.M:
        return 'Masculino'
      default:
        return 'Indistinto'
    }
  }

}
