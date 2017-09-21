import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter Keg Description:</label>
      <input #newDescription>
    </div>
    <div>
     <label>Keg Price:</label>
     <select #newPrice>
       <option [value]="3"> Low Price </option>
       <option [value]="4"> Medium Price </option>
       <option [value]="5"> High Price </option>
     </select>
      <button (click)="submitForm(newDescription.value, newPrice.value); newDescription.value='';">Add</button>
     </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(description: string, price: number) {
    var newKegToAdd: Keg = new Keg(description, price);
  }
}
