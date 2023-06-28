import { Component, OnInit } from '@angular/core';
import { ExerciseService, WorkoutEntry } from '../../services/exercise.service';

@Component({
    selector: 'app-workout-history',
    templateUrl: './workout-history.component.html',
    styleUrls: ['./workout-history.component.scss'],
})
export class WorkoutHistoryComponent implements OnInit {
    workoutEntries: WorkoutEntry[] = [];
    workoutDates: string[] = [];
    selectedDate: string = '';
    filteredWorkouts: WorkoutEntry | undefined;

    constructor(private exerciseService: ExerciseService) {
        this.filteredWorkouts = {
            date: '',
            exercises: [],
        };
    }

    ngOnInit(): void {
        this.workoutEntries = this.exerciseService.getWorkoutEntries();
        this.updateWorkoutDates();
    }

    updateWorkoutDates() {
        this.workoutDates = this.workoutEntries.map(
            (entry: WorkoutEntry) => entry.date
        );
    }

    filterWorkouts() {
        if (this.selectedDate) {
            this.filteredWorkouts = this.workoutEntries.find(
                (entry: WorkoutEntry) => entry.date === this.selectedDate
            );
        }

        console.log(this.filteredWorkouts);
    }
}
