import { Component } from '@angular/core';

@Component({
  selector: 'appa-root',
  template: `    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'MicroAppA';
}
