import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserModel } from './UserModel';

@Injectable({ providedIn: 'root' })
export class AuthencticateService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    authenticateUser(candidate): Observable<UserModel> { 
        const uri  = 'http://localhost:8401/cis/auth/authenticate-user';
        return this.http.post<UserModel>(uri,candidate);
    }
}