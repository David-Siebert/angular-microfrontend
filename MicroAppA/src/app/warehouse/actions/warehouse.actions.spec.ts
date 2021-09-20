import * as fromWarehouse from './warehouse.actions';

describe('loadWarehouses', () => {
  it('should return an action', () => {
    expect(fromWarehouse.loadWarehouses().type).toBe('[Warehouse] Load Warehouses');
  });
});
