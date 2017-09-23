import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1> Animal Tracker</h1>
    <h3> {{currentZoo}}</h3>
    <h4> {{month}}/{{day}}/{{year}}</h4>
    <hr>
    <div *ngIf="!masterShowAll">
      <button (click)="showAllAnimalsButtonClicked()">Show All Animals</button><hr>
    </div>
    <div *ngIf="!masterShowNewAnimal">
      <button (click)="newAnimalButtonClicked()">Register New Animal</button><hr>
    </div>
    <new-animal (newAnimalSender)="addAnimal($event)" [showNewAnimalForm]="masterShowNewAnimal"></new-animal>
    <animal-list [childAnimalList] = "masterAnimalList" [showAllAnimals] = "masterShowAll" (clickSender)="editAnimal($event)"> </animal-list>
    <edit-animal [childSelectedAnimal] = "selectedAnimal" (editDoneSender)="doneEdit()"> </edit-animal>
  </div>
  `
})

export class AppComponent{
  currentZoo: string = 'Oregon Zoo';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterAnimalList: Animal[] = [
    new Animal("elephant", "Sammy",5,"herbivore","Elephant House",5,"M","red bouncy ball", "other male elephants"),
    new Animal("orangatang", "Flower",1,"herbivore","Monkey Pavilion",5,"F","rope swinging", "music"),
  ];
  masterShowAll : boolean = false;
  masterShowNewAnimal : boolean = false;
  selectedAnimal = null;

 showAllAnimalsButtonClicked(){
   this.masterShowAll = true;
   this.masterShowNewAnimal = false;
  }

  newAnimalButtonClicked(){
    this.masterShowNewAnimal = true;
    this.masterShowAll = false;
  }

  editAnimal(clickedAnimal: Animal){
    this.selectedAnimal = clickedAnimal;
  }

  doneEdit(){
    this.selectedAnimal = null;
  }
  addAnimal(newAnimal: Animal){
    this.masterAnimalList.push(newAnimal);
    this.masterShowAll = true;
    this.masterShowNewAnimal = false;
  }

}
