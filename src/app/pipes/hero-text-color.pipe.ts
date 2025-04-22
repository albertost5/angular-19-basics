import {Pipe, PipeTransform} from '@angular/core';
import {Color, ColorMap} from '../interfaces/hero.interface';

@Pipe({
  standalone: true,
  name: 'heroTextColor'
})
export class HeroTextColorPipe implements PipeTransform {

  transform(value: Color): string {
    return ColorMap[value];
  }

}
