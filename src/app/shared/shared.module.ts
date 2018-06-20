import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }]
})
export class SharedModule {
}
