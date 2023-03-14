// Framework imports
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

// 3rd party imports

// @itc-Core imports

// project specific imports
import {LoginComponent} from '../login.component';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
})
export class LoginModule {
}

