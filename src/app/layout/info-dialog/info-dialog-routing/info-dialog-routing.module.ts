import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDialogComponent } from '../info-dialog.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '', component: InfoDialogComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoDialogRoutingModule { }
