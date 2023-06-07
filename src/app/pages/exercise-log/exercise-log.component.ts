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

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private exerciseService: ExerciseService
    ) {
        console.log('hello there');
    }

    ngOnInit(): void {
        console.log('hello');
        this.newExerciseEntry = this.getNewExerciseEntry();
        this.route.queryParams.subscribe((params) => {
            console.log(params);

            if (params['exercise']) {
                this.newExerciseEntry.patchValue({
                    exercise: params['exercise'],
                });
            }
        });
    }

    addExerciseEntry(): void {
        const newEntry: ExerciseEntry = this.newExerciseEntry.getRawValue();
        this.exerciseEntries.push(newEntry);
        this.exerciseService.saveExercises(this.exerciseEntries);
        this.newExerciseEntry = this.getNewExerciseEntry();
    }

    getNewExerciseEntry(): FormGroup {
        return new FormGroup({
            exercise: new FormControl(''),
            sets: new FormControl(0),
            repetitions: new FormControl(0),
        });
    }

    public submitSets() {
        this.router.navigate(['../workout-log'], {
            relativeTo: this.route,
        });
    }
}
