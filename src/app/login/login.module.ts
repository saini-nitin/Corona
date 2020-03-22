import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
    imports: [
        CommonModule, 
        LoginRoutingModule,
        FormsModule,
        BlockUIModule.forRoot({
            message: 'Loading...'            
        })     
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
