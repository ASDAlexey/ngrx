import {
  CREATE_PIZZA, CREATE_PIZZA_FAIL, CREATE_PIZZA_SUCCESS,
  CreatePizza, CreatePizzaFail, CreatePizzaSuccess,
  LOAD_PIZZAS,
  LOAD_PIZZAS_FAIL,
  LOAD_PIZZAS_SUCCESS,
  LoadPizzas,
  LoadPizzasFail,
  LoadPizzasSuccess,
  REMOVE_PIZZA, REMOVE_PIZZA_FAIL, REMOVE_PIZZA_SUCCESS, RemovePizza,
  RemovePizzaFail,
  RemovePizzaSuccess, UPDATE_PIZZA, UPDATE_PIZZA_FAIL, UPDATE_PIZZA_SUCCESS, UpdatePizza, UpdatePizzaFail, UpdatePizzaSuccess
} from '@app/products/store';

describe('Pizzas Action', () => {
  describe('LoadPizzas Actions', () => {
    describe('LoadPizzas', () => {
      it('should create an action', () => {
        const action = new LoadPizzas();
        expect({ ...action }).toEqual({ type: LOAD_PIZZAS });
      });
    });

    describe('LoadPizzasFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new LoadPizzasFail(payload);
        expect({ ...action }).toEqual({ type: LOAD_PIZZAS_FAIL, payload });
      });
    });

    describe('LoadPizzasSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            'name': 'Blazin\' Inferno',
            'toppings': [
              {
                'id': 10,
                'name': 'pepperoni'
              },
              {
                'id': 9,
                'name': 'pepper'
              },
              {
                'id': 3,
                'name': 'basil'
              },
              {
                'id': 4,
                'name': 'chili'
              },
              {
                'id': 7,
                'name': 'olive'
              },
              {
                'id': 2,
                'name': 'bacon'
              },
              {
                'id': 1,
                'name': 'anchovy'
              }
            ],
            'id': 1
          },
          {
            'name': 'Seaside Surfin\'',
            'toppings': [
              {
                'id': 6,
                'name': 'mushroom'
              },
              {
                'id': 7,
                'name': 'olive'
              },
              {
                'id': 2,
                'name': 'bacon'
              },
              {
                'id': 3,
                'name': 'basil'
              },
              {
                'id': 1,
                'name': 'anchovy'
              },
              {
                'id': 8,
                'name': 'onion'
              },
              {
                'id': 11,
                'name': 'sweetcorn'
              },
              {
                'id': 9,
                'name': 'pepper'
              },
              {
                'id': 5,
                'name': 'mozzarella'
              },
              {
                'id': 10,
                'name': 'pepperoni'
              },
              {
                'id': 12,
                'name': 'tomato'
              }
            ],
            'id': 2
          },
          {
            'name': 'Plain Ol\' Pepperoni',
            'toppings': [
              {
                'id': 10,
                'name': 'pepperoni'
              }
            ],
            'id': 3
          }
        ];

        const action = new LoadPizzasSuccess(payload);
        expect({ ...action }).toEqual({ type: LOAD_PIZZAS_SUCCESS, payload });
      });
    });
  });

  describe('CreatePizza Actions', () => {
    describe('CreatePizza', () => {
      it('should create an action', () => {
        const payload = {
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new CreatePizza(payload);

        expect({ ...action }).toEqual({
          type: CREATE_PIZZA,
          payload,
        });
      });
    });

    describe('CreatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Create Error' };
        const action = new CreatePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: CREATE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('CreatePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new CreatePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: CREATE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('UpdatePizza Actions', () => {
    describe('UpdatePizza', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new UpdatePizza(payload);

        expect({ ...action }).toEqual({
          type: UPDATE_PIZZA,
          payload,
        });
      });
    });

    describe('UpdatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Update Error' };
        const action = new UpdatePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: UPDATE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('UpdatePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new UpdatePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: UPDATE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('RemovePizza Actions', () => {
    describe('RemovePizza', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new RemovePizza(payload);

        expect({ ...action }).toEqual({
          type: REMOVE_PIZZA,
          payload,
        });
      });
    });

    describe('RemovePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Remove Error' };
        const action = new RemovePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: REMOVE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('RemovePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new RemovePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: REMOVE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });
});
