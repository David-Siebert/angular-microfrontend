import { Component } from '@angular/core';
import { Parcel } from '../parcel.model';
import { selectWarehouseState } from '../selectors/warehouse.selectors';

@Component({
  selector: 'appa-stock',
  template: `
    <div class="colored-dashed-box">
      <h2>Micro App A</h2>
      <h3>Module Warehouse</h3>
      <h4>Component Stock</h4>
      <p class="test">Demo-Text</p>
      <table>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Name</th>
            <th>Size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let parcel of parcels">
              <th>{{ parcel.id }}</th>
              <td>{{ parcel.name }}</td>
              <td>{{ parcel.size }}</td>              
              <td><a href="http://localhost:3002/detail/{{parcel.id}}" target="microAppB">iFrame</a></td>
              <td><button (click)="select(parcel)">windowEvent</button></td>
          </tr>
        </tbody>        
      </table>
    </div>
  `,
  styles: [`
    :host {
      .colored-dashed-box {
        border: 3px;
        border-style: dashed;
        border-color: red;        
        width: 300px;
        padding: 5px;
      }
    }
  `]
})
export class StockComponent {
  parcels: Parcel[] = [
    { id: 1, name: 'Car Parts', description: '', size: 'XXL' },
    { id: 2, name: 'Smartphone', description: '', size: 'S' },
    { id: 3, name: 'Clothes', description: '', size: 'M' },
    { id: 4, name: 'Bicycle', description: '', size: 'XL' },
    { id: 5, name: 'Plants', description: '', size: 'XL' }
  ];

  select(parcel: Parcel) : void {
    const customEvent = new CustomEvent('selectParcel', { detail: parcel });
    window.dispatchEvent(customEvent)
  }
}
