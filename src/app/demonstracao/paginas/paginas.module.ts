import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaginasRoutingModule } from "./paginas-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PaginasComponent } from "./paginas.component";
import { SharedModule } from "src/app/shared/shared.module";
import * as ngxMask from "ngx-mask";
import { GuiaCaixaModule } from "src/app/guia-caixa/guia-caixa.module";
import { DataTablesModule } from "angular-datatables";
import { HighlightModule } from "ngx-highlightjs";
import { NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
  declarations: [PaginasComponent],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    SharedModule,
    DataTablesModule,
    GuiaCaixaModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule,
    NgxUiLoaderModule
  ]
})
export class PaginasModule { }
