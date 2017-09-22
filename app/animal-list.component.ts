import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onFilterAgeChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="matureAnimals">Mature Animals</option>
 </select>
 <hr>
 <select (change)="onFilterLocationChange($event.target.value)">
     <option value="allLocations" selected="selected">All Locations </option>
     <option value="elephantHouse"> Elephant House</option>
     <option value="asia">Asia</option>
</select>
<hr>
    <div *ngFor = "let animal of childAnimalList" >
        <h3> Species: {{animal.species}} </h3>
        <h4> Name: {{animal.name}}</h4>
        <h5> Age: {{animal.age}}</h5>
        <h5> Diet: {{animal.diet}} </h5>
        <h5> Location: {{animal.location}} </h5>
        <h5> Number of Caretakers: {{animal.numCare}} </h5>
        <h5> Sex: {{animal.sex}} </h5>
        <h5> Likes: {{animal.likes}} </h5>
        <h5> Dislikes: {{animal.dislikes}} </h5>
        <button (click)="editAnimalClicked(animal)">Edit Animal Attributes</button>
   </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  // @Output() clickSender = new EventEmitter();
  // @Output() pourClickedSender = new EventEmitter();
  // filterByRemainingPints: string;
  // filterByPrice: string;

  // ABVColor(keg){
  //   if (keg.ABV <= 5 ){
  //     return "light";
  //   } else if(keg.ABV > 5 && keg.ABV <= 7) {
  //     return "medium";
  //   } else if (keg.ABV > 7){
  //     return "strong";
  //   }
  // }
  // editKegClicked(clickedKeg: Keg){
  //   this.clickSender.emit(clickedKeg);
  // }
  //
  // pourPint(clickedKeg){
  //   if (clickedKeg.remainingPints > 0) {
  //     clickedKeg.remainingPints--
  //   }
  // }
  // onFilterChange(optionFromMenu){
  //   this.filterByRemainingPints = optionFromMenu;
  // }
  // onFilterPriceChange(optionFromMenu){
  //   this.filterByPrice = optionFromMenu;
  // }
  //
  // pourGrowler(clickedKeg){
  //   if(clickedKeg.remainingPints > 2) {
  //     clickedKeg.remainingPints = clickedKeg.remainingPints -2;
  //   }
  // }
}
