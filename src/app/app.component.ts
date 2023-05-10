import { Component } from '@angular/core';
import {LoginService} from "./pages/login/common/login.service";
import { AppService } from './services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fit Tracker';
  //isLoggedIn: boolean = false;
    constructor(public appService: AppService) {}
  //logic to check if user is logged in
}
