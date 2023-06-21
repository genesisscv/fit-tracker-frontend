import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ExerciseEntry {
    exercise: string;
    weight: number;
    sets: number;
    repetitions: number;
}

@Injectable({
    providedIn: 'root',
})
export class ExerciseService {
    private saveExerciseEntriesUrl = 'http://localhost:8080/exercises';

    constructor(private http: HttpClient) {}

    saveExerciseEntries(entries: ExerciseEntry[]): Observable<any> {
        return this.http.post(this.saveExerciseEntriesUrl, entries);
    }

    getExerciseEntries(): Observable<ExerciseEntry[]> {
        return this.http.get<ExerciseEntry[]>(this.saveExerciseEntriesUrl);
    }
}
