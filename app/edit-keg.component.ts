import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
      <div *ngIf="childSelectedKeg">
        <h3>{{childSelectedKeg.description}}</h3>
        <p>Keg Complete? {{childSelectedKeg.done}}</p>
        <hr>
        <h3>Edit Keg</h3>
        <label>Enter Keg Description:</label>
        <input [(ngModel)]="childSelectedKeg.description">
        <label>Enter Keg Price (3-5):</label>
        <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="3">1 (Low Price)<br>
        <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="4">2 (Medium Priority)<br>
        <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="5">3 (High Priority)
        <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="3">4 (Low Price)
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
  this.doneButtonClickedSender.emit();
}
}
