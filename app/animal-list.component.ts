import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div *ngIf="showAllAnimals" class="newAnimalForm">

    <label>Filter By Age:</label>
    <select (change)="onFilterAgeChange($event.target.value)">
         <option value="allAnimals" selected="selected">All Animals</option>
         <option value="young">Young Animals</option>
         <option value="mature">Mature Animals</option>
    </select>
    <label>Filter By Locations:</label>
    <select (change)="onFilterLocationChange($event.target.value)">
        <option value="allLocations" selected="selected">All Locations </option>
        <option value="elephantHouse"> Elephant House</option>
        <option value="asia">Asia</option>
   </select>
   <hr>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
          <th>Species </th>
          <th> Name </th>
          <th> Sex </th>
          <th> Age </th>
          <th> Diet </th>
          <th> Location </th>
          <th> Num Caretakers </th>
          <th> Likes </th>
          <th> Dislikes </th>
          <th> Action </th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let animal of childAnimalList | ageFilter:filterByAge">
          <td>{{animal.species | uppercase}}</td>
          <td>{{animal.name}}</td>
          <td>{{animal.sex}}</td>
          <td>{{animal.age}}</td>
          <td>{{animal.diet}}</td>
          <td>{{animal.location}}</td>
          <td>{{animal.numCare}}</td>
          <td>{{animal.likes}}</td>
          <td>{{animal.dislikes}}</td>
          <button (click)="editAnimalClicked(animal)">Edit</button>
      </tr>
      </tbody>
    </table>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Input() showAllAnimals: boolean;
  @Output() clickSender = new EventEmitter();
  filterByAge: string;
  //showAllAnimals: boolean;

  editAnimalClicked(clickedAnimal: Animal){
    this.clickSender.emit(clickedAnimal);
  }

  onFilterAgeChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }
}
