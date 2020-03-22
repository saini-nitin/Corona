import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {
  statusValue:string;
  constructor(
    public dialog: MatDialog,
    private storageService : StorageService
  ) {}
  
    openDialog(): void {
      let dialogRef = this.dialog.open(InfoDialog, {
        width: '250px',
        data : {candidateStatus : this.statusValue}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

  
  ngOnInit() {
    setTimeout(() => this.openDialog());
    this.statusValue = this.storageService.data;
    console.log('transfered data',this.statusValue);
  }

}

@Component({
  selector: 'info-dialog',
  templateUrl: './dialog.html',
})
export class InfoDialog {

  constructor(
    public dialogRef: MatDialogRef<InfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    

  onNoClick(): void {
    this.dialogRef.close();
  }

}
