import {Injectable} from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {SessionData, SessionStorageService} from "../session/session-storage.service";
import {AppData, AppUser} from "./app.models";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public appData: Observable<AppData>;

    private sessionData: AppData;

    constructor(private sessionStorage: SessionStorageService) {
        this.appData = this.sessionStorage.session.pipe(
            map((sessionData: SessionData) => {
                return this.getAppDataFromSession(sessionData);
            }),
            tap((appData: AppData) => {
                this.sessionData = appData;
            })
        );
    }

    public clearSessionData(): void {
        this.sessionStorage.clearData();
    }

    public setUser(appUser: AppUser) {
        let updatedAppUserData: AppData = this.sessionData;
        updatedAppUserData.user = appUser;

        this.sessionStorage.updateData(updatedAppUserData);
    }

    private getAppDataFromSession(sessionData: SessionData): AppData {
        return new AppData({
            user: new AppUser(sessionData.user)
        });
    }
}

