import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div *ngIf="showNewAnimalForm" class="newAnimalForm">
   <div class="well">
    <h2>New Animal Registration</h2> <br>
      <form #form="ngForm" (ngSubmit)="submitForm(newSpecies.value,newName.value,newAge.value,newDiet.value,newLocation.value,newNumCare.value,newSex.value,newLikes.value,newDislikes.value)">
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
            <input #newNumCare type="number" class="form-control" name="newNumCare" ngModel required>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Likes:</label>
          <div class="col-sm-4" >
            <input #newLikes type="text" class="form-control" name="newLikes" ngModel required>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Dislikes:</label>
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
    </div>
  `
})

export class NewAnimalComponent {
  @Input() showNewAnimalForm : boolean;
  @Output() newAnimalSender = new EventEmitter();

  submitForm (newSpecies: string,newName: string, newAge: number, newDiet: string, newLocation: string, newNumCare: string, newSex: string, newLikes: string, newDislikes: string){
    var newAnimalToAdd: Animal = new Animal(newSpecies, newName, newAge, newDiet, newLocation, newNumCare, newSex,newLikes,newDislikes);
    this.newAnimalSender.emit(newAnimalToAdd)
  }

}
