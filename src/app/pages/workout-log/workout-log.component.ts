import { Component, OnInit } from '@angular/core';
import { ExerciseDataService } from '../../services/exercise-data.service';
import { ExerciseEntry } from '../../services/exercise.service';

@Component({
    selector: 'app-workout-log',
    templateUrl: './workout-log.component.html',
    styleUrls: ['./workout-log.component.scss'],
})
export class WorkoutLogComponent implements OnInit {
    exerciseEntries: ExerciseEntry[] = [];

    constructor(private exerciseDataService: ExerciseDataService) {}

    ngOnInit() {
        this.getExerciseEntries();
    }

    getExerciseEntries() {
        this.exerciseDataService
            .getExerciseEntriesFromJsonFile()
            .subscribe((entries) => {
                this.exerciseEntries = entries;
            });
    }
}
