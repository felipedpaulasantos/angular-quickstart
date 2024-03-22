import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from "ngx-spinner";
import { Subject } from "rxjs";
import { DataTableSettings, DataTableConfig } from "src/app/guia-caixa/components/datatable/datatable-definitions";
import { AlbumItem } from "src/app/models/album.model";
import { AlbumService } from "src/app/services/album.service";
import { AccordionMenu } from "src/app/shared/components/accordion/types/accordion-menu";

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
	public tipoExibicao: string;

  constructor(
		private albumService: AlbumService,
		private loading: NgxSpinnerService
	) { }

  ngOnInit() {
		this.consultaApi();
  }

	private consultaApi(): void {
		this.loading.show();
		this.albumService.consultaApiAlbum().subscribe({
			next: (apiResponse) => this.organizaItems(apiResponse),
			error: (error) => console.error(error.message),
			complete: () => {}
		});
	}

	private organizaItems(albumItems: AlbumItem[]): void {
		this.albumItems = albumItems;
		albumItems.forEach(item => {
			//Utils.imageFromUrlToBase64(item.url).then(base64 => item.url = base64);
			//Utils.imageFromUrlToBase64(item.thumbnailUrl).then(base64 => item.thumbnailUrl = base64);
		});
		this.items = this.groupColumns(albumItems.slice(0,10), 5);
		this.dtTrigger.next(true);
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
