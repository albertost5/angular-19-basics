import {Pipe, PipeTransform} from '@angular/core';
import {Hero} from '../interfaces/hero.interface';
import {heroes} from '../data/heroes.data';

@Pipe({
  standalone: true,
  name: 'heroSortBy'
})
export class HeroSortByPipe implements PipeTransform {

  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
    switch(sortBy) {
      case 'name':
        return heroes.sort( (a,b) => (a.name.localeCompare(b.name)));
      case 'canFly':
        return heroes.sort( (a,b) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1));
      case 'creator':
        return heroes.sort( (a,b) => (a.creator - b.creator));
      case 'color':
        return heroes.sort( (a,b) => (a.color - b.color));
      default:
        return value
    }
  }
}
