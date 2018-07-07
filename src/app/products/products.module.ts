import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { effects, reducers } from './store';
// components
import * as fromComponents from './components';
// containers
import * as fromContainers from './containers';
// services
import * as fromServices from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@app/shared/shared.module';

// guards
import { PizzasGuard } from '@app/products/guards/pizzas.guard';

// routes
export const ROUTES: Routes = [
  { path: '', canActivate: [PizzasGuard], component: fromContainers.ProductsComponent },
  { path: 'new', canActivate: [PizzasGuard], component: fromContainers.ProductItemComponent },
  { path: ':pizzaId', component: fromContainers.ProductItemComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
    SharedModule.forRoot(),
  ],
  providers: [...fromServices.services, PizzasGuard],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule {
}
