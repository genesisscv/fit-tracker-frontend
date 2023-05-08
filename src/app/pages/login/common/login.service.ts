import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {AppService} from "../../../services/app/app.service";
import {AppUser} from "../../../services/app/app.models";
import {ApiUser} from "./login.interfaces";

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    // public isLoggedIn: boolean = false;
    constructor(private httpClient: HttpClient, private appService: AppService) {
    }

    // public loggedIn() {
    //     this.isLoggedIn = true;
    // }

    // public loggedOut(): void {
    //     this.isLoggedIn = false;
    // }
    public login(userName: string, password: string):
        Observable<AppUser>
    {
        return this.httpClient.get(`https://rickandmortyapi.com/api/character/${this.getCharacterNumber(userName, password)}`).pipe(
            map((userDetails: any) => {
                return this.getAppUserFromUserGet(userDetails);
            }),
            tap((user: AppUser) => {
                this.appService.setUser(user);
            })
        );
        window.alert("login works!")
        

    }

    private getAppUserFromUserGet(userDetails: ApiUser): AppUser {
        return new AppUser(userDetails);
    }

    private getCharacterNumber(userName: string, password: string) {
        var characterCode = 1;
        var maxCharacters = 826;

        for(let char = 0; char < userName.length; char++) {
            characterCode += userName.charCodeAt(char);

        }
        for(let char = 0; char < password.length; char++) {
            characterCode += password.charCodeAt(char);

        }
        while(characterCode > maxCharacters) {
            characterCode = characterCode - maxCharacters;
        }

        return Math.floor(characterCode);
    }
}
