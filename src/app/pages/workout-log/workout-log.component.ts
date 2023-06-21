import { Component, OnInit } from '@angular/core';
import {
    ExerciseService,
    ExerciseEntry,
} from '../../services/exercise.service';

@Component({
    selector: 'app-workout-log',
    templateUrl: './workout-log.component.html',
    styleUrls: ['./workout-log.component.scss'],
})
export class WorkoutLogComponent implements OnInit {
    constructor(private exerciseService: ExerciseService) {}

    exerciseEntries: ExerciseEntry[] = [];

    ngOnInit() {
        this.getExerciseEntries();
    }

    getExerciseEntries() {
        this.exerciseService.getExerciseEntries().subscribe((entries) => {
            this.exerciseEntries = entries;
        });
    }
}
