import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
    ExerciseService,
    ExerciseEntry,
} from '../../services/exercise.service';

@Component({
    selector: 'app-workout-page',
    templateUrl: './workout-page.component.html',
    styleUrls: ['./workout-page.component.scss'],
})
export class WorkoutPageComponent {
    items: string[] = [];
    selectedExercise: string = '';

    constructor(
        private router: Router,
        private exerciseService: ExerciseService
    ) {}

    ngOnInit() {
        this.fetchExerciseNames();
    }

    fetchExerciseNames() {
        this.exerciseService
            .getExerciseEntries()
            .subscribe((entries: ExerciseEntry[]) => {
                this.items = entries.map(
                    (entry: ExerciseEntry) => entry.exercise
                );
            });
    }

    selectExercise(item: string): void {
        this.selectedExercise = item;
    }

    navigateToExerciseLog(exercise: string) {
        this.router.navigate(['/exercise-log'], { queryParams: { exercise } });
    }
}
