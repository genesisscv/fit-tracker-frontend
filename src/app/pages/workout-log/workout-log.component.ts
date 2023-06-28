import { Component } from '@angular/core';
import {
    ExerciseService,
    ExerciseEntry,
    WorkoutEntry,
} from '../../services/exercise.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-workout-log',
    templateUrl: './workout-log.component.html',
    styleUrls: ['./workout-log.component.scss'],
})
export class WorkoutLogComponent {
    workoutDate!: string;
    constructor(
        private exerciseService: ExerciseService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    exerciseEntries: ExerciseEntry[] = [];

    ngOnInit() {
        this.exerciseEntries = this.exerciseService.getExercises();
    }
    public submitWorkout() {
        const workoutData: WorkoutEntry = {
            date: this.workoutDate,
            exercises: this.exerciseEntries,
        };

        this.exerciseService.saveWorkout(workoutData);

        this.router.navigate(['../workout-history'], {
            relativeTo: this.route,
        });
    }
}
