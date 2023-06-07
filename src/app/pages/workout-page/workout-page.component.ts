import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-workout-page',
    templateUrl: './workout-page.component.html',
    styleUrls: ['./workout-page.component.scss'],
})
export class WorkoutPageComponent {
    items: string[] = ['Squats', 'Deadlifts', 'Bicepcurls', 'Bench Press'];
    selectedExercise: string = '';
    router: any;

    selectExercise(item: string): void {
        this.selectedExercise = item;
    }

    navigateToExerciseLog(exercise: string) {
        this.router.navigate(['/exercise-log'], { queryParams: { exercise } });
    }
}
