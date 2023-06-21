import { Component, Input, OnInit } from '@angular/core';
import { AccordionMenu } from "src/app/shared/components/accordion/types/accordion-menu";
import { CardPanelStyle } from "./card-panel-style.enum";

@Component({
  selector: 'app-card-panel',
  templateUrl: './card-panel.component.html',
  styleUrls: ['./card-panel.component.css']
})
export class CardPanelComponent implements OnInit {

  constructor() { }

	cardStyleEnum = CardPanelStyle;

	@Input()
	items: AccordionMenu[] = [];

	/* TODO: alterar a classe das colunas */
	@Input()
	itemsPerColumn = 3;

	@Input()
	cardStyle = CardPanelStyle.SIMPLE;

	rows: AccordionMenu[] = [];

  ngOnInit() {
    this.rows = this.groupColumns(this.items, this.itemsPerColumn);
  }

  groupColumns(resources: any[], n: number): any[] {
    const filteredResources = resources.filter(resource => {
      return (resource.enabled && resource.isLink) &&
      (resource.name != "Início");
    });
    const newRows = [];
    for (let index = 0; index < filteredResources.length; index += n) {
      newRows.push(filteredResources.slice(index, index + n));
    }
		return newRows;
	}

}
