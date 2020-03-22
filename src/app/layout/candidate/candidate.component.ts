import { Component, OnInit, Inject } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { CandidateService } from '../services/candidate.service';
import {HttpClient} from '@angular/common/http';
import { CandidateView } from './view/candidate-view';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { StorageService } from '../services/storage.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {  BlockUI, NgBlockUI } from 'ng-block-ui';
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
  animations: [routerTransition()]
})
export class CandidateComponent implements AfterViewInit,OnDestroy {
  @BlockUI() blockUI: NgBlockUI;  
  displayedColumns = ['candidateId', 'candidateName', 'candidateContact', 'status'];
  dataSource = new MatTableDataSource();
  componentDestroyed: Subject<boolean> = new Subject();
  private sub:any;
  storageData:any;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  createCandidateSuccessMessage:string;
  createInterviewSuccessMessgae:string;
  candidateStatus : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private http: HttpClient,
    private candidateService: CandidateService,
    private storageService : StorageService,
    private _flashMessagesService : FlashMessagesService,
    private router:Router,
    public dialog: MatDialog,
  ) {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getCandidates();
    this.storageData = this.storageService.get();
    if(this.storageData!=null && this.storageData!=undefined && this.storageData.key=='createCandidateData'){
      if(this.storageData.value!=null && this.storageData.value.candidateId!=null){
        this.createCandidateSuccessMessage = 'Candidate - '+this.storageData.value.candidateId+' created successfully';
        this._flashMessagesService.show(this.createCandidateSuccessMessage, { cssClass: 'alert-success', timeout: 10000 });   
        //this._flashMessagesService.grayOut(true);        
      }
    }
    if(this.storageData!=null && this.storageData!=undefined && this.storageData.key=='createInterview'){
      if(this.storageData.value!=null && this.storageData.value.candidateId!=null && this.storageData.value.interviewId!=null){
        this.createInterviewSuccessMessgae = 'Interview created for Candidate - '+this.storageData.value.candidateId;
        this._flashMessagesService.show(this.createInterviewSuccessMessgae, { cssClass: 'alert-success', timeout: 10000 });   
        //this._flashMessagesService.grayOut(true);        
      }
    }
    this.storageService.clear();
  }
  
  getCandidates(): void{
    this.blockUI.start();    
    this.sub = this.candidateService.getCandidates().subscribe(
      data => {
        this.dataSource.data=data.listOfCandidates;
        this.blockUI.stop();
      },
      err => {
        this.blockUI.stop();        
        this._flashMessagesService.show('Server Error. Please try after sometime.', { cssClass: 'alert-danger', timeout: 10000 });  
      },
      
    );
  }

  goToCandidateDetail(id) : void{
      this.router.navigate(['candidate-details',id]);
  }

  ngOnDestroy() {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
    this.storageService.data = this.candidateStatus;
    this.sub.unsubscribe();    
  }

  goToInfoPopup(candidate):void{
    if(candidate!=null){
          this.candidateStatus = candidate;          
          this.openDialog();  
    }     
  }
  

  openDialog(): void {
    let dialogRef = this.dialog.open(CandidateInfoDialog, {
      width: '500px',
      data : {candidateStatus : this.candidateStatus}
  });

  dialogRef.afterClosed().subscribe(result => {

  });

  }
}


@Component({
  selector: 'info-dialog',
  templateUrl: './info-dialog.html',
})
export class CandidateInfoDialog {
    constructor(
      public dialogRef: MatDialogRef<CandidateInfoDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any)
       { }
  
      
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
  