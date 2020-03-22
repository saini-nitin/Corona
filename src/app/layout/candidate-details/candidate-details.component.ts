import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CandidateService } from '../services/candidate.service';
import { BlockUI,NgBlockUI } from 'ng-block-ui';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { routerTransition } from '../../router.animations';
import { Candidate } from '../candidate/model/Candidate';
import { Observable } from 'rxjs/Rx';
import { StorageModel } from '../candidate/model/StorageModel';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss'],
  animations: [routerTransition()]
})
export class CandidateDetailsComponent implements OnInit,OnDestroy {
  @BlockUI() blockUI: NgBlockUI; 
  componentDestroyed: Subject<boolean> = new Subject();
  readOnly = false;
  id: number;
  panelOpenState = true;
  candidateIdValue:string;
  private sub: any;
  currentStatusDropDown : any;
  copyOfCandidateDetails = new Candidate();  
  candidateDetails =  new Candidate();
  intialStatusValue :any;
  step = 0;
  interviewData  = new StorageModel();
  disablePage = false;
  errorMessage : string;
  validationErrors = "";
  // variables to handle week end date logic
  recievedDateObj : any;
  weekEndingDateObj:any;
  
  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService,
    private _flashMessagesService : FlashMessagesService,
    private router:Router, 
    private storageService : StorageService
  ) { }

  ngOnInit() {  
        this.blockUI.start();
        this.toggleEdit();
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
        });
        this.getCombinedServiceData();      
  }
  
  getCombinedServiceData():void{
    //to load bot the candidate details and status drop down at the same time
    this.sub = Observable.forkJoin(this.candidateService.getCandidateDetails(this.id),this.candidateService.getCandidatesCurrentStatusValues())
    .subscribe(
      data => {
       this.candidateDetails = data[0];
       this.setFormsData(this.candidateDetails);   
       this.candidateIdValue = this.candidateDetails.candidateId;   
       this.copyOfCandidateDetails = this.candidateDetails;
       this.currentStatusDropDown=data[1];
       for (let entry of this.currentStatusDropDown) {
            if(entry.currentStatus===this.candidateDetails.status){
              this.intialStatusValue = entry;
            }
       }   
       this.blockUI.stop(); 
      },
      err =>{
        this.disablePage = true;
        if(err!=null){
          if(err.status==404){
            this.errorMessage = err.error.message;
          }
          else if(err.status==500){
            this.errorMessage = 'Server Error. Please try after sometime.';            
          }      
        }
        this.errorFunction(this.errorMessage);        
        this.blockUI.stop(); 
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
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
    recievedDate: new FormControl({value:''}, Validators.compose([
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
    ])),
    interviewId: new FormControl('', Validators.compose([
     
    ])),
    responseStatus: new FormControl('', Validators.compose([
      
    ])),
    // intialStatusValue: new FormControl('', Validators.compose([
      
    // ]))
  })

  setFormsData(candidateDetails) {
    this.createCandidateForm.setValue(candidateDetails);
  }

  toggleEdit(){
    this.readOnly = !this.readOnly;
    const state = this.readOnly ? 'disable' : 'enable';
    this.toggleControl(state);
    // Object.keys(this.createCandidateForm.controls).forEach((controlName) => {
    //     if(controlName!='candidateId'){
    //         this.createCandidateForm.controls[controlName][state](); // disables/enables each form control based on 'this.formDisabled'
    //     }else{
    //       this.createCandidateForm.controls[controlName]['disable'](); // disables/enables each form control based on 'this.formDisabled'
    //     }
    // }); 
    //this.createCandidateForm.controls["candidateId"]['disable'](); // disables/enables each form control based on 'this.formDisabled'
    
  }

 
  errorFunction(err) :void{
    this._flashMessagesService.show(err, { cssClass: 'alert-danger', timeout: 10000 }); 
  }

  updateCandidateDetails(candidateDetails):void{
      this.blockUI.start();
      if(candidateDetails!=null){
        candidateDetails.candidateId = this.candidateIdValue;
        if(candidateDetails.status!==null){
          candidateDetails.status = candidateDetails.status.currentStatus;
        }
      }     
      // console.log('update data candidateDetails start',candidateDetails);    
      
      this.sub = this.candidateService.updateCandidateDetails(candidateDetails).subscribe(
        data =>{
            console.log('update data',data);
            this.toggleEdit();
            if(data!=null && data.responseStatus==null){
              window.scroll(0,0);
              this._flashMessagesService.show("Candiadte Details updated successfully", { cssClass: 'alert-success', timeout: 10000,showCloseBtn: true});               
              //this._flashMessagesService.grayOut(true); 
            }
            this.blockUI.stop();
        },
        err =>{
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
      )
  }

  cancel():void{
    this.readOnly = !this.readOnly;
    const state = this.readOnly ? 'disable' : 'enable';
    //this.candidateDetails = JSON.parse(JSON.stringify(this.copyOfCandidateDetails));
    //this.copyOfCandidateDetails.candidateId=this.candidateIdValue;
    //console.log('this.copyOfCandidateDetails',this.copyOfCandidateDetails);
    this.setFormsData(this.copyOfCandidateDetails); 
    this.toggleControl(state); 
  }

  toggleControl(state){
    Object.keys(this.createCandidateForm.controls).forEach((controlName) => {
      if(controlName!='candidateId'){
          this.createCandidateForm.controls[controlName][state](); // disables/enables each form control based on 'this.formDisabled'
      }else{
        this.createCandidateForm.controls[controlName]['disable'](); // disables/enables each form control based on 'this.formDisabled'
      }
  }); 
  }
  
  setStep(index: number) {
      this.step = index;
  }
  
  nextStep() {
      this.step++;
  }
  
  prevStep() {
      this.step--;
  }

  
  createInterview(formData):void{
      this.interviewData.key = 'interviewDetails';
      if(formData!==null && formData.value!==null){
        this.interviewData.value = formData.value;
      }
      this.storageService.set(this.interviewData);
      this.router.navigate(['create-interview']);                 
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
