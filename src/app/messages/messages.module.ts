import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { MessageFilterFormComponent } from './message-filter-form/message-filter-form.component';
import * as ngxMask from "ngx-mask";
import { GuiaCaixaModule } from '../guia-caixa/guia-caixa.module';

@NgModule({
  declarations: [MessageFilterFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    SharedComponentsModule,
    GuiaCaixaModule
  ],
  exports: [
    MessageFilterFormComponent
  ]
})
export class MessagesModule { }
