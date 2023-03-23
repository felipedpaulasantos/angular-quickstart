import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { AccordionMenu } from "../shared/components/accordion/types/accordion-menu";
import { mockedSideMenuItems } from "../shared/constants";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  constructor(
    private fb: UntypedFormBuilder  ) {}

  rows: any[] = [];
  resources: AccordionMenu[] = mockedSideMenuItems;

  contratos = [];

  formCpfNis = this.fb.group({
    cpf: [null, [Validators.required]],
    nis: [null, [Validators.required]]
  });
  cliente = null;

  previaSrc: string;
  uploadedFile: File = null;

  ngOnInit() {
    this.rows = this.groupColumns(this.resources);
  }

  groupColumns(resources: any[]): any[] {
    const filteredResources = resources.filter(resource => {
      return (resource.enabled && resource.isLink) &&
      (resource.name != "Início");
    });
    const newRows = [];
    for (let index = 0; index < filteredResources.length; index += 3) {
      newRows.push(filteredResources.slice(index, index + 3));
    }

    return newRows;
  }
}
