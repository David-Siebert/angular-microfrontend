import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appa-stock',
  template: `
    <div style="border: 3px; border-style: dashed; border-color: red; height: 300px; width: 300px; padding: 5px;">
      <h2>Micro App A</h2>
      <h3>Module Warehouse</h3>
      <h4>Component Stock</h4>
    </div>
  `,
  styles: [
  ]
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
