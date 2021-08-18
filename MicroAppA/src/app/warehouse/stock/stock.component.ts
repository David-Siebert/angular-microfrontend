import { Component } from '@angular/core';

@Component({
  selector: 'appa-stock',
  template: `
    <div class="red-dashed-box">
      <h2>Micro App A</h2>
      <h3>Module Warehouse</h3>
      <h4>Component Stock</h4>
    </div>
  `,
  styles: [`
    :host {
      .red-dashed-box {
        border: 3px;
        border-style: dashed;
        border-color: red;
        height: 300px;
        width: 300px;
        padding: 5px;
      }
    }
  `]
})
export class StockComponent {
}
