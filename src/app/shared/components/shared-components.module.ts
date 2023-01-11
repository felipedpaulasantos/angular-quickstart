import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from "ngx-spinner";
import { RouterModule } from "@angular/router";
import { HighlightModule } from "ngx-highlightjs";

import { TooltipIconComponent } from "./tooltip-icon/tooltip-icon.component";
import { BackButtonComponent } from "./buttons/back-button/back-button.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { CodeViewComponent } from "./code-view/code-view.component";
import { MenuItemComponent } from "./accordion/menu-item/menu-item.component";
import { StepperModule } from "../../guia-caixa/components/stepper/stepper.module";
import { CodeFixedNavComponent } from "./code-fixed-nav/code-fixed-nav.component";
import { DocumentacaoTemplateComponent } from "./documentacao-template/documentacao-template.component";
import { DocumentacaoApiTableComponent } from './documentacao-api-table/documentacao-api-table.component';

@NgModule({
	declarations: [
		TooltipIconComponent,
		BackButtonComponent,
		AccordionComponent,
		CodeViewComponent,
		MenuItemComponent,
		CodeFixedNavComponent,
		DocumentacaoTemplateComponent,
		DocumentacaoApiTableComponent
	],
	imports: [
		CommonModule,
		NgxSpinnerModule,
		RouterModule,
		HighlightModule,
		StepperModule
	],
	exports: [
		TooltipIconComponent,
		BackButtonComponent,
		AccordionComponent,
		CodeViewComponent,
		CodeFixedNavComponent,
		DocumentacaoTemplateComponent,
		DocumentacaoApiTableComponent
	]
})
export class SharedComponentsModule { }
