import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export interface MicroUIModel extends LoadRemoteModuleOptions {
    routePath: string,
    ngModuleName: string,
    displayName: string,
}