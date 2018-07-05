import { getProductsState, ProductsState } from '../reducers/index';
import * as fromPizzas from '../reducers/pizzas.reducer';
import { createSelector } from '@ngrx/store';
import { getRouterState } from '@app/store';
import { Pizza } from '@app/products/models/pizza.model';

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  getRouterState,
  (entities, router): Pizza => {
    console.log(entities, router);
    return router.state && entities[router.state.params.pizzaId];
  }
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities) => (Object.keys(entities).map(id => entities[parseInt(id, 10)])),
);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
