import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getPizzasLoaded, LoadPizzas, ProductsState } from '@app/products/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { UpdatePizzaFail } from '@app/products/store/actions/pizzas.action';

@Injectable()
export class PizzasGuard implements CanActivate {
  constructor(private store: Store<ProductsState>) {

  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(
      select(getPizzasLoaded),
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(new LoadPizzas());
        }
      }),
      filter(loaded => loaded),
      take(1),
    );
  }
}
