import { createAction, props } from '@ngrx/store';

export const loadWarehouses = createAction(
  '[Warehouse] Load Warehouses'
);

export const loadWarehousesSuccess = createAction(
  '[Warehouse] Load Warehouses Success',
  props<{ data: any }>()
);

export const loadWarehousesFailure = createAction(
  '[Warehouse] Load Warehouses Failure',
  props<{ error: any }>()
);
