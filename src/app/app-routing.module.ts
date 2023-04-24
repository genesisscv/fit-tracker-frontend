import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LoggedInGuard} from "./route-guards/logged-in/logged-in.guard";
import {LoggedOutGuard} from "./route-guards/logged-out/logged-out.guard";
import {WorkoutPageComponent} from "./pages/dashboard/components/workout-page/workout-page.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [LoggedInGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [LoggedOutGuard]
    },
    {
        path: 'workout',
        component: WorkoutPageComponent,

    },
    {
        path: '**',
        redirectTo: '/login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
