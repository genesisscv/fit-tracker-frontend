import { Component } from '@angular/core';
import {LoginService} from "../../common/login.service";
import {AppService} from "../../../../services/app/app.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    constructor(private appService: AppService, private router: Router, private activatedRoute: ActivatedRoute, private authService: LoginService) {

    }

    logOut() {
        this.authService.loggedOut();
        this.appService.clearSessionData();
        this.router.navigate(['../login'], {relativeTo: this.activatedRoute});
    }
}
