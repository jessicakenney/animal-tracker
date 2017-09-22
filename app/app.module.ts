import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
 import { AnimalListComponent } from './animal-list.component';
// import { EditAnimalComponent} from './edit-keg.component';
// import { NewAnimalComponent} from './new-keg.component';
// import { AgeFilterPipe} from './AgeFilterPipe.pipe';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, AnimalListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
