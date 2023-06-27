import { Injectable } from '@angular/core';

export interface ExerciseEntry {
    exercise: string;
    weight: number;
    sets: number;
    repetitions: number;
}

export interface WorkoutEntry {
    date: string;
    exercises: ExerciseEntry[];
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

    saveWorkout(workoutData: WorkoutEntry): void {
        // Added method
        let workoutEntries = this.getWorkoutEntries();
        workoutEntries.push(workoutData);
        sessionStorage.setItem(
            'workoutEntries',
            JSON.stringify(workoutEntries)
        );
    }

    getWorkoutEntries(): WorkoutEntry[] {
        // Added method
        return JSON.parse(sessionStorage.getItem('workoutEntries') ?? '[]');
    }
}
