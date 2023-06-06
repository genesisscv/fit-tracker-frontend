import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {DashboardComponent} from "../dashboard.component";
// import {CharacterCardModule} from "../components/character-card/common/character-card.module";

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        // CharacterCardModule
    ],
    providers: [],
})
export class DashboardModule {
}

