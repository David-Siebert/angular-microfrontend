import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { StockComponent } from './stock/stock.component';
import { StoreModule } from '@ngrx/store';
import * as fromWarehouse from './reducers/warehouse.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WarehouseEffects } from './effects/warehouse.effects';


@NgModule({
  declarations: [
    StockComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    //StoreModule.forFeature(fromWarehouse.warehouseFeatureKey, fromWarehouse.reducer),
    //EffectsModule.forFeature([WarehouseEffects])
  ]
})
export class WarehouseModule { }
