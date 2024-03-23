import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";

import { InputCaixaComponent } from "./components/input-caixa/input-caixa.component";
import { InputCaixaDirective } from "./components/input-caixa/input-caixa.directive";
import { SpinnerCaixaComponent } from "./components/spinner/spinner.component";
import { ModalComponent } from "./components/modal/modal.component";
import { CaixaDatatableModule } from "./components/datatable/caixa-datatable.module";



@NgModule({
  declarations: [
    InputCaixaComponent,
		InputCaixaDirective,
    SpinnerCaixaComponent,
		ModalComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    CaixaDatatableModule,
  ],
  exports: [
    InputCaixaComponent,
		InputCaixaDirective,
    SpinnerCaixaComponent,
    ModalComponent,
    CaixaDatatableModule
  ]
})
export class GuiaCaixaModule { }
