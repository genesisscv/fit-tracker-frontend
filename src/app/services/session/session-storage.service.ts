import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
    private _session: BehaviorSubject<SessionData> = new BehaviorSubject<SessionData>({} as SessionData)
    public session: Observable<SessionData> = this._session.asObservable();

    protected sessionKey: string = "A&G";

    constructor() {
        this.setSession();
    }

    public clearData() {
        localStorage.clear();
        this.setSession();
    }

    public updateData(data: { [p: string]: any }) {
        localStorage.setItem(this.sessionKey, JSON.stringify(data));
        this.setSession();
    }

    private getStoredData(): SessionData {
        return JSON.parse(
            localStorage.getItem(this.sessionKey)?? '{}'
        ) as SessionData
    }

    private setSession() {
        this._session.next(this.getStoredData());
    }
}

export interface SessionData {
    user: {
        id: number;
        [key: string]: any;
    };
}
