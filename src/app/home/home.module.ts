import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { CardPanelModule } from "../guia-caixa/components/card-panel/card-panel.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
		RouterModule,
    CardPanelModule
  ],
  exports: []
})
export class HomeModule { }
