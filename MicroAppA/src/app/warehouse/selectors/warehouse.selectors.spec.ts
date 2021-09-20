import * as fromWarehouse from '../reducers/warehouse.reducer';
import { selectWarehouseState } from './warehouse.selectors';

describe('Warehouse Selectors', () => {
  it('should select the feature state', () => {
    const result = selectWarehouseState({
      [fromWarehouse.warehouseFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
