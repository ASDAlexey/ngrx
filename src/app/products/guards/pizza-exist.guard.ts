import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getPizzasEntities, getPizzasLoaded, LoadPizzas, ProductsState } from '@app/products/store';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { Pizza } from '@app/products/models/pizza.model';

@Injectable()
export class PizzaExistGuard implements CanActivate {
  constructor(private store: Store<ProductsState>) {}

  canActivate(router: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(router.params.pizzaId, 10);
        return this.hasPizza(id);
      }),
    );
  }

  hasPizza(id: number): Observable<boolean> {
    return this.store.pipe(select(getPizzasEntities)).pipe(
      map((entities: { [key: number]: Pizza }) => !!entities[id]),
      take(1),
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
