import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {AppService, AppUser} from "../login/common/services/app/app.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    appUser: Observable<AppUser>;

    constructor(private appService: AppService) {
    }

    ngOnInit(): void {
        this.appUser = this.appService.user.pipe(
            tap((usr: AppUser) => {
                console.log(usr);
            })
        );
    }
}
