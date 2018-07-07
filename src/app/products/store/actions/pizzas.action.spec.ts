import { LOAD_PIZZAS, LOAD_PIZZAS_FAIL, LOAD_PIZZAS_SUCCESS, LoadPizzas, LoadPizzasFail, LoadPizzasSuccess } from '@app/products/store';

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
});
