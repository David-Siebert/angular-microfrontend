import { Component, OnInit } from '@angular/core';
import { MICRO_UI_ROUTES } from '../app-routing.module';
import { MicroUIModel } from '../micro-ui.model';

@Component({
  template: `
    <div *ngFor='let microUiRoute of microUiRoutes'>
        <p>{{microUiRoute | json }}</p>
    </div>    
  `,
  styles: [
  ]
})
export class ConfigComponent implements OnInit {

  microUiRoutes: MicroUIModel[] = MICRO_UI_ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
