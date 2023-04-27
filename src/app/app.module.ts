import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from "./pages/login/common/login.module";
import {DashboardModule} from "./pages/dashboard/common/dashboard.module";
import { WorkoutPageComponent } from './pages/workout-page/workout-page.component';
import { NavbarComponent } from './pages/login/components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        WorkoutPageComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        DashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
