import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { AccordionMenu } from "../shared/components/accordion/types/accordion-menu";
import { mockedSideMenuItems } from "../shared/constants";
import { CardPanelStyle } from "../guia-caixa/components/card-panel/card-panel-style.enum";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

	constructor(private fb: UntypedFormBuilder) {}

	cardPanelStyle: CardPanelStyle = CardPanelStyle.HORIZONTAL;

	rows: any[] = [];
	resources: AccordionMenu[] = mockedSideMenuItems;

	contratos = [];

	formCpfNis = this.fb.group({
		cpf: [null, [Validators.required]],
		nis: [null, [Validators.required]],
	});
	cliente = null;

	previaSrc: string;
	uploadedFile: File = null;

	ngOnInit() {}

}
