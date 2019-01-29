import { NgModule } from '@angular/core';
import { AuthService } from './service/auth.service';
import { AuthDirective } from './service/auth.directive';

@NgModule({
    imports: [],
    declarations: [
        AuthDirective
    ],
    exports: [
        AuthDirective
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {

}
