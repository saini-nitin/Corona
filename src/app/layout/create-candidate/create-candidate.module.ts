import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCandidateComponent } from './create-candidate.component';

import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { MaterialModule } from '../../material/material.module';
import { PageHeaderModule } from '../../shared/index';
import { CreateCandidateRoutingModule } from './create-candidate-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule ,FlashMessagesService} from 'angular2-flash-messages';
import { BlockUIModule } from 'ng-block-ui';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    CreateCandidateRoutingModule,
    MaterialModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    BlockUIModule.forRoot({
      message: 'Loading...'            
    })        
],
  providers:[FlashMessagesService],
  declarations: [CreateCandidateComponent]
})
export class CreateCandidateModule { }
