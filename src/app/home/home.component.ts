import { Component, ComponentFactory, ComponentRef, OnInit, Renderer2 } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { AccordionMenu } from "../shared/components/accordion/types/accordion-menu";
import { mockedSideMenuItems } from "../shared/constants";
import { CardPanelStyle } from "../guia-caixa/components/card-panel/card-panel-style.enum";
import { ComponenteParaInjetar, ModalService } from "../guia-caixa/services/modal.service";
import { InputCaixaComponent } from "../guia-caixa/components/input-caixa/input-caixa.component";
import { FooterComponent } from "../layout/footer/footer.component";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

	public cardPanelStyle: CardPanelStyle = CardPanelStyle.HORIZONTAL;
	public rows: any[] = [];
	public resources: AccordionMenu[] = mockedSideMenuItems;
	public contratos = [];
	public formCpfNis = this.fb.group({
		cpf: [null, [Validators.required]],
		nis: [null, [Validators.required]],
	});
	public cliente = null;
	public previaSrc: string;
	public uploadedFile: File = null;

	constructor(
		private fb: UntypedFormBuilder,
		private modalService: ModalService,
		private renderer: Renderer2
	) {}

	ngOnInit() {}

	public mostrarModal(): void {
		const componente: ComponenteParaInjetar = { componente: FooterComponent }
		this.modalService.injetar(componente);
	}

}
