import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animal Tracker</h1>
    <h2>[{{currentZoo}}]</h2>
    <div class="btn-group">
      <button *ngIf="!masterShowAll" (click)="showAllAnimalsButtonClicked()" type="button" class="btn btn-primary">Show All Animals</button>
      <button *ngIf="!masterShowNewAnimal" (click)="newAnimalButtonClicked()" type="button" class="btn btn-primary">Register New Animal</button>
    </div>
    <hr>

    <new-animal (newAnimalSender)="addAnimal($event)" [showNewAnimalForm]="masterShowNewAnimal"></new-animal>
    <animal-list [childAnimalList] = "masterAnimalList" [showAllAnimals] = "masterShowAll" [total]="masterTotalCare" (clickSender)="editAnimal($event)"> </animal-list>
    <edit-animal [childSelectedAnimal] = "selectedAnimal" (editDoneSender)="doneEdit()"> </edit-animal>
  </div>
  `
})

export class AppComponent{
  currentZoo: string = 'Oregon Zoo';

  masterAnimalList: Animal[] = [
    new Animal("arctic fox", "Moon",2,"carnivore","Great Northwest","5","F","cool shade", "loud noises"),
    new Animal("ocelot", "Prince",4,"carnivore","Discovery Zone","6","M","laying in sunshine", "toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell",8,"herbivore","Great Northwest","2","F","delicate roots and leaves", "loud noises"),
    new Animal("Asian Elephant", "Samudra",9,"herbivore","Elephant Lands","7","M","bath time", "peanuts"),
    new Animal("De Brazza's Monkey", "Brooke",26,"herbivore","Africa","4","F","rope swinging", "music"),
  ];
  masterShowAll : boolean = false;
  masterShowNewAnimal : boolean = false;
  selectedAnimal : Animal = null;
  masterTotalCare : number = 0;

  showAllAnimalsButtonClicked(){
   this.masterShowAll = true;
   this.masterShowNewAnimal = false;
   this.masterTotalCare = this.getTotalCare();
  }

  getTotalCare(){
    let tot : number = 0;
    for ( var animal of this.masterAnimalList) {
      tot = tot + parseInt(animal.numCare);
    }
     return tot;
  }

  newAnimalButtonClicked(){
    this.masterShowNewAnimal = true;
    this.masterShowAll = false;
    this.selectedAnimal = null;
  }

  editAnimal(clickedAnimal: Animal){
    this.selectedAnimal = clickedAnimal;
  }

  doneEdit(){
    this.selectedAnimal = null;
    this.masterTotalCare = this.getTotalCare();
  }
  addAnimal(newAnimal: Animal){
    this.masterAnimalList.push(newAnimal);
    this.masterTotalCare = this.getTotalCare();
    this.masterShowAll = true;
    this.masterShowNewAnimal = false;
  }

}
