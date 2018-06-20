import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { effects, reducers } from './store';
// components
import * as fromComponents from './components';
// containers
import * as fromContainers from './containers';
// services
import * as fromServices from './services';
import { StoreModule } from '@ngrx/store';
import { BaseUrlInterceptor } from '../interceptors/base-url.interceptor';
import { EffectsModule } from '@ngrx/effects';

// routes
export const ROUTES: Routes = [
  { path: '', component: fromContainers.ProductsComponent },
  { path: ':id', component: fromContainers.ProductItemComponent },
  { path: 'new', component: fromContainers.ProductItemComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
    // SharedModule,
  ],
  providers: [...fromServices.services, { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule {
}
