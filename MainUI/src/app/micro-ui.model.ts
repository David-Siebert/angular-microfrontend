import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export interface MicroUIModel extends LoadRemoteModuleOptions {
    readonly routePath: string;
    readonly ngModuleName: string;
    readonly displayName: string;
}
