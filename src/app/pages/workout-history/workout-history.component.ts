import { Component, OnInit } from '@angular/core';
import { ExerciseService, WorkoutEntry } from '../../services/exercise.service';

@Component({
    selector: 'app-workout-history',
    templateUrl: './workout-history.component.html',
    styleUrls: ['./workout-history.component.scss'],
})
export class WorkoutHistoryComponent implements OnInit {
    workoutHistory: WorkoutEntry[] = [];

    constructor(private exerciseService: ExerciseService) {}

    ngOnInit(): void {
        this.workoutHistory = this.exerciseService.getWorkoutEntries();
    }
}
