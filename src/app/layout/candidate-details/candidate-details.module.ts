import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../../material/material.module';
import { PageHeaderModule } from '../../shared/index';
import { FlashMessagesModule,FlashMessagesService } from 'angular2-flash-messages';
import { BlockUIModule } from 'ng-block-ui';
import { CandidateDetailsComponent } from './candidate-details.component';
import { CandidateDetailsRoutingModule } from './candidate-details-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        CandidateDetailsRoutingModule,
        MaterialModule,
        PageHeaderModule,
        FlashMessagesModule.forRoot(),
        BlockUIModule.forRoot({
            message: 'Loading...'            
        }),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        CandidateDetailsComponent
    ],
    providers:[FlashMessagesService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CandidateDetailsModule {}
