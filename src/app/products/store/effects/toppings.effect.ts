import { of } from 'rxjs/internal/observable/of';
import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToppingsService } from '@app/products/services/toppings.service';
import { LOAD_TOPPINGS, LoadToppingsFail, LoadToppingsSuccess } from '@app/products/store/actions/toppings.action';

@Injectable()
export class ToppingsEffect {
  constructor(private actions$: Actions, private toppingsService: ToppingsService) {
  }

  @Effect()
  loadToppings$ = this.actions$.ofType(LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingsService.getToppings().pipe(
        map(topping => new LoadToppingsSuccess(topping)),
        catchError(error => of(new LoadToppingsFail(error))),
      );
    })
  );
}
