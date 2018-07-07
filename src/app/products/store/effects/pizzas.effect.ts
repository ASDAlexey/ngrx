import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as pizzaActions from '../actions/pizzas.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromServices from '../../services';
import { of } from 'rxjs/internal/observable/of';
import {
  CreatePizza,
  CreatePizzaFail,
  CreatePizzaSuccess, RemovePizza, RemovePizzaFail, RemovePizzaSuccess,
  UpdatePizza, UpdatePizzaFail,
  UpdatePizzaSuccess
} from '@app/products/store/actions/pizzas.action';
import { Pizza } from '@app/products/models/pizza.model';
import { Go } from '@app/store/actions/router.action';

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

  @Effect()
  createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA).pipe(
    map((action: CreatePizza) => action.payload),
    switchMap((pizzaData) => {
      return this.pizzaService.createPizza(pizzaData).pipe(
        map(pizza => new CreatePizzaSuccess(pizza)),
        catchError(error => of(new CreatePizzaFail(error))),
      );
    })
  );

  @Effect()
  createPizzaSuccess$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA_SUCCESS).pipe(
    map((action: CreatePizzaSuccess) => new Go({ path: ['/products', action.payload.id] })),
  );

  @Effect()
  updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA).pipe(
    map((action: UpdatePizza) => action.payload),
    switchMap((pizzaData) => {
      return this.pizzaService.updatePizza(pizzaData).pipe(
        map(pizza => new UpdatePizzaSuccess(pizza)),
        catchError(error => of(new UpdatePizzaFail(error))),
      );
    })
  );

  @Effect()
  removePizza$ = this.actions$.ofType(pizzaActions.REMOVE_PIZZA).pipe(
    map((action: RemovePizza) => action.payload),
    switchMap((pizza) => {
      return this.pizzaService.removePizza(pizza).pipe(
        map(() => new RemovePizzaSuccess(pizza)),
        catchError(error => of(new RemovePizzaFail(error))),
      );
    })
  );

  @Effect()
  handlePizzaSuccess$ = this.actions$.ofType(
    pizzaActions.UPDATE_PIZZA_SUCCESS,
    pizzaActions.REMOVE_PIZZA_SUCCESS,
  ).pipe(
    map((pizza: Pizza) => new Go({ path: ['/products'] }))
  );
}
