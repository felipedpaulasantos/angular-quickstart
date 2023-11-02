import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonComponent } from './card-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [CardButtonComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CardButtonComponent]
})
export class CardButtonModule { }
