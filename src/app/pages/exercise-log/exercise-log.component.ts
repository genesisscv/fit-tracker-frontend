import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExerciseService, ExerciseEntry } from '../../services/exercise.service';



@Component({
  selector: 'app-exercise-log',
  templateUrl: './exercise-log.component.html',
  styleUrls: ['./exercise-log.component.scss'],
  
})


export class ExerciseLogComponent {

   constructor ( private exerciseService: ExerciseService) {}

  exerciseEntries: ExerciseEntry[] = [];
  newExerciseEntry: FormGroup = this.getNewExerciseEntry();

  addExerciseEntry(): void {
    const newEntry: ExerciseEntry = this.newExerciseEntry.getRawValue();

  
    this.exerciseEntries.push(newEntry);

    this.exerciseService.saveExercises(this.exerciseEntries)
  
    this.newExerciseEntry = this.getNewExerciseEntry();
    // this.newExerciseEntry.reset();
  }

  getNewExerciseEntry(){
    return new FormGroup({
      exercise: new FormControl(''),
      sets: new FormControl(0),
      repetitions: new FormControl(0),
    });

    // return {
    //   exercise: '',
    //   sets: 0,
    //   repetitions: 0
    // }
    // return a form group here 
  }
}
