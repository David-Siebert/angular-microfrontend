import { Action, createReducer, on } from '@ngrx/store';
import * as WarehouseActions from '../actions/warehouse.actions';

export const warehouseFeatureKey = 'warehouse';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(WarehouseActions.loadWarehouses, state => state),
  on(WarehouseActions.loadWarehousesSuccess, (state, action) => state),
  on(WarehouseActions.loadWarehousesFailure, (state, action) => state),

);

