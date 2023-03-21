// Framework imports
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

// 3rd party imports

// @itc-Core imports

// project specific imports
import {CharacterCardComponent} from '../character-card.component';

@NgModule({
    declarations: [
        CharacterCardComponent,
    ],
    exports: [
        CharacterCardComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
})
export class CharacterCardModule {
}

