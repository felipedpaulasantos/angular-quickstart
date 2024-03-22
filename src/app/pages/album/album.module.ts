import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from "./album-routing.module";
import { CaixaDatatableModule } from "src/app/guia-caixa/components/datatable/caixa-datatable.module";

@NgModule({
  imports: [
    CommonModule,
		AlbumRoutingModule,
		CaixaDatatableModule
  ],
  declarations: [AlbumComponent]
})
export class AlbumModule { }
