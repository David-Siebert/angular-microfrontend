import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MicroUIModel } from './micro-ui.model';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'config', component: ConfigComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const MICRO_UI_ROUTES: MicroUIModel[] = [
  {
    remoteEntry: 'http://localhost:3001/remoteEntry.js',
    remoteName: 'microAppA',
    exposedModule: './Module',
    routePath: 'warehouse',
    ngModuleName: 'WarehouseModule',
    displayName: 'Warehouse'
  },
  {
    remoteEntry: 'http://localhost:3002/remoteEntry.js',
    remoteName: 'microAppB',
    exposedModule: './Module',
    routePath: 'products',
    ngModuleName: 'ProductModule',
    displayName: 'Products'
  },
  {
    remoteEntry: 'http://localhost:3003/remoteEntry.js',
    remoteName: 'microAppC',
    exposedModule: './Module',
    routePath: 'customer',
    ngModuleName: 'CustomerModule',
    displayName: 'Customer'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(buildRoutes(APP_ROUTES, MICRO_UI_ROUTES))],
  exports: [RouterModule]
})
export class AppRoutingModule { }

function buildRoutes(appRoutes: Routes, microUiRoutes: MicroUIModel[]): Routes {
  const routes: Routes = microUiRoutes.map(o => ({
    path: o.routePath,
    loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
  }))

  return [...appRoutes, ...routes];
}