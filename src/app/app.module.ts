import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from "./pages/login/common/login.module";
import {DashboardModule} from "./pages/dashboard/common/dashboard.module";
import { WorkoutPageComponent } from './pages/workout-page/workout-page.component';
import { NavbarComponent } from './pages/login/components/navbar/navbar.component';
import { ExerciseLogComponent } from './pages/exercise-log/exercise-log.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkoutLogComponent } from './pages/workout-log/workout-log.component';

@NgModule({
    declarations: [
        AppComponent,
        WorkoutPageComponent,
        NavbarComponent,
        ExerciseLogComponent,
        WorkoutLogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        DashboardModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
