import { AlbumItem } from './../../models/album.model';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
exibe($event: any) {
 console.log($event)
}

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

	public async organizaItems(albumItems: AlbumItem[]): Promise<void> {
		this.albumItems = albumItems;
		albumItems.forEach(async (item) => {
			//Utils.imageFromUrlToBase64(item.url).then(base64 => item.url = base64);
			//await Utils.imageFromUrlToBase64(item.thumbnailUrl).then(base64 => item.thumbnailUrl = base64);
		});
		this.items = this.groupColumns(albumItems, 5);
		this.dtTrigger.next(true);
		this.cdr.markForCheck();
		this.loading.hide('global');
		//console.log(this.items)
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
