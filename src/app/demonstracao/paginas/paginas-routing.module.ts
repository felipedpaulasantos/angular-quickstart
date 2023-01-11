import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PaginasComponent } from "./paginas.component";

const routes: Routes = [
  {
    path: "", component: PaginasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
