import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from "./album-routing.module";
import { CaixaDatatableModule } from "src/app/guia-caixa/components/datatable/caixa-datatable.module";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  imports: [
    CommonModule,
		AlbumRoutingModule,
		CaixaDatatableModule,
		NgxPaginationModule
  ],
  declarations: [AlbumComponent]
})
export class AlbumModule { }
