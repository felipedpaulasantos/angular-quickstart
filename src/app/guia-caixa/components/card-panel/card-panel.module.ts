import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPanelComponent } from './card-panel.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
		RouterModule
  ],
  declarations: [CardPanelComponent],
	exports: [CardPanelComponent]
})
export class CardPanelModule { }
