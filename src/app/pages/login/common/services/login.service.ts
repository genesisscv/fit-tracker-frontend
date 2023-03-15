import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private httpClient: HttpClient) {
    }

    public login(userName: string, password: string): Observable<any> {
        this.getCharacterNumber(userName, password);
        return this.httpClient.get(`https://rickandmortyapi.com/api/character/${this.getCharacterNumber(userName, password)}`);
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
            characterCode = characterCode / 2
        }

        return Math.floor(characterCode);
    }
}

