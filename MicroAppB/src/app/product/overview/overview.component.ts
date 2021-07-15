import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appb-overview',
  template: `
    <div style="border: 3px; border-style: dashed; border-color: blue; height: 300px; width: 300px; padding: 5px;">
      <h2>Micro App B</h2>
      <h3>Module Product</h3>
      <h4>Component Overview</h4>
</div>
  `,
  styles: [
  ]
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
