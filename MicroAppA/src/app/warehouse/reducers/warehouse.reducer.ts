import { Action, createReducer, on } from '@ngrx/store';
import * as WarehouseActions from '../actions/warehouse.actions';
import { Parcel } from '../parcel.model';

export const warehouseFeatureKey = 'warehouse';

export interface State {
  parcels: Parcel[],
}

export const initialState: State = {
  parcels: [
    { id: 1, name: 'Car Parts', description: '', size: 'XXL' },
    { id: 2, name: 'Smartphone', description: '', size: 'S' },
    { id: 3, name: 'Clothes', description: '', size: 'M' },
    { id: 4, name: 'Bicycle', description: '', size: 'XL' },
    { id: 5, name: 'Plants', description: '', size: 'XL' }
  ],
};


export const reducer = createReducer(
  initialState,

  on(WarehouseActions.loadWarehouses, state => state),
  on(WarehouseActions.loadWarehousesSuccess, (state, action) => state),
  on(WarehouseActions.loadWarehousesFailure, (state, action) => state),

);

