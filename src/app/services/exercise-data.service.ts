import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExerciseEntry } from './exercise.service';

@Injectable({
    providedIn: 'root',
})
export class ExerciseDataService {
    private jsonFileUrl = 'assets/exercise-entries.json';

    constructor(private http: HttpClient) {}

    getExerciseEntriesFromJsonFile(): Observable<ExerciseEntry[]> {
        return this.http.get<ExerciseEntry[]>(this.jsonFileUrl);
    }

    saveExerciseEntriesToFile(entries: ExerciseEntry[]): Observable<any> {
        return this.http.post(this.jsonFileUrl, entries);
    }
}
