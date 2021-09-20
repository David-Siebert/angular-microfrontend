import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWarehouse from '../reducers/warehouse.reducer';

export const selectWarehouseState = createFeatureSelector<fromWarehouse.State>(
  fromWarehouse.warehouseFeatureKey
);
