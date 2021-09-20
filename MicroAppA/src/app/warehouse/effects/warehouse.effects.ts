import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as WarehouseActions from '../actions/warehouse.actions';



@Injectable()
export class WarehouseEffects {

  loadWarehouses$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(WarehouseActions.loadWarehouses),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => WarehouseActions.loadWarehousesSuccess({ data })),
          catchError(error => of(WarehouseActions.loadWarehousesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
