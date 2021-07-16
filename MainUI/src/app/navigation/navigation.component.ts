import { Component, OnInit } from '@angular/core';
import { MICRO_UI_ROUTES } from '../app-routing.module';
import { MicroUIModel } from '../micro-ui.model';

@Component({
  selector: 'shell-navigation',
  templateUrl: './navigation.component.html',  
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  microUiRoutes: MicroUIModel[] = MICRO_UI_ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
