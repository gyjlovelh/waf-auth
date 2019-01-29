import {Injectable} from '@angular/core';


@Injectable()
export class AuthService {

    // TODO: localstorage服务
    constructor() {}

    /**
     * 判断是否有操作权限
     */
    isAuthorized(optId: string): boolean {
        return optId !== '0';
    }
}
