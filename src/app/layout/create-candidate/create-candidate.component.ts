import { Component, OnInit, AfterViewInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../services/candidate.service';
import { CandidateView } from '../candidate/view/candidate-view';
import { HttpClient } from '@angular/common/http';
import { routerTransition } from '../../router.animations';
import {FormControl,Validators,FormGroup} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { StorageService } from '../services/storage.service';
import { StorageModel } from '../candidate/model/StorageModel';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { BlockUI,NgBlockUI } from 'ng-block-ui';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss'],
  animations: [routerTransition()]
})
export class CreateCandidateComponent implements AfterViewInit,OnDestroy {
  @BlockUI() blockUI : NgBlockUI; 
  componentDestroyed: Subject<boolean> = new Subject();  
  private sub: any;
  private validationErrors = "";
  // variables to handle week end date logic
  recievedDateObj : any;
  weekEndingDateObj:any;
  
  ngOnDestroy() {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
    this.sub.unsubscribe();
  }

  formValidationMessages = {
    'candidateId': [
      { type: 'required', message: 'Candidate ID is required' }
    ],
    'candidateName': [
      { type: 'required', message: 'Candidate name is required' }
    ],
    'practice': [
      { type: 'required', message: 'Practice is required' }
    ],
    'customerAC': [
      { type: 'required', message: 'Customer Account is required' },
      { type: 'date', message: 'Enter a valid date' }
    ],
    'quarter': [
      { type: 'required', message: 'Quarter is required' }
    ],
    'recievedDate': [
      { type: 'required', message: 'Recieved Date is required' }
    ],
    'notes': [
      { type: 'required', message: 'Notes is required' }
    ],

    'offerPU': [
      { type: 'required', message: 'Offered Posted Unit is required' }
    ],
    'demandId': [
      { type: 'required', message: 'Demand ID is required' }
    ],
    'location': [
      { type: 'required', message: 'Location is required' }
    ],
    'doj': [
      { type: 'required', message: 'Date of joining is required' }
    ],
    'candidateContact': [
      { type: 'required', message: 'Candidate\'s Contact is required' }
    ],
    'status': [
      { type: 'required', message: 'Status is required' }
    ],
    'firstPanelistEmailId': [
      { type: 'required', message: 'Panelist Email ID is required' },
      { type: 'email', message: 'Enter a valid email' }      
    ],
    'secondPanelistEmailId': [
      { type: 'required', message: 'Panelist Email ID is required' },
      { type: 'email', message: 'Enter a valid email' }            
    ],
    'remark': [
      { type: 'required', message: 'Remark is required' }
    ],
    'background': [
      { type: 'required', message: 'Background is required' }
    ],
    'weekEndingDate': [
      { type: 'required', message: 'Week ending date is required' }
    ],
    'recievedMonth': [
      { type: 'required', message: 'Recieved Month is required' }
    ],
    'parentSkillSet': [
      { type: 'required', message: 'Parent Skill set is required' }
    ],
    'responsible': [
      { type: 'required', message: 'Responsible person is required' }
    ],
    'profileAge': [
      { type: 'required', message: 'Profile Age is required' }
    ],
    'candidateEmail': [
      { type: 'required', message: 'Candidate Email ID is required' }
    ]
  }

