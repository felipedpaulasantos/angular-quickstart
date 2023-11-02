import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "./modal.component";
import { CxModalDirective } from './cx-modal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent,
    CxModalDirective
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
