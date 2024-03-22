import { Component, Input, OnInit, ElementRef, ViewChild, Renderer2 } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable, of } from "rxjs";

import { UserService } from "../../authentication/users/user.service";
import { User } from "../../authentication/users/user";
import { ModalService } from "src/app/guia-caixa/services/modal.service";
import { SideMenuService } from "../side-menu/side-menu.service";
import { Tema } from "src/app/guia-caixa/services/style-guia-caixa.service";
import { LOGO_CAIXA_BRANCO_SRC, LOGO_COMPLETO_BRANCO_SRC, LOGO_HEADER_ABREV, LOGO_HEADER_COMPLETO, Meses } from "src/app/guia-caixa/constants/constants";
import { StyleService } from "src/app/services/style.service";
import { GlobalThemes } from "src/app/models/global-style";
import { CarrinhoService } from "src/app/services/carrinho.service";
import { AlbumItem } from "src/app/models/album.model";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class HeaderComponent implements OnInit {

	public useImgLogo = false;
	public useHeaderLogo = true;
	public imgLogoMenuClosed = LOGO_CAIXA_BRANCO_SRC;
  public imgLogoMenuOpen = LOGO_COMPLETO_BRANCO_SRC;
	public headerLogoMenuClosed = LOGO_HEADER_ABREV;
	public headerLogoMenuOpen = LOGO_HEADER_COMPLETO;

  @ViewChild("headerGeral") headerGeral: ElementRef;
  @Input() tema: Tema;
  @Input() resources;
  public user$ = new Observable<User>(null);
  public user: User;
  public isMenuAberto: boolean;
  public dataHora: string;

  public currentFontSize: string;
  public currentTheme: GlobalThemes;

	public itemsCarrinho$: Observable<AlbumItem[]>;

  constructor(
    private oauthService: OAuthService,
    private userService: UserService,
    private modalService: ModalService,
    private sidemenuService: SideMenuService,
    private styleService: StyleService,
		private carrinhoService: CarrinhoService
  ) {
    this.user$ = this.userService.perfil;
    this.sidemenuService.isAberto$.subscribe(isAberto => this.isMenuAberto = isAberto);
    this.styleService.currentFontSize$.subscribe(fontSize => this.currentFontSize = fontSize);
    this.styleService.currentGlobalStyle$.subscribe(theme => this.currentTheme = theme);
    this.showDate();
    this.setDefaultTheme();
		this.itemsCarrinho$ = this.carrinhoService.itensCarrinho$;
		this.naoFecharDropdownAoClicarDentro();
  }

	/**
	 * Fix do dropdown do Bootstrap
	 * Ao clicar na area interna do dropdown, ele nao fechara
	 */
	private naoFecharDropdownAoClicarDentro() {
		$(document).on('click', '.notification-container .dropdown-menu', function (e) {
			e.stopPropagation();
		});
	}

  public fontSizes = [
    { name: "Pequeno", value: "13px" },
    { name: "Médio", value: "14px" },
    { name: "Grande", value: "15px" },
    { name: "Muito Grande", value: "16px" },
    { name: "Extra Grande", value: "17px" }
  ];

  public themes: GlobalThemes[] = [];

  ngOnInit(): void {
    this.user = this.setMockUser();
    const themes = GlobalThemes.getThemes();
    themes.forEach(theme => {
      const body = theme.value.theme.cxBodyBgColor;
      const secundario = theme.value.theme.cxAccent;
      const textColor = theme.value.theme.cxBodyTextColor;
      const style = getComputedStyle(document.body);
      const colorBody = style.getPropertyValue(body);
      const colorSecundario = style.getPropertyValue(secundario);
      const colorText = style.getPropertyValue(textColor);
      if (theme.value.name === "highContrast") {
        theme["background"] = `linear-gradient(-45deg, ${colorText}, ${colorText} 49%, white 49%, white 51%, ${colorBody} 51%)`;
      } else {
        theme["background"] = `linear-gradient(-45deg, ${colorSecundario}, ${colorSecundario} 49%, white 49%, white 51%, ${colorBody} 51%)`;
      }
    });
    this.themes = themes;
  }

  public toggleHeaderBackground() {
    const temaAtual = this.currentTheme.value.theme;
    const headerBgVariableValue = this.styleService.getCssVariableValue("--cxHeaderBgColor");
    if (headerBgVariableValue === this.styleService.getCssVariableValue(temaAtual.cxHeaderBgColor)) {
      this.styleService.setCssVariable(
        "--cxHeaderBgColor",
        "linear-gradient(90deg, #005CA9 40%, #54BBAB 100%)"
      );
    } else {
      this.styleService.setCssVariable(
        "--cxHeaderBgColor",
        this.styleService.getCssVariableValue(temaAtual.cxHeaderBgColor)
      );
    }
  }

  public showLogoutModal() {
    this.modalService.show({
      showCancelar: true,
      titulo: "Logout",
      classTitulo: "subtitulo text-danger-dark",
      mensagem: "Deseja realmente sair?",
      btOkTexto: "Sair",
      btnOkClass: "btn btn-danger",
      btnCancelarClass: "btn btn-outline-dark",
      btCancelarTexto: "Cancelar",
      modalBodyClass: "bg-danger-dark text-cinza-light"
    });

    this.modalService.btOKEvent.subscribe(() => {
      this.sair();
    });
  }

  public sair(): void {
    this.oauthService.logOut();
  }

  public trocaMenuLateral() {
    this.sidemenuService.trocar();
  }

  public setMockUser(): User {
    return {
      nome_completo: "Usuário Teste",
      primeiro_nome: "Usuário",
      matricula: "C123456",
      roles: []
    };
  }

  public showDate(): void {
    this.setDate(new Date());
    setInterval(() => {
      this.setDate(new Date());
    }, 1000);
  }

  public setDate(data: Date) {
    const hora = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = Meses[data.getMonth()];
    const ano = data.getFullYear();

    this.dataHora = `${hora}h${minutos} - ${dia} ${mes} ${ano}`;
  }

  public setFontSize(fontSize: string): void {
    this.styleService.setFontSize(fontSize);
  }

  public setTheme(tema: string) {
    this.styleService.setGlobalTheme(tema);
  }

  public setDefaultTheme() {
    this.styleService.setDefaultStyle();
  }

	public getLogo(): string | null {
		if (this.useImgLogo) return this.isMenuAberto ? this.imgLogoMenuOpen : this.imgLogoMenuClosed;
		if (this.useHeaderLogo) return this.isMenuAberto ? this.headerLogoMenuOpen : this.headerLogoMenuClosed;
	}

}
