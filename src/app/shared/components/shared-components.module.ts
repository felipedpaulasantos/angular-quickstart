import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from "ngx-spinner";
import { RouterModule } from "@angular/router";
import { HighlightModule } from "ngx-highlightjs";

import { AccordionComponent } from "./accordion/accordion.component";
import { MenuItemComponent } from "./accordion/menu-item/menu-item.component";
import { CardPanelModule } from "src/app/guia-caixa/components/card-panel/card-panel.module";
import { CardPanelComponent } from "src/app/guia-caixa/components/card-panel/card-panel.component";

@NgModule({
	declarations: [
		AccordionComponent,
		MenuItemComponent
	],
	imports: [
		CommonModule,
		NgxSpinnerModule,
		RouterModule,
		HighlightModule,
		CardPanelModule
	],
	exports: [
		AccordionComponent,
		CardPanelComponent
	]
})
export class SharedComponentsModule { }
