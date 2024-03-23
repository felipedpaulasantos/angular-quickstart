import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";


import { SideMenuComponent } from "./side-menu/side-menu.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { HeaderComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    PerfectScrollbarModule
  ],
  exports: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    BreadcrumbComponent
  ]
})
export class LayoutModule { }
