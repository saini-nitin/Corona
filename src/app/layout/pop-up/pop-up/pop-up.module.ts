import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from '../pop-up.component';
import { PopUpRoutingModule } from '../pop-up-routing/pop-up-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PopUpRoutingModule
  ],
  declarations: [PopUpComponent]
})
export class PopUpModule { }
