import { Topping } from '@app/products/models/topping.model';
import { ToppingsAction, VISUALISE_TOPPINGS } from '@app/products/store/actions/toppings.action';
import { LOAD_TOPPINGS, LOAD_TOPPINGS_FAIL, LOAD_TOPPINGS_SUCCESS } from '@app/products/store/actions/toppings.action';

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
  selectedToppings: number[];
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: [],
};


export function reducer(
  state = initialState,
  action: ToppingsAction
): ToppingsState {
  switch (action.type) {
    case VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;

      return {
        ...state,
        selectedToppings,
      };
    }

    case LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;

      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }

    case LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
  }

  return state;
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
