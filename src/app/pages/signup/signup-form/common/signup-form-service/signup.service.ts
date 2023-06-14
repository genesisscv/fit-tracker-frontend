import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class SignupService {
    constructor(private http: HttpClient) {}

    signup(username: string, password: string) {
        const url = 'http://localhost:8080/users';
        const user = { username, password };
        return this.http.post(url, user);
    }
}
