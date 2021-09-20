import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WarehouseEffects } from './warehouse.effects';

describe('WarehouseEffects', () => {
  let actions$: Observable<any>;
  let effects: WarehouseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WarehouseEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(WarehouseEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
