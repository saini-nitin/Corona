import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
    flag:any;
    canActivate() {
        this.flag = localStorage.getItem('isLoggedin')
        if (this.flag=='true') {
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    }
}
