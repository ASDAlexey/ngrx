import { PizzasGuard } from '@app/products/guards/pizzas.guard';
import { PizzaExistGuard } from '@app/products/guards/pizza-exist.guard';

export const guards: any[] = [PizzasGuard, PizzaExistGuard];
