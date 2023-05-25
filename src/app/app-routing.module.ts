import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {loggedInGuard} from "./route-guards/logged-in/logged-in.guard";
import {loggedOutGuard} from "./route-guards/logged-out/logged-out.guard";
import {WorkoutPageComponent} from "./pages/workout-page/workout-page.component";
import { ExerciseLogComponent } from './pages/exercise-log/exercise-log.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [loggedInGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [loggedOutGuard]
    },
    {
        path: 'workout',
        component: WorkoutPageComponent,

    },
    {
        path: 'exercise-log',
        component: ExerciseLogComponent,

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
