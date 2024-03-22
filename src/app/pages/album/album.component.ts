import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Subject } from "rxjs";
import { DataTableSettings, DataTableConfig } from "src/app/guia-caixa/components/datatable/datatable-definitions";
import { AlbumItem } from "src/app/models/album.model";
import { AlbumService } from "src/app/services/album.service";
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

  constructor(
		private albumService: AlbumService,
		public loading: NgxSpinnerService,
		private cdr: ChangeDetectorRef
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
		this.items = this.groupColumns(albumItems, 5);
		this.dtTrigger.next(true);
		this.cdr.markForCheck();
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