  createCandidateForm = new FormGroup({
    candidateId: new FormControl('', Validators.compose([
    Validators.required
    ])),
    candidateName: new FormControl('', Validators.compose([
      Validators.required
    ])),
    practice: new FormControl('', Validators.compose([
        Validators.required
    ])),
    customerAC: new FormControl('', Validators.compose([
      Validators.required
    ])),
    quarter: new FormControl('', Validators.compose([
      Validators.required
    ])),
    recievedDate: new FormControl('', Validators.compose([
      Validators.required
    ])),
    notes: new FormControl('', Validators.compose([
      Validators.required
    ])),
    offerPU: new FormControl('', Validators.compose([
      Validators.required
    ])),
    demandId: new FormControl('', Validators.compose([
      Validators.required
    ])),
    location: new FormControl('', Validators.compose([
      Validators.required
    ])),
    doj: new FormControl('', Validators.compose([
      Validators.required
    ])),


    candidateContact: new FormControl('', Validators.compose([
      Validators.required
    ])),
    status: new FormControl('', Validators.compose([
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
    candidateEmail: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    remark: new FormControl('', Validators.compose([
      Validators.required
    ])),

    background: new FormControl('', Validators.compose([
      Validators.required
    ])),
    weekEndingDate: new FormControl('', Validators.compose([
      Validators.required
    ])),
    recievedMonth: new FormControl('', Validators.compose([
      Validators.required
    ])),
    parentSkillSet: new FormControl('', Validators.compose([
      Validators.required
    ])),
    responsible: new FormControl('', Validators.compose([
      Validators.required
    ])),
    profileAge: new FormControl('', Validators.compose([
      Validators.required
    ]))
    
  })

  /* Required for Status Drop Down*/
  currentStatusDropDownControl = new FormControl('', [Validators.required]);
  currentStatusDropDown : any;
  status : any;
  /* Required for Status Drop Down*/
  
  storageData  = new StorageModel();
  constructor(private http: HttpClient, 
    private router:Router,
    private candidateService: CandidateService,
    private storageService: StorageService,
    private _flashMessagesService: FlashMessagesService
  ) {}

  
  ngAfterViewInit() {
    this.blockUI.start();        
    this.getCurrentStatusDropdown();
  }
  
  createCandidateFunction(formData):void{
    this.createCandidate(formData);
  }

  createCandidate(formData) :void {
    this.blockUI.start();    
    if(formData.status!=undefined){
      status = formData.status.currentStatus;
    }
    formData.status = status;
    this.candidateService.createCandidate(formData);
    this.sub = this.candidateService.createCandidate(formData).subscribe(
      data => {
        this.storageData.key = 'createCandidateData';
        this.storageData.value= data;
        this.storageService.set(this.storageData);
        this.blockUI.stop();        
        if(data!=null){
          if(data.candidateId!=null){
            this.router.navigate(['candidates']);         
          }else{
            this.errorFunction(data.responseStatus);
          }
        }else{
          this.errorFunction('Server Error. Please try after sometime.');                       
        }
      },
      err =>{
        console.log('binding err object',err);
        this.validationErrors="";
        window.scroll(0,0);        
        this.blockUI.stop();    
        if(err!==null){
          if(err.status==500){
              this.errorFunction('Server Error. Please try after sometime.');            
          }
          else if(err.status==400){
            if(err.error!=null && err.error!=undefined){
                if(err.error.errors!=null && err.error.errors!=undefined){
                    for(let error of err.error.errors){
                      this.validationErrors="";
                      this.validationErrors = error; 
                      this.validationErrorsFunction(this.validationErrors);                      
                    }
                } 
            }
          }
          else {
            this.errorFunction(err.error.message);            
        }
        }    
      }
    );
  }

  getCurrentStatusDropdown() :void {
    this.candidateService.getCandidatesCurrentStatusValues();
    this.sub = this.candidateService.getCandidatesCurrentStatusValues().subscribe(
      data => {
        this.currentStatusDropDown=data;
        this.blockUI.stop();                
      },
      err =>{
        this.blockUI.stop();  
        this.errorFunction('Server Error. Please try after sometime.');
      }
    );
    
  }

  errorFunction(err) :void{
    this._flashMessagesService.show(err, { cssClass: 'alert-danger', timeout: 10000,showCloseBtn: true }); 
  }

  validationErrorsFunction(err) :void{
    this._flashMessagesService.show(err, { cssClass: 'alert-danger', timeout: 5000,showCloseBtn: true}); 
  }

  

  recievedDateEvent(type: string, createCandidateForm):void{
    this.recievedDateObj = new Date(createCandidateForm.value.recievedDate);
    const receivedDateDayNumber = this.recievedDateObj.getDay();
    if(receivedDateDayNumber!==0){
      this.weekEndingDateObj = this.addDays(this.recievedDateObj,7-receivedDateDayNumber);  
    }else{
      this.weekEndingDateObj = this.recievedDateObj;
    }
    createCandidateForm.value.weekEndingDate =  this.weekEndingDateObj.toISOString();     
    createCandidateForm.patchValue(
      {weekEndingDate: this.weekEndingDateObj
      }
    ) 
  }

  addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
  }
}
