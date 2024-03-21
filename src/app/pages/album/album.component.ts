import { Component, Input, OnInit } from '@angular/core';
import { CardPanelStyle } from "src/app/guia-caixa/components/card-panel/card-panel-style.enum";
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
	items: AlbumItem[];

	@Input()
	itemsPerColumn = 3;

	public albumItems: AlbumItem[] = [];
	public rows: AccordionMenu[] = [];

  constructor(
		private albumService: AlbumService
	) { }

  ngOnInit() {
		this.consultaApi();
  }

	private consultaApi(): void {
		this.albumService.consultaApiAlbum().subscribe({
			next: (apiResponse) => this.organizaItems(apiResponse),
			error: (error) => console.error(error),
			complete: () => {}
		});
	}

	private organizaItems(albumItems: AlbumItem[]): void {
		this.albumItems = this.groupColumns(albumItems, 5)
	}

  private groupColumns(resources: any[], n: number): any[] {
    const filteredResources = resources.filter(resource => {
      return (resource.enabled && resource.isLink);
    });
    const newRows = [];
    for (let index = 0; index < filteredResources.length; index += n) {
      newRows.push(filteredResources.slice(index, index + n));
    }
		return newRows;
	}

}
