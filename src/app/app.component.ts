import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, NavigationEnd, RouterOutlet, Params } from "@angular/router";
import { switchMap, map, filter, tap } from "rxjs/operators";

import { fadeInAnimation } from "./shared/animations/simple-fade.animation";
import { UserService } from "./authentication/users/user.service";
import { GuiaCaixaStyleService, Tema } from "./guia-caixa/services/style-guia-caixa.service";
import { UrlRedirectService } from "./services/url-redirect.service";
import { SideMenuService } from "./layout/side-menu/side-menu.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeInAnimation]
})
export class AppComponent implements OnInit {

  public constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    public menuService: SideMenuService,
    public userService: UserService,
    public styleService: GuiaCaixaStyleService,
    public redirectService: UrlRedirectService
  ) {
    // this.authService.initSSO();
  }

  temaGlobal: Tema;

  ngOnInit(): void {
    this.setPageTitleAsRoute();
    this.styleService.globalTheme$.subscribe(tema => this.temaGlobal = tema);
  }

  setPageTitleAsRoute() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .pipe(map(() => this.activatedRoute))
    .pipe(map(route => {
      while (route.firstChild) { route = route.firstChild; }
      return route;
    }))
    .pipe(tap((route) => {
      this.redirectService.setRedirectParams(route, this.router.parseUrl(this.router.url));
    }))
    .pipe(switchMap(route => route.data))
    .subscribe(event => this.titleService.setTitle(event.title));
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"];
  }
}
