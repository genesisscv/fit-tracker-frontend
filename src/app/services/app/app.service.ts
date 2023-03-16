import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private _user: BehaviorSubject<AppUser> = new BehaviorSubject<AppUser>(new AppUser())
    public user: Observable<AppUser> = this._user.asObservable();

    constructor() {
    }

    public setUser(user: AppUser) {
        this._user.next(user);
    }
}

export class AppUser {
    public id: number;
    public name: string;
    public status: string;
    public species: string;
    public type: string;
    public gender: string;
    public origin: {
        name: string;
        url: string
    };
    public location: {
        name: string;
        url: string
    };
    public image: string;
    public episode: string[];
    public url: string;
    public created?: Date;

    constructor(model?: Partial<AppUser>) {
        if (model) {
            Object.assign(this, model);

            if(model.created) {
                this.created = new Date(model.created);
            }
        }
    }
}
