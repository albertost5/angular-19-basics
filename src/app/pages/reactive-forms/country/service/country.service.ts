import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, Observable, of} from 'rxjs';
import {Country} from '@interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private _regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private basePath = 'https://restcountries.com/v3.1';
  private http = inject(HttpClient);

  get regions() {
    return [...this._regions];
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    if (!region) return of([]);
    return this.http.get<Country[]>(`${this.basePath}/region/${region}?fields=cca3,name,borders`);
  }

  getCountryByAlphaCode(alphaCode: string): Observable<Country> {
    if (!alphaCode) return of({} as Country);
    return this.http.get<Country>(`${this.basePath}/alpha/${alphaCode}?fields=cca3,name,borders`);
  }

  getBorderCountryName(borders: string[]): Observable<Country[]> {
    if (!borders) return of([]);
    const requests: Observable<Country>[] = [];
    borders.forEach(alphaCode => {
      const reqCountry = this.getCountryByAlphaCode(alphaCode);
      requests.push(reqCountry);
    })

    return combineLatest(requests);
  }
}
