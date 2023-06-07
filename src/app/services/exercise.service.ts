import { Injectable } from '@angular/core';

export interface ExerciseEntry {
    exercise: string;
    sets: number;
    repetitions: number;
}

@Injectable({
    providedIn: 'root',
})
export class ExerciseService {
    constructor() {}

    saveExercises(exercises: ExerciseEntry[]) {
        let currentExercises = this.getExercises();
        let allExercises = currentExercises.concat(exercises);
        sessionStorage.setItem('exercises', JSON.stringify(allExercises));
    }

    getExercises(): ExerciseEntry[] {
        return JSON.parse(sessionStorage.getItem('exercises') ?? '[]');
    }
}
