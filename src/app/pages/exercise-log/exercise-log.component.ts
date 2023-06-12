import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
    ExerciseService,
    ExerciseEntry,
} from '../../services/exercise.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-exercise-log',
    templateUrl: './exercise-log.component.html',
    styleUrls: ['./exercise-log.component.scss'],
})
export class ExerciseLogComponent implements OnInit {
    exerciseEntries: ExerciseEntry[] = [];
    newExerciseEntry!: FormGroup;
    exerciseType: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private exerciseService: ExerciseService
    ) {}

    ngOnInit(): void {
        this.getNewExerciseEntry();
        this.route.queryParams.subscribe((params) => {
            console.log(params);
            this.exerciseType = params['exercise'];

            if (this.exerciseType) {
                this.newExerciseEntry.patchValue({
                    exercise: this.exerciseType,
                });
            }
        });
    }

    addExerciseEntry(): void {
        const newEntry: ExerciseEntry = this.newExerciseEntry.getRawValue();
        this.exerciseEntries.push(newEntry);

        this.getNewExerciseEntry();
    }

    getNewExerciseEntry() {
        this.newExerciseEntry = new FormGroup({
            exercise: new FormControl(this.exerciseType),
            weight: new FormControl(0),
            sets: new FormControl(0),
            repetitions: new FormControl(0),
        });
    }

    deleteExerciseEntry(index: number) {
        this.exerciseEntries.splice(index, 1);
        // this.exerciseService.deleteExercise();
    }

    public submitSets() {
        this.exerciseService.saveExercises(this.exerciseEntries);

        this.router.navigate(['../workout-log'], {
            relativeTo: this.route,
        });
    }
}
