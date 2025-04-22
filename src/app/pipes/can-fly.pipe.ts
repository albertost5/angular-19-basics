import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): string {
    return value  ? 'Can fly' : `Can't fly`;
  }

}
