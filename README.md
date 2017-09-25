# Oregon Zoo Animal Tracker 

##### Epicodus Section: JavaScript Week3 Angular and Typescript 

### By Jessica Sheridan

## Description
The Animal Tracker app is targetted for zoo caretakers to track the zoo animals and their
various necessary details, including their age, diet, sex, location, likes, dislikes.
The number of necessary caretakers is also logged and the total caretakers needed for all
animals reported.

## User Stories Complete:
As a user:
I want to be able to add newly-registered animals to the app, and the date will be logged
with their entry. 

I want to view a list of animals I have logged.

I want to be able to filter the list of animals by their age (less than 2 years) or
older. 

I want to click an animal to edit it's attributes.

## Future user Stories :
As a user:
Add additional filtering,sorting criteria, based on location, diet etc.
Add capability to delete an animal.

## Setup
git clone https://github.com/jessicakenney/animal-tracker.git  

## Support and Contact details
email with any questions: jessicakenney@yahoo.com,

## Known Issues/Bugs
1)
I was unsuccessful getting Angular 2 \<select> tag to work with 2-way binding [(ngModel)]
in the select menu for editing animal properties. I resorted to using a \<input>.

Reference: https://github.com/angular/angular/issues/8215 
\<div class="form-group row">
         \ <label class="col-sm-1">Sex:</label>
         \ <div class="col-sm-4">
         \   <select [(ngModel)]="childSelectedAnimal.sex" class="form-control">
         \      <option [value]="M">M</option>
         \      <option [value]="F">F</option>
         \   </select>
         \ </div>
       \ </div>

2)  I was unsuccessful in trying to toggle inside the table \<td>'s between the final version and the
"edittable" version of the data. I could not make a single row "edittable" only all the rows.
I would like to figure this out to so the edits are made right in the table itself.


## Technologies Used
JavaScript, Typescript, Angular 2 

### Legal
This software is licensed under MIT Copyright (c) 2017 Jessica Sheridan
