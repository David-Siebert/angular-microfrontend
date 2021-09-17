import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'shell-remote',
  template: `
   <ng-container #placeHolder></ng-container>
  `,
  styles: [
  ]
})
export class RemoteComponent implements OnInit {

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef | undefined;

  @Input() remoteEntry: string | undefined;
  @Input() remoteName: string | undefined;
  @Input() exposedModule: string | undefined;
  @Input() componentName: string | undefined;

  constructor(private injector: Injector,
    private cfr: ComponentFactoryResolver) {

  }

  async ngOnInit(): Promise<void> {
    const component = await loadRemoteModule({
      remoteEntry: this.remoteEntry,
      remoteName: this.remoteName ?? '',
      exposedModule: this.exposedModule ?? ''
    }).then(m => {
      let c = m[this.componentName ?? ''];
      return c;
    });;

    const factory = this.cfr.resolveComponentFactory(component);
    this.viewContainer?.createComponent(factory, undefined, this.injector);
  }

}
