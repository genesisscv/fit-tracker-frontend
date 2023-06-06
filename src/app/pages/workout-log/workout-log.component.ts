import { Component } from '@angular/core';
import { ExerciseService, ExerciseEntry } from '../../services/exercise.service';


@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.component.html',
  styleUrls: ['./workout-log.component.scss']
})
export class WorkoutLogComponent {

  constructor ( private exerciseService: ExerciseService) {}

  exerciseEntries: ExerciseEntry[] = [];



  ngOnInit(){
    this.exerciseEntries = this.exerciseService.getExercises()
  }

}
