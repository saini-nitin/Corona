import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { CandidateComponent } from './candidate.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { MaterialModule } from '../../material/material.module';
import { PageHeaderModule } from '../../shared/index';
import { FlashMessagesModule,FlashMessagesService } from 'angular2-flash-messages';
import { BlockUIModule } from 'ng-block-ui';




@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        CandidateRoutingModule,
        MaterialModule,
        PageHeaderModule,
        FlashMessagesModule.forRoot(),
        BlockUIModule.forRoot({
            message: 'Loading...'            
        })   
    ],
    declarations: [
        CandidateComponent
    ],
    providers:[FlashMessagesService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CandidateModule {}
