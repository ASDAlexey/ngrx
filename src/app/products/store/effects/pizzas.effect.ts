import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as pizzaActions from '../actions/pizzas.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromServices from '../../services';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class PizzasEffect {
  constructor(private actions$: Actions, private pizzaService: fromServices.PizzasService) {
  }

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map(pizza => new pizzaActions.LoadPizzasSuccess(pizza)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error))),
      );
    })
  );
}
