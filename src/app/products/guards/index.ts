import { PizzasGuard } from '@app/products/guards/pizzas.guard';
import { PizzaExistGuard } from '@app/products/guards/pizza-exist.guard';
import { ToppingsGuard } from '@app/products/guards/toppings.guard';

export const guards: any[] = [PizzasGuard, PizzaExistGuard, ToppingsGuard];
