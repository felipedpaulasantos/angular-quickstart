import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { GuiaCaixaModule } from "../guia-caixa/guia-caixa.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
		RouterModule,
    SharedModule,
		GuiaCaixaModule
  ],
  exports: []
})
export class HomeModule { }
