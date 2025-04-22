import {Component, signal} from '@angular/core';
import {ToggleCasePipe} from '../../pipes/toggle-case.pipe';
import {heroes} from '../../data/heroes.data';
import {CanFlyPipe} from '../../pipes/can-fly.pipe';
import {HeroColorPipe} from '../../pipes/hero-color.pipe';
import {HeroTextColorPipe} from '../../pipes/hero-text-color.pipe';
import {HeroCreatorPipe} from '../../pipes/hero-creator.pipe';
import {TitleCasePipe} from '@angular/common';
import {HeroSortByPipe} from '../../pipes/hero-sort-by.pipe';
import {Hero} from '../../interfaces/hero.interface';

@Component({
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    HeroCreatorPipe,
    TitleCasePipe,
    HeroSortByPipe,
  ],
  templateUrl: './custom-pipes.component.html',
  standalone: true,
  styles: ``
})
export class CustomPipesComponent {
  fullName = signal<string>('John Doe')
  upperCase = signal(true);
  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal<string>('');

  toggleCase() {
    this.upperCase.update(current => !current);
  }
}
