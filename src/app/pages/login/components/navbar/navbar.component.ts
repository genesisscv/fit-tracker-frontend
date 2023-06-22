import { Component } from '@angular/core';
import { LoginService } from '../../common/login.service';
import { AppService } from '../../../../services/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    constructor(
        private appService: AppService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: LoginService
    ) {}

    logOut() {
        this.appService.clearSessionData();
        this.router.navigate(['../login'], { relativeTo: this.activatedRoute });
    }

    dashboard() {
        this.router.navigate(['../dashboard'], {
            relativeTo: this.activatedRoute,
        });
    }

    exerciseList() {
        this.router.navigate(['../workout'], {
            relativeTo: this.activatedRoute,
        });
    }

    workoutLog() {
        this.router.navigate(['../workout-log'], {
            relativeTo: this.activatedRoute,
        });
    }
    workoutHistory() {
        this.router.navigate(['../workout-history'], {
            relativeTo: this.activatedRoute,
        });
    }
}
