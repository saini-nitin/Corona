import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Subject } from 'rxjs/Subject';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthencticateService } from './login.service';
import { UserModel } from './UserModel';
import { BlockUI,NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit,OnDestroy {
    @BlockUI() blockUI : NgBlockUI; 
    componentDestroyed: Subject<boolean> = new Subject();
    constructor(
        public router: Router,
        private authencticateService : AuthencticateService
    ) {}
    username :string;
    password:string;
    user: UserModel;
    ngOnInit() {
        this.user = new UserModel();
        localStorage.setItem('isLoggedin', 'false');
    }

    ngOnDestroy(){
        this.componentDestroyed.next(true);
        this.componentDestroyed.complete();
    }

    onLoggedin() {
        this.blockUI.start();
        localStorage.setItem('isLoggedin', 'false');
        this.user = new UserModel();
        this.user.userName = this.username;
        this.user.password = this.password;
        this.authencticateService.authenticateUser(this.user).subscribe(
            data => {
              this.blockUI.stop();
              if(data!=null && data.loginStatus===true){
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['candidates']);     
              }
              else{
                  this.router.navigate(['login']);
              }

            },
            err => {
              this.blockUI.stop();    
              this.router.navigate(['login']);    
              //this._flashMessagesService.show('Server Error. Please try after sometime.', { cssClass: 'alert-danger', timeout: 10000 });  
            },
            
          );

       
    }
}
