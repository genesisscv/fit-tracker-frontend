import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface ExerciseEntry {
  exercise: string;
  sets: number;
  repetitions: number;
}

@Component({
  selector: 'app-exercise-log',
  templateUrl: './exercise-log.component.html',
  styleUrls: ['./exercise-log.component.scss'],
  
})

export class ExerciseLogComponent {
  exerciseEntries: ExerciseEntry[] = [];
  newExerciseEntry: FormGroup = this.getNewExerciseEntry();

  addExerciseEntry(): void {
    const newEntry: ExerciseEntry = this.newExerciseEntry.getRawValue();
  
    this.exerciseEntries.push(newEntry);
  
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
