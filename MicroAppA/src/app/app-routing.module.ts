import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'stock', pathMatch: 'full' },
  {
    path: 'stock',
    loadChildren: () => import('./warehouse/warehouse.module')
      .then(m => m.WarehouseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
