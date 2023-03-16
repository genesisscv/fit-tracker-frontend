import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from "./pages/login/common/login.module";
import {DashboardModule} from "./pages/dashboard/common/dashboard.module";

@NgModule({
    declarations: [
        AppComponent
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
