import { Component } from '@angular/core';
import {LoginService} from "./pages/login/common/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fit Tracker';
  //isLoggedIn: boolean = false;
    constructor() {}
  //logic to check if user is logged in
}
