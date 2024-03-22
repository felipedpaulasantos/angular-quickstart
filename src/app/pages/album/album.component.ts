import { AlbumItem } from './../../models/album.model';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { DataTableSettings, DataTableConfig } from "src/app/guia-caixa/components/datatable/datatable-definitions";
import { AlbumService } from "src/app/services/album.service";
import { CarrinhoService } from "src/app/services/carrinho.service";
import { AccordionMenu } from "src/app/shared/components/accordion/types/accordion-menu";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent implements OnInit {

	@Input()
	public items: Array<AlbumItem[]> = [];

	@Input()
	public itemsPerColumn = 3;

	public albumItems: AlbumItem[] = [];
	public rows: AccordionMenu[] = [];
	public tableTrigger = new Subject<any>();
	public dtTrigger = new Subject<any>();
	public dtSettings: DataTableSettings = DataTableConfig.DEFAULT_SETTINGS;
	public tipoExibicao: string = 'CARD';
	public page: number = 1;
	public ultimaLarguraTela: number;
	public filter: string = '';
	private itemsCarrinho: AlbumItem[] = [];

  constructor(
		private albumService: AlbumService,
		private carrinhoService: CarrinhoService,
		private mensagemService: ToastrService,
		public loading: NgxSpinnerService,
		public cdr: ChangeDetectorRef
	) {
		this.carrinhoService.itensCarrinho$.subscribe(items => this.itemsCarrinho = items);
	}

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
		this.items = this.groupColumns(albumItems, numberOfColumns);
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
