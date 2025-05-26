import {Component, effect, inject, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {Country} from '@interfaces/country.interface';
import {CountryService} from '../service/country.service';
import {filter, switchMap, tap} from 'rxjs';


@Component({
  selector: 'app-country-page',
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './country-page.component.html',
  standalone: true,
  styles: ``
})
export class CountryPageComponent {
  private fb = inject(FormBuilder);
  private countryService = inject(CountryService);

  myForm = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    border: ['', [Validators.required]],
  });

  regions = signal<string[]>(this.countryService.regions);
  countriesByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  onFormChanged = effect((onCleanup) => {
    const regionChangedSubscription = this.onRegionChanged();
    const countryChangedSubscription = this.onCountryChanged();

    onCleanup(() => {
      regionChangedSubscription.unsubscribe();
      countryChangedSubscription.unsubscribe();
    })
  });

  onRegionChanged() {
    return this.myForm.controls.region.valueChanges
      .pipe(
        tap((val) => {
          this.borders.set([]);
          this.countriesByRegion.set([]);
          this.myForm.controls.country.reset("");
          this.myForm.controls.border.reset("");
        }),
        filter(region => region !== null),
        switchMap((region) => this.countryService.getCountriesByRegion(region!))
      )
      .subscribe((countries) => {
        this.countriesByRegion.set(countries);
    })
  }

  onCountryChanged() {
    return this.myForm.controls.country.valueChanges
      .pipe(
        tap((val) => {
          this.borders.set([]);
          this.myForm.controls.border.reset("");
          console.log('countrychanged => ', val)
        }),
        filter(country => country !== null),
        switchMap((country) => this.countryService.getCountryByAlphaCode(country!)),
        switchMap((country) => this.countryService.getBorderCountryName(country.borders))
      ).subscribe( countryBorders => {
        console.log('borders => ', countryBorders)
        this.borders.set(countryBorders)
      });
  }
}
