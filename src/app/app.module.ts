import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { OAuthModule } from "angular-oauth2-oidc";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { ToastrModule } from "ngx-toastr";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true,
	wheelPropagation: false
};
import { IConfig } from "ngx-mask/lib/ngx-mask.config";
export let options: Partial<IConfig> | (() => Partial<IConfig>);

import { AppComponent } from "./app.component";
import { ErrorsModule } from "./errors/errors.module";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home/home.module";
import { LayoutModule } from "./layout/menu.module";
import { CaixaSpinnerModule } from "./guia-caixa/components/spinner/caixa-spinner.module";
import { ModalModule } from "./guia-caixa/components/modal/modal.module";



@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		LayoutModule,
		HomeModule,
		ErrorsModule,
		//PerfectScrollbarModule,
		CaixaSpinnerModule,
		NgSelectModule,
		NgxUiLoaderModule,
		ModalModule,
		//NgxMaskModule.forRoot(),
		//OAuthModule.forRoot(),
		ToastrModule.forRoot({
			timeOut: 5000,
			progressBar: false,
			positionClass: "toast-bottom-center",
			closeButton: true,
			tapToDismiss: false,
			preventDuplicates: true,
			enableHtml: true
		})
	],
	providers: [
		{ provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
		/*  		{ provide: HTTP_INTERCEPTORS,	useClass: LoaderInterceptor, multi: true }, */
		{ provide: LOCALE_ID, useValue: "pt" }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
