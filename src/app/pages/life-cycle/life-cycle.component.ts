import {
  AfterContentChecked,
  AfterContentInit,
  afterNextRender,
  afterRender,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  effect,
  OnChanges,
  OnDestroy,
  OnInit,
  signal
} from '@angular/core';
import {TitleComponent} from '@components/title/title.component';


const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')} `,
    'color: #bada55'
  );
};

@Component({
  selector: 'app-life-cycle',
  imports: [
    TitleComponent
  ],
  standalone: true,
  templateUrl: './life-cycle.component.html',
  styles: ``
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  name = 'Hello World!';
  nameSignal = signal('Hello World!');

  constructor() {
    log('Constructor => ', LifeCycleComponent.name);
  }

  changeName() {
    this.name = 'John Doe';
  }

  changeNameSignal() {
    this.nameSignal.set('John Doe');
  }

  basicEffect = effect((onCleanup) => {
    log('effect', 'Trigger side effects.');
    onCleanup(() => {
      log('onCleanup', 'Once the effect is destroyed.');
    });
  });

  ngOnInit() {
    log('OnInit => ', `Runs once after Angular has initialized all the component\'s inputs.`);
  }
  ngOnChanges() {
    log('OnChanges => ', `Runs every time the component's inputs have changed.`);
  }
  ngDoCheck() {
    log('DoCheck => ', 'Runs every time this component is checked for changes.');
  }
  ngAfterContentInit() {
    log('AfterContentInit => ', `Runs once after the component's content has been initialized.`);
  }
  ngAfterContentChecked() {
    log('AfterContentChecked => ', 'Runs every time this component content has been checked for changes.');
  }
  ngAfterViewInit() {
    log('AfterViewInit => ', `Runs once after the component's view has been initialized.`);
  }
  ngAfterViewChecked() {
    log('AfterViewChecked => ', `Runs every time the component's view has been checked for changes.`);
  }
  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender => ', 'Runs once the next time that all components have been rendered to the DOM.');
  });
  afterRender = afterRender(() => {
    log('afterRender => ', 'Runs every time all components have been rendered to the DOM.');
  });
  ngOnDestroy(): void {
    log('OnDestroy => ', ' Runs once before the component is destroyed.');
  }
}
