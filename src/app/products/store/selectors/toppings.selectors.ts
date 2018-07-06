import { getProductsState, ProductsState } from '../reducers/index';
import { createSelector } from '@ngrx/store';
import * as fromToppings from '@app/products/store/reducers/toppings.reducer';

export const getToppingsState = createSelector(
  getProductsState,
  (state: ProductsState) => state.toppings,
);

export const getToppingsEntities = createSelector(getToppingsState, fromToppings.getToppingEntities);

export const getAllToppings = createSelector(
  getToppingsEntities,
  (entities) => (Object.keys(entities).map(id => entities[parseInt(id, 10)])),
);

export const getPizzasLoaded = createSelector(getToppingsState, fromToppings.getToppingsLoaded);
export const getPizzasLoading = createSelector(getToppingsState, fromToppings.getToppingsLoading);
//
// export const getSelectedPizza = createSelector(
//   getPizzasEntities,
//   getRouterState,
//   (entities, router): Pizza => {
//     console.log(entities, router);
//     return router.state && entities[router.state.params.pizzaId];
//   }
// );
//

