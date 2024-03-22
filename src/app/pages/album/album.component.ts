import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from "ngx-spinner";
import { Subject } from "rxjs";
import { DataTableSettings, DataTableConfig } from "src/app/guia-caixa/components/datatable/datatable-definitions";
import { AlbumItem } from "src/app/models/album.model";
import { AlbumService } from "src/app/services/album.service";
import { AccordionMenu } from "src/app/shared/components/accordion/types/accordion-menu";
import { Utils } from "src/app/shared/utils";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

	@Input()
	items: Array<AlbumItem[]> = [];

	@Input()
	itemsPerColumn = 3;

	public albumItems: AlbumItem[] = [];
	public rows: AccordionMenu[] = [];
	public tableTrigger = new Subject<any>();
	public dtTrigger = new Subject<any>();
	public dtSettings: DataTableSettings = DataTableConfig.DEFAULT_SETTINGS;
	public tipoExibicao: string = 'TABELA';

  constructor(
		private albumService: AlbumService,
		public loading: NgxSpinnerService
	) { }

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

	private async organizaItems(albumItems: AlbumItem[]): Promise<void> {
		this.albumItems = albumItems;
		albumItems.forEach(async (item) => {
			//Utils.imageFromUrlToBase64(item.url).then(base64 => item.url = base64);
			//await Utils.imageFromUrlToBase64(item.thumbnailUrl).then(base64 => item.thumbnailUrl = base64);
		});
		this.items = this.groupColumns(albumItems.slice(0,10), 5);
		this.dtTrigger.next(true);
		this.loading.hide('global');
		//console.log(this.items)
	}

  private groupColumns(resources: any[], n: number): any[][] {
    // const filteredResources = resources.filter(resource => {
    //   return (resource.enabled && resource.isLink);
    // });
		const filteredResources = resources;
    const newRows = [];
    for (let index = 0; index < filteredResources.length; index += n) {
      newRows.push(filteredResources.slice(index, index + n));
    }
		return newRows;
	}

}
