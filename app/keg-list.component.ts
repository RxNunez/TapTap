import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs">All Kegs</option>
    <option value="completedKegs">Completed Kegs</option>
    <option value="incompleteKegs" selected="selected">Incomplete Kegs</option>
  </select>
  <ul>
     <li (click)="isDone(currentKeg)" *ngFor="let currentKeg of childKegList | completeness:filterByCompleteness">{{currentKeg.description}} {{currentKeg.price}}
     <input *ngIf="currentKeg.done === true" type="checkbox" checked (click)="toggleDone(currentKeg, false)"/>
     <input *ngIf="currentKeg.done === false" type="checkbox" (click)="toggleDone(currentKeg, true)"/>
     <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
     </li>
   </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "incompleteTasks";
  // kegs: Keg[] = [
  // new Keg('Black Butte Porter', 3),
  // new Keg('Dawn of the Red', 4),
  // new Keg('Green and Gold', 5),
  // new Keg('Dead Guy Ale', 3)
  // ];
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }
  isDone(clickedKeg: Keg) {
    if(clickedKeg.done === true) {
      alert("This keg is done!");
    } else {
      alert("This keg is not done. Better get to work!");
    }
  }
  toggleDone(clickedKeg: Keg, setCompleteness: boolean) {
   clickedKeg.done = setCompleteness;
 }

  priceColor(currentKeg){
    if (currentKeg.price === 5){
      return "bg-danger";
    } else if (currentKeg.price === 4) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
