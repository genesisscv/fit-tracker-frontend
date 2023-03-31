import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
    protected pageTitle: string = "A&G";

    constructor() {}

    public getData(): Observable<any> {
        const storedObject: any = JSON.parse(
            localStorage.getItem(this.pageTitle)?? '{}'
        )

        return of(storedObject[this.pageTitle]?? {}).pipe(delay(0));
    }

    public getSessionData(): Observable<any> {
        const storedObject: any = JSON.parse(
            localStorage.getItem(this.pageTitle)?? '{}'
        )

        return of(storedObject[this.pageTitle]?? {}).pipe(delay(0));
    }

    public updateData(sourceName: string, data: { [p: string]: any }) {
        localStorage.setItem(this.pageTitle, JSON.stringify({[sourceName]: data}));
    }
}
