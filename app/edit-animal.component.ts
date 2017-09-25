import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({

  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
  <div class="well">
    <h2>Edit {{childSelectedAnimal.species}} </h2> <br>
        <div class="row">
          <label class="col-sm-1">Species:</label>
          <div class="col-sm-4" >
            <input [(ngModel)]="childSelectedAnimal.species" type="text" class="form-control" name="newSpecies" >
          </div>
        </div>

        <div class="row">
          <label class="col-sm-1">Name:</label>
          <div class="col-sm-4" >
            <input [(ngModel)]="childSelectedAnimal.name" type="text" class="form-control" name="newName" >
          </div>
        </div>
        <br>

        <div class="form-group row">
          <label class="col-sm-1">Sex:</label>
          <div class="col-sm-4">
            <input [(ngModel)]="childSelectedAnimal.sex" class="form-control">
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Age:</label>
          <div class="col-sm-4">
            <input [(ngModel)]="childSelectedAnimal.age" type="number" class="form-control" name="newAge">
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Diet:</label>
          <div class="col-sm-4" >
            <input [(ngModel)]="childSelectedAnimal.diet" type="text" class="form-control" name="newDiet">
          </div>
        </div>
        <br>

        <div class="form-group row">
          <label class="col-sm-1">Location:</label>
          <div class="col-sm-3">
              <input [(ngModel)]="childSelectedAnimal.location" class="form-control">
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Number Caretakers:</label>
          <div class="col-sm-4">
            <input [(ngModel)]="childSelectedAnimal.numCare" type="number" class="form-control" name="newNumCare">
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Likes:</label>
          <div class="col-sm-4" >
            <input [(ngModel)]="childSelectedAnimal.likes" type="text" class="form-control" name="newLikes" >
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1">Dislikes:</label>
          <div class="col-sm-4" >
            <input [(ngModel)]="childSelectedAnimal.dislikes" type="text" class="form-control" name="newDislikes">
          </div>
        </div>
          <br>
          <div class="form-group row" class="col-sm-3">
            <button type="button" class="btn btn-primary" (click)="editDoneButtonClicked()" >Done</button>
          </div> <br>
      </div>
    </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() editDoneSender = new EventEmitter();

  editDoneButtonClicked() {
    this.editDoneSender.emit();
  }

}
