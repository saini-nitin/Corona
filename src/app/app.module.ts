import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { MaterialModule } from './material/material.module';
import { CandidateComponent, CandidateInfoDialog } from './layout/candidate/candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogPopup } from './layout/pop-up/pop-up.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { BlockUIModule } from 'ng-block-ui';
import { InfoDialog } from './layout/info-dialog/info-dialog.component';
import { AmazingTimePickerService, AmazingTimePickerModule } from 'amazing-time-picker';
import { TimePickerComponent } from 'amazing-time-picker/src/app/atp-library/time-picker/time-picker.component';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

export const MY_FORMATS = {
    parse: {
      dateInput: 'LL',
    },
    display: {
      dateInput: 'LL',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FlashMessagesModule.forRoot(),
        BlockUIModule.forRoot({
            message: 'Loading...'            
        }),
        AmazingTimePickerModule     
    ],
    declarations: [AppComponent,DialogPopup,InfoDialog,CandidateInfoDialog],
    providers: [AuthGuard,FlashMessagesService,AmazingTimePickerService,
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
    bootstrap: [AppComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    entryComponents:[DialogPopup,InfoDialog,CandidateInfoDialog]
})
export class AppModule {}

