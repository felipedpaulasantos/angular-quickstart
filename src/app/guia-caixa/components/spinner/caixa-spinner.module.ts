import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerCaixaComponent } from "./spinner.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
		NgxSpinnerModule
  ],
  declarations: [SpinnerCaixaComponent],
	exports: [SpinnerCaixaComponent]
})
export class CaixaSpinnerModule { }
