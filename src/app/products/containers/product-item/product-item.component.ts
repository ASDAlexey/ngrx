import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';
import { select, Store } from '@ngrx/store';
import { getPizzaVisualised, getSelectedPizza, LoadToppings, ProductsState, VisualizeToppings } from '@app/products/store';
import { Observable } from 'rxjs';
import { getAllToppings } from '@app/products/store/selectors/toppings.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;

  constructor(private store: Store<ProductsState>) {
  }

  ngOnInit() {
    this.pizza$ = this.store.pipe(
      select(getSelectedPizza),
      tap((pizza: Pizza = null) => {
        const pizzaExist = !!(pizza && pizza.toppings);
        const toppings = pizzaExist ? pizza.toppings.map(topping => topping.id) : [];
        this.store.dispatch(new VisualizeToppings(toppings));
      })
    );
    this.toppings$ = this.store.pipe(select(getAllToppings));
    this.visualise$ = this.store.pipe(select(getPizzaVisualised));
  }

  onSelect(event: number[]) {
    this.store.dispatch(new VisualizeToppings(event));
  }

  onCreate(event: Pizza) {

  }

  onUpdate(event: Pizza) {

  }

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {

    }
  }
}
