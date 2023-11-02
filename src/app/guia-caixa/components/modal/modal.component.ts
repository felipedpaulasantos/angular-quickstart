import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	OnDestroy} from "@angular/core";
import { ComponenteParaInjetar, ModalService } from "../../services/modal.service";
import { ModalOptions, ModalSize, defaultModalOptions } from "./modal-options";
import { CxModalDirective } from "./cx-modal.directive";
import { FooterComponent } from "src/app/layout/footer/footer.component";

declare var $: any;

@Component({
	selector: "cx-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit, OnDestroy {

	@ViewChild("defaultModal", { static: true })
	private modal!: ElementRef<HTMLInputElement>;

	@ViewChild(CxModalDirective, {static: true}) 
	private modalBodyHost!: CxModalDirective;

	public modalSize = ModalSize;
	public titulo: String = "";
	public mensagem: String = "";
	public btOkTexto: String = "Ok";
	public btCancelarTexto: String = "Fechar";
	public showCancelar = false;
	public classTitulo = "text-principal";
	public btnOkClass = "btn btn-accent";
	public btnCancelarClass = "btn btn-cancel";
	public modalDialogClass = "modal-lg";
	public modalBodyClass = "";
	public modalHeaderClass = "bg-accent";
	public modalFooterClass = "";
	public centralizado = false;
	public tamanho = ModalSize.NORMAL;

	constructor(
		private modalService: ModalService
	) { }

	ngOnInit() {
		this.modalService.showEvent.subscribe((options: ModalOptions) => {
			this.config(options);
			this.show();
		});
		this.modalService.injetarModalDinamico$.subscribe((componente: ComponenteParaInjetar) => {
			this.loadComponent(componente);
		});
	}

	config(options: ModalOptions) {
		this.titulo = options.titulo || defaultModalOptions.titulo;
		this.mensagem = options.mensagem || defaultModalOptions.mensagem;
		this.btOkTexto = options.btOkTexto || defaultModalOptions.btOkTexto;
		this.btnOkClass = options.btnOkClass || defaultModalOptions.btnOkClass;

		this.btnCancelarClass = options.btnCancelarClass || defaultModalOptions.btnCancelarClass;
		this.btCancelarTexto = options.btCancelarTexto || defaultModalOptions.btCancelarTexto;

		this.showCancelar = options.showCancelar;
		this.classTitulo = options.classTitulo || defaultModalOptions.classTitulo;

		this.centralizado = options.centralizado;
		this.tamanho = (options.tamanho != undefined && options.tamanho != null) ? options.tamanho : defaultModalOptions.tamanho;

		this.modalBodyClass = options.modalBodyClass || defaultModalOptions.modalBodyClass;
		this.modalHeaderClass = options.modalHeaderClass || defaultModalOptions.modalHeaderClass;
		this.modalFooterClass = options.modalFooterClass || defaultModalOptions.modalFooterClass;
	}

	public show() {
		$(this.modal.nativeElement).modal("show");
	}

	public cancelar() {
		this.modalService.btCancelarEvent.emit(true);
	}

	public ok() {
		this.modalService.btOKEvent.emit(true);
	}

	public loadComponent(componente: ComponenteParaInjetar): void {
		if (!componente) return;
		const viewContainerRef = this.modalBodyHost.viewContainerRef;
		viewContainerRef.clear();
		this.show();
		const tipo = componente?.componente;
		const componentRef = viewContainerRef?.createComponent<typeof tipo>(tipo);
		Object.assign(componentRef?.instance, componente?.data);
	}

	ngOnDestroy() {
	}

}
