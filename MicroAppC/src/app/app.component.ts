import { Component } from '@angular/core';

@Component({
  selector: 'appc-root',
  template: `    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'MicroAppC';
}
