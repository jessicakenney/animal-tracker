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
    new Animal("elephant", "Sammy",5,"herbivore","Elephant House","5","M","red bouncy ball", "other male elephants"),
    new Animal("orangatang", "Flower",1,"herbivore","Monkey Pavilion","5","F","rope swinging", "music"),
  ];
  masterShowAll : boolean = false;
  masterShowNewAnimal : boolean = false;
  selectedAnimal = null;
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
