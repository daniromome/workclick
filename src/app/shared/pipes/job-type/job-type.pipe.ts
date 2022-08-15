import { Pipe, PipeTransform } from '@angular/core';
import { JobType } from '../../enums/job-type.interface';

@Pipe({
  name: 'jobType'
})
export class JobTypePipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case JobType.FULLTIME:
        return 'Tiempo completo'
      case JobType.PARTTIME:
        return 'Medio tiempo'
      case JobType.INTERNSHIP:
        return 'Becario'
      default:
        return 'Tiempo completo'
    }
  }

}
