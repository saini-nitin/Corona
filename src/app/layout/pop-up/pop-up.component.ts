import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { Inject } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { Router } from '@angular/router';
import { FormControl,Validators,FormGroupDirective,NgForm } from '@angular/forms';
//import { StorageService } from '../message.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormGroup } from '@angular/forms';
import { StorageModel } from '../candidate/model/StorageModel';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { StorageService } from '../services/storage.service';
import { BlockUI,NgBlockUI } from 'ng-block-ui';
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AmazingTimePickerService } from 'amazing-time-picker';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit{

  candidateId: string;
  firstPanelistEmailId: string;
  secondPanelistEmailId: string;
  scheduledDate: string;
  time: string;
  location: string;
  mode: string;

  ngOnInit(){
    setTimeout(() => this.openDialog());
  }

  constructor(public dialog: MatDialog,
    private candidateService: CandidateService,
    private storageService : StorageService
  ) {}

   openDialog(): void {
    let dialogRef = this.dialog.open(DialogPopup, {
      width: '600px',
      height:'600px',
      disableClose: true,
      data: { candidateId: this.candidateId, 
        firstPanelistEmailId: this.firstPanelistEmailId,
        secondPanelistEmailId: this.secondPanelistEmailId ,
        scheduledDate: this.scheduledDate ,
        time: this.time ,
        location: this.location,
        mode:this.mode  }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}

@Component({
  selector: 'app-dialog-popup',
  templateUrl: 'dialog-popup.html',
  styleUrls: ['./pop-up.component.css']
})
export class DialogPopup  implements OnInit,OnDestroy{
  @BlockUI() blockUI: NgBlockUI; 
  candidateInterviewObj:any;
  errorMessage : string;
  componentDestroyed: Subject<boolean> = new Subject();  
  ngOnDestroy(){
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }

  
  ngOnInit(){
    this.candidateInterviewObj = this.storageService.get();
    if(this.candidateInterviewObj!=undefined && this.candidateInterviewObj!=null && 
          this.candidateInterviewObj.key==="interviewDetails"){
              this.candidateInterviewObj.scheduledDate = null;
              this.candidateInterviewObj.mode = null;
              this.candidateInterviewObj.startTime = null;
              this.candidateInterviewObj.endTime = null;
              this.candidateInterviewObj.candidateId = this.candidateInterviewObj.value.candidateId;
              this.candidateInterviewObj.firstPanelistEmailId = this.candidateInterviewObj.value.firstPanelistEmailId;
              this.candidateInterviewObj.secondPanelistEmailId = this.candidateInterviewObj.value.secondPanelistEmailId;
              this.candidateInterviewObj.location = null;
              this.candidateInterviewObj.time = null;
              this.setFormsData(this.candidateInterviewObj);  
              this.blockUI.stop();
    }
  }

  createInterviewForm = new FormGroup({
    candidateId: new FormControl('', Validators.compose([
    Validators.required
    ])),
    firstPanelistEmailId: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    secondPanelistEmailId: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
    ])),
    scheduledDate: new FormControl('', Validators.compose([
      Validators.required
    ])),
    time: new FormControl('', Validators.compose([
      Validators.required
    ])),
    location: new FormControl('', Validators.compose([
      Validators.required
    ])),
    mode: new FormControl('', Validators.compose([
      Validators.required
    ])),
    startTime: new FormControl('', Validators.compose([
      Validators.required
    ])),
    endTime: new FormControl('', Validators.compose([
      Validators.required
    ]))
  })

  formValidationMessages = {
    'candidateId': [
      { type: 'required', message: 'Candidate ID is required' }
    ],
    'firstPanelistEmailId': [
      { type: 'required', message: 'Email of panelist is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
    'secondPanelistEmailId': [
      { type: 'required', message: 'Email of panelist is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
    'scheduledDate': [
      { type: 'required', message: 'Date of interview is required' },
      { type: 'date', message: 'Enter a valid date' }
    ],
    'time': [
      { type: 'required', message: 'Time of interview is required' }
    ],
    'location': [
      { type: 'required', message: 'Location of interview is required' }
    ],
    'mode': [
      { type: 'required', message: 'Mode of interview is required' }
    ],
    'startTime': [
      { type: 'required', message: 'Start Time of interview is required' }
    ],
    'endTime': [
      { type: 'required', message: 'End Time of interview is required' }
    ]
  }


  public exportTime = {hour: 7, minute: 15, meriden: 'PM'};

  constructor(
    public dialogRef: MatDialogRef<DialogPopup>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private candidateService: CandidateService,
    private router:Router,
    private _flashMessagesService:FlashMessagesService,
    private storageService:StorageService,
    public snackBar: MatSnackBar,
    private atp: AmazingTimePickerService
  ) { }

  
  public onRevert() {
    this.exportTime = {hour: 7, minute: 15, meriden: 'PM'};
    this.snackBar.open(`Revert time to ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 500,
    });
  }

  public onSubmitDate(time) {
    this.snackBar.open(`Saved time ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 500,
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.router.navigate(['candidates']);
   // console.log('this.data',this.data);
  }

  storageData  = new StorageModel();

  onSubmit(form) : void{
    if(form.valid){
      this.createCandidateInterview(form.value);
    }
  }
  scheduledDate:string;
  createCandidateInterview(formData) :void {
    if(formData!=null && formData.scheduledDate._i!=undefined){
    this.scheduledDate = formData.scheduledDate._i.date + "/"+formData.scheduledDate._i.month + "/"+
                            formData.scheduledDate._i.year;
    }
    formData.scheduledDate = this.scheduledDate;
    this.blockUI.start();        
    this.candidateService.createCandidateInterview(formData).subscribe(
      data =>{
        this.storageData.key = 'createInterview';
        this.storageData.value=data;
        this.storageService.set(this.storageData);
        if(data!=null){
          if(data.interviewId!=null){
            this.dialogRef.close();
            this.router.navigate(['candidates']);          
          }else{
            //this.serverErrorFunction(data.responseStatus);
            this._flashMessagesService.show(data.responseStatus, { cssClass: 'alert-danger', timeout: 10000 }); 
          }
        }else{
          this.errorFunction('Server Error. Please try after sometime.');            
        }
        this.blockUI.stop();        
      },
      err =>{
        if(err!=null){
          if(err.status==404){
            this.errorMessage = err.error.message;
          }
          else if(err.status==500){
            this.errorMessage = 'Server Error. Please try after sometime.';            
          }  
          this.errorFunction(this.errorMessage);    
        }
        else{
          this.dialogRef.close();
          this.router.navigate(['candidates']);      
        }   
        this.blockUI.stop();  
      }
    );
    //this.storageService.add(this.data);
  }

  errorFunction(err) :any{
    this._flashMessagesService.show(err, { cssClass: 'alert-danger', timeout: 10000 }); 
    return;
  }

  setFormsData(candidateInterviewDetails) {
    if(candidateInterviewDetails!==null){
        delete candidateInterviewDetails.key;
        delete candidateInterviewDetails.value;
    }
    this.createInterviewForm.setValue(candidateInterviewDetails);
  }

}
