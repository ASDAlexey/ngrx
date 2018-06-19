import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DECREMENT, INCREMENT, RESET } from './app.reducer';
import { Component } from '@angular/core';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  template: `
    <button (click)="increment()">Increment</button>
    <div>Current Count: {{ count$ | async }}</div>
    <button (click)="decrement()">Decrement</button>

    <button (click)="reset()">Reset Counter</button>
  `,
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
