import { ToastrService } from 'ngx-toastr';
import { AlbumItem } from './../../models/album.model';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import { Subject } from "rxjs";
import { DataTableSettings, DataTableConfig } from "src/app/guia-caixa/components/datatable/datatable-definitions";
import { AlbumService } from "src/app/services/album.service";
import { CarrinhoService } from "src/app/services/carrinho.service";
import { AccordionMenu } from "src/app/shared/components/accordion/types/accordion-menu";

/**
 * O componente AlbumComponent representa a pagina que exibe os items retornados da API
 * Eh utilizada a estrategia ChangeDetectionStrategy.OnPush em razao do grande volume de componentes exibidos
 * Nessa estrategia, apenas quando um valor Input, Output ou async eh atualizado que o sistema de change detection sera disparado
 * Ou quando explicitamente chamado, com o cdr.markForCheck()
 */

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent implements OnInit {

	/**
	 * A propriedade rows eh um agrupamento de arrays de album items
	 * O objetivo eh agrupar os items em pequenos grupos de tamanho definido, para facilitar a organizacao na tela
	 * Esta organizacao soh eh usada no modo Card
	 */
	public rowsOfAlbumItems: Array<AlbumItem[]> = [];
	public albumItems: AlbumItem[] = [];

	/**
	 * Propriedades utilizadas no componente Datatable
	 */
	public tableTrigger = new Subject<any>();
	public dtTrigger = new Subject<any>();
	public dtSettings: DataTableSettings = DataTableConfig.DEFAULT_SETTINGS;

	/**
	 * Controla o tipo de exibicao dos items, conforme selecao do usuario
	 */
	public tipoExibicao: string = 'CARD';

	/**
	 * Controle da paginacao
	 */
	public page: number = 1;
	public filter: string = '';

	/**
	 * Determina o tamanho dos grupos de rowsOfAlbumItems, conforme tamanho da tela depois do resize
	 */
	public ultimaLarguraTela: number;

	/**
	 * Espelho da propriedade de carrinhoService
	 */
	private itemsCarrinho: AlbumItem[] = [];

  constructor(
		private albumService: AlbumService,
		private carrinhoService: CarrinhoService,
		private mensagemService: ToastrService,
		public loading: NgxSpinnerService,
		public cdr: ChangeDetectorRef
	) {
		this.carrinhoService.itemsCarrinho$.subscribe(items => this.itemsCarrinho = items);
	}

	/**
	 * Ao haver redimensionamento da tela, tbm ajusta o tamanho dos grupos de items no modo Card
	 */
	@HostListener("window:resize", ["$event"])
  onResize() {
    const larguraTela = window.innerWidth;
		this.ultimaLarguraTela = larguraTela;
		if (larguraTela < 570) {
			this.organizaItems(this.albumItems, 1)

		} else if (larguraTela < 1040) {
			this.organizaItems(this.albumItems, 2)
		} else if (larguraTela < 1322) {
			this.organizaItems(this.albumItems, 3)
		} else if (larguraTela < 1604) {
			this.organizaItems(this.albumItems, 4)
		} else {
			this.organizaItems(this.albumItems, 5)
		}
  }

  ngOnInit() {
		this.consultaApi();
  }


	private consultaApi(): void {
		this.loading.show('global');
		this.albumService.consultaApiAlbum().subscribe({
			next: (apiResponse) => this.organizaItems(apiResponse),
			error: (error) => {
				console.error(error.message);
				this.loading.hide('global');
			},
			complete: () => {}
		});
	}

	public async organizaItems(albumItems: AlbumItem[], numberOfColumns = 5): Promise<void> {
		this.albumItems = albumItems;
		if (!this.ultimaLarguraTela) this.onResize();
		this.rowsOfAlbumItems = this.groupColumns(albumItems, numberOfColumns);
		this.dtTrigger.next(true);
		this.cdr.markForCheck();
		this.loading.hide('global');
	}

  private groupColumns(resources: AlbumItem[], n: number): any[][] {
    const filteredResources = resources.filter(resource => {
			if (!this.filter) return true;
      return resource.title.indexOf(this.filter) !== -1;
    });
    const newRows = [];
    for (let index = 0; index < filteredResources.length; index += n) {
      newRows.push(filteredResources.slice(index, index + n));
    }
		return newRows;
	}

	public adicionarAoCarrinho(item: AlbumItem): void {
		this.carrinhoService.addItemCarrinho(item);
		this.mensagemService.info("Item adicionado ao carrinho!");
	}

	public removerDoCarrinho(item: AlbumItem): void {
		this.carrinhoService.removeItemCarrinho(item);
		this.mensagemService.info("Item removido do carrinho!");
	}

	public estaNoCarrinho(item: AlbumItem): boolean {
		return this.itemsCarrinho.indexOf(item) != -1;
	}

}
