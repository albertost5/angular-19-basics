import {Component, signal} from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe, I18nPluralPipe, I18nSelectPipe,
  LowerCasePipe,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';

const client1 = {
  name: 'John Doe',
  gender: 'male',
}

const client2 = {
  name: 'Gemini',
  gender: 'female',
}

@Component({
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DecimalPipe,
    CurrencyPipe,
    PercentPipe,
    DatePipe,
    I18nSelectPipe,
    I18nPluralPipe
  ],
  templateUrl: './pipes.component.html',
  standalone: true,
  styles: ``
})
export class PipesComponent {
  nameLower = signal('john doe');
  nameUpper = signal('JOHN DOE');
  fullName = signal('JoHn DoE');

  numberA = signal(2_433_232.5567);
  numberB = signal(0.4856);

  customDate = signal(new Date());

  client = signal(client1);
  invitationMap = {
    male: 'Sir',
    female: 'Dear',
  }

  toggleClient() {
    if( this.client().name === client1.name ) {
      this.client.set(client2);
      return
    }
    this.client.set(client1);
  }

  clients = signal(['María', 'Marta', 'Pedro', 'Eduardo', 'Juan']);
  clientsMap = signal({
    '=0': 'There are not clients waiting',
    '=1': 'There is one client waiting',
    '=2': 'There is 2 clients waiting',
    other: 'There are # clients waiting'
  });
  deleteClient() {
    this.clients.update(current => current.slice(1));
  }
}
