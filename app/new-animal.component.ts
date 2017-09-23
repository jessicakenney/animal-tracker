import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div *ngIf="!showNewAnimalForm">
    <button (click)="newAnimalButtonClicked()">Register New Animal</button><hr>
  </div>
  <div *ngIf="showNewAnimalForm" class="newAnimalForm">
    <h2>New Animal Registration</h2> <br>
      <form #form="ngForm" (ngSubmit)="submitForm(newSpecies.value,newName.value)">
        <div class="form-group row">
          <label class="col-sm-1">Species:</label>
          <div class="col-sm-4" >
            <input #newSpecies type="text" class="form-control" name="newSpecies" ngModel required>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Name:</label>
          <div class="col-sm-4" >
            <input #newName type="text" class="form-control" name="newName" ngModel required>
          </div>
        </div>
        <br>

        <div class="form-group row">
          <label class="col-sm-1">Sex:</label>
          <div class="col-sm-4">
            <select #newSex>
               <option value="M" selected="selected">Male</option>
               <option value="F">Female</option>
            </select>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Age:</label>
          <div class="col-sm-4">
            <input #newAge type="number" class="form-control" name="newAge" ngModel required>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Diet:</label>
          <div class="col-sm-4" >
            <input #newDiet type="text" class="form-control" name="newDiet" ngModel required>
          </div>
        </div>
        <br>

        <div class="form-group row">
          <label class="col-sm-1">Location:</label>
          <div class="col-sm-3">
             <select #newLocation>
               <option value="northwest" selected="selected">NorthWest</option>
               <option value="elephantHouse"> Elephant House</option>
               <option value="asia">Asia</option>
             </select>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Number Caretakers:</label>
          <div class="col-sm-4">
            <input #newAge type="number" class="form-control" name="newNumCare" ngModel required>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Likes:</label>
          <div class="col-sm-4" >
            <input #newLikes type="text" class="form-control" name="newLikes" ngModel required>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Diet:</label>
          <div class="col-sm-4" >
            <input #newDislikes type="text" class="form-control" name="newDislikes" ngModel required>
          </div>
        </div>
          <br>

          <div class="form-group row" class="col-sm-3">
            <button type="submit" class="btn btn-default" > Register</button>
          </div>
        </form>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  showNewAnimalForm : boolean;

  submitForm (newSpecies: string,newName: string){
    //var newAnimalToAdd: Animal = new Animal(newSpecies, newName, newAge, newDiet,newLocation,newNumCare,newSex,newLikes,newDislikes);
    var newAnimalToAdd: Animal = new Animal(newSpecies, newName,5,"herbivore","Elephant House",5,"M","red bouncy ball", "other male elephants");

    this.newAnimalSender.emit(newAnimalToAdd)
    this.showNewAnimalForm = false;
  }

  newAnimalButtonClicked(){
      this.showNewAnimalForm = true;
  }

}
