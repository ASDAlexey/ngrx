import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BACK, FORWARD, Go, GO } from '@app/store/actions/router.action';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RouterEffect {
  constructor(private actions$: Actions, private router: Router, private location: Location) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.ofType(GO).pipe(
    map((action: Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.ofType(BACK).pipe(
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.ofType(FORWARD).pipe(
    tap(() => this.location.forward())
  );
}
