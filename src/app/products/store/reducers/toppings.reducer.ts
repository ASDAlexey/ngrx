import { Topping } from '@app/products/models/topping.model';
import { ToppingsAction } from '@app/products/store';
import { LOAD_TOPPINGS, LOAD_TOPPINGS_FAIL, LOAD_TOPPINGS_SUCCESS } from '@app/products/store/actions/toppings.action';

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: ToppingsAction): ToppingsState {
  switch (action.type) {
    case LOAD_TOPPINGS: {
      return { ...state, loading: true };
    }
    case LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce((entities: { [id: number]: Topping }, topping: Topping) => {
          return { ...entities, [topping.id]: topping };
        }, { ...state.entities }
      );
      return { ...state, entities, loading: false, loaded: true };
    }
    case LOAD_TOPPINGS_FAIL: {
      return { ...state, loading: false, loaded: true };
    }
  }
  return state;
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
