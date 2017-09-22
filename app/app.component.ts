import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1> Animal Tracker</h1>
    <h3> {{currentZoo}}</h3>
    <h4> {{month}}/{{day}}/{{year}}</h4>
    <animal-list [childAnimalList] = "masterAnimalList"> </animal-list>
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
    new Animal("elephant", "Sammy",5,"herbivore","Elephant House",5,"male","red bouncy ball", "other male elephants"),
    new Animal("orangatang", "Flower",5,"herbivore","Monkey Pavilion",5,"female","rope swinging", "music"),
  ];

}
