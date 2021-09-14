import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appc-list',
  template: `
    <div class="colored-dashed-box">
      <h2>Micro App C</h2>
      <h3>Module Customer</h3>
      <h4>Component List</h4>
    </div>
  `,
  styles: [`
    :host {
      .colored-dashed-box {
        border: 3px;
        border-style: dashed;
        border-color: greenyellow;
        height: 300px;
        width: 300px;
        padding: 5px;
      }
    }
  `]
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
