import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { AppService } from '../../services/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppData } from '../../services/app/app.models';
import { LoginService } from '../login/common/login.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    appUser: Observable<AppData> = of();

    constructor(
        private appService: AppService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: LoginService
    ) {}

    ngOnInit(): void {
        this.appUser = this.appService.appData.pipe(
            tap((usr: AppData) => {
                console.log(usr);
            })
        );
    }

    public onShowLocation($event: any) {}

    public logOut() {
        this.appService.clearSessionData();
        this.router.navigate(['../login'], { relativeTo: this.activatedRoute });
    }

    public workout() {
        this.router.navigate(['../workout'], {
            relativeTo: this.activatedRoute,
        });
    }
}
