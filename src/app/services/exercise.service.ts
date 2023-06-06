import { Injectable } from '@angular/core';

export interface ExerciseEntry {
  exercise: string;
  sets: number;
  repetitions: number;
}

@Injectable({
  providedIn: 'root'
})

export class ExerciseService {

  constructor() { }

  saveExercises(exercises: ExerciseEntry[]){

    sessionStorage.setItem('exercises',JSON.stringify(exercises))

  }

  getExercises(): ExerciseEntry[]{

    return JSON.parse(sessionStorage.getItem('exercises')??"")
   
  }
}

