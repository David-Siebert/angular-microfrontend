import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'appb-overview',
  template: `
    <div class="colored-dashed-box">
      <h2>Micro App B</h2>
      <h3>Module Product</h3>
      <h4>Component Overview</h4>
      <p class="test">Demo-Text</p>
      <br>
      <p><strong>SelectedId: </strong>{{ selectedId }}</p>
    </div>
  `,
  styles: [`
    :host {
      .colored-dashed-box {
        border: 3px;
        border-style: dashed;
        border-color: blue;
        height: 300px;
        width: 300px;
        padding: 5px;
      }
    }
  `]
})
export class OverviewComponent implements OnInit {

  selectedId: string | null;

  constructor(private route: ActivatedRoute) {
    this.selectedId = this.route.snapshot.paramMap.get('id') ?? 'none';
  }

  ngOnInit(): void {
    
    window.addEventListener('selectParcel', (event) => {
        this.selectedId = (<any>event).detail.id;
    });
  }

}
