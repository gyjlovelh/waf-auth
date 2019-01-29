import { OnInit, Directive, Input, ElementRef } from '@angular/core';
import { AuthService } from './auth.service';


@Directive({
    selector: '[wafPermission]'
})
export class AuthDirective implements OnInit {
    mode = false;

    @Input() wafPermission: string;

    @Input() set isHiddenMode(mode: any) {
        this.mode = mode !== undefined;
    }

    constructor(
        private el: ElementRef,
        private $auth: AuthService
    ) {}

    ngOnInit() {
        const isAuth = this.$auth.isAuthorized(this.wafPermission);

        if (!isAuth) {
            if (this.mode) {
                this.el.nativeElement.style.display = 'none';
            } else {
                this.el.nativeElement.style.cursor = 'not-allowed';
                this.el.nativeElement.style.pointerEvents = 'none';
                this.el.nativeElement.style.opacity = '0.5';
            }
        }
    }
}
