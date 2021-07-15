import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'warehouse',
    loadChildren: () => 
      loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'microAppA',
        exposedModule: './Module'
      })
      .then(m => m.WarehouseModule)
  },
  {
    path: 'product',
    loadChildren: () => 
      loadRemoteModule({
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        remoteName: 'microAppB',
        exposedModule: './Module'
      })
      .then(m => m.ProductModule)
  },
  {
    path: 'customer',
    loadChildren: () => 
      loadRemoteModule({
        remoteEntry: 'http://localhost:3003/remoteEntry.js',
        remoteName: 'microAppC',
        exposedModule: './Module'
      })
      .then(m => m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
