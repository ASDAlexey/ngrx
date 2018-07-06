import { getProductsState, ProductsState } from '../reducers/index';
import * as fromPizzas from '../reducers/pizzas.reducer';
import { createSelector } from '@ngrx/store';
import { getRouterState } from '@app/store';
import { Pizza } from '@app/products/models/pizza.model';
import { getSelectedTopping, getToppingsEntities } from '@app/products/store/selectors/toppings.selectors';

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
);

// export const getPizzaVisualised = createSelector(
//   getSelectedPizza,
//   getToppingsEntities,
//   getSelectedTopping,
//   (pizza, toppingEntities, selectedToppings) => {
//     const toppings = selectedToppings.map(id => toppingEntities[id]);
//     return { ...pizza, toppings };
//   }
// );

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities) => (Object.keys(entities).map(id => entities[parseInt(id, 10)])),
);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
