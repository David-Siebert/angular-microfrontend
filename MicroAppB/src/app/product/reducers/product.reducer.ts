import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';

export const productFeatureKey = 'product';

export interface State {
  selectedParcel: number | undefined;
}

export const initialState: State = {
  selectedParcel: undefined,
};


export const reducer = createReducer(
  initialState,

  on(ProductActions.loadProducts, state => state),
  on(ProductActions.loadProductsSuccess, (state, action) => state),
  on(ProductActions.loadProductsFailure, (state, action) => state),

);

