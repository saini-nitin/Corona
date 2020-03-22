import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDialogRoutingModule } from '../info-dialog-routing/info-dialog-routing.module';
import { InfoDialogComponent } from '../info-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    InfoDialogRoutingModule
  ],
  declarations: [InfoDialogComponent]
})
export class InfoDialogModule { }
