import {Injectable} from '@angular/core';
import {map, Observable, Subscription, tap} from "rxjs";
import {SessionData, SessionStorageService} from "../session/session-storage.service";
import {AppData, AppUser} from "./app.models";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public appData: Observable<AppData>;
    public isLoggedIn = new Observable<boolean>((subscribe) => {
        this.sessionStorage.session.subscribe((session) => {
            subscribe.next(session?.user?.id !== undefined);
        })
    });

    //private sessionData?: AppData;

    constructor(private sessionStorage: SessionStorageService) {
        this.appData = this.sessionStorage.session.pipe(
            map((sessionData: SessionData) => {
                return this.getAppDataFromSession(sessionData);
            })/*,
            tap((appData: AppData) => {
                this.sessionData = appData;
            })*/
        );
    }

    public clearSessionData(): void {
        this.sessionStorage.clearData();
    }

    public setUser(appUser: AppUser) {
        // if (this.sessionData === undefined) {
        //     this.sessionData = new AppData({ user: appUser });
        // } else {
        //     this.sessionData.user = appUser;
        // }

        // this.sessionStorage.updateData(this.sessionData);
        this.sessionStorage.updateData(new AppData({ user: appUser }));
    }

    private getAppDataFromSession(sessionData: SessionData): AppData {
        return new AppData({
            user: new AppUser(sessionData.user)
        });
    }
}

