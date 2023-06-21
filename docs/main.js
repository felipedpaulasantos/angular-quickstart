"use strict";
(self["webpackChunkprototipo_caixa"] = self["webpackChunkprototipo_caixa"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: "",
  redirectTo: "home",
  pathMatch: "full"
}, {
  path: "home",
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  data: {
    title: "Início",
    animation: "Home"
  }
}, {
  path: "**",
  redirectTo: "home",
  pathMatch: "full"
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      useHash: true,
      initialNavigation: 'enabledNonBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var _shared_animations_simple_fade_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/animations/simple-fade.animation */ 4210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _layout_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/side-menu/side-menu.service */ 9870);
/* harmony import */ var _authentication_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/users/user.service */ 5761);
/* harmony import */ var _guia_caixa_services_style_guia_caixa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guia-caixa/services/style-guia-caixa.service */ 3587);
/* harmony import */ var _services_url_redirect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/url-redirect.service */ 1271);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ 7252);
/* harmony import */ var _layout_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/side-menu/side-menu.component */ 9081);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/breadcrumb/breadcrumb.component */ 9289);
/* harmony import */ var _guia_caixa_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guia-caixa/components/spinner/spinner.component */ 8768);
/* harmony import */ var _guia_caixa_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guia-caixa/components/modal/modal.component */ 4689);

















const _c0 = function (a0) {
  return {
    "sidemenu-hidden": a0
  };
};
const _c1 = function (a0) {
  return {
    "sidemenu-shown": a0
  };
};
class AppComponent {
  constructor(router, activatedRoute, titleService, menuService, userService, styleService, redirectService, spinner) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.titleService = titleService;
    this.menuService = menuService;
    this.userService = userService;
    this.styleService = styleService;
    this.redirectService = redirectService;
    this.spinner = spinner;
    this.isMenuAberto = false;
    this.hasAccount = true;
    this.temaGlobal = {};
    this.routeParams = {};
    // this.authService.initSSO();
  }

  ngOnInit() {
    this.setPageTitleAsRoute();
    this.menuService.isAberto$.subscribe(isAberto => {
      this.isMenuAberto = isAberto;
    });
    this.styleService.globalTheme$.subscribe(tema => this.temaGlobal = tema);
  }
  setPageTitleAsRoute() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => this.activatedRoute)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(route => {
      this.redirectService.setRedirectParams(route, this.router.parseUrl(this.router.url));
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(route => route.data)).subscribe(event => this.titleService.setTitle(event.title));
  }
  prepareRoute(outlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"];
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_layout_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_1__.SideMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_authentication_users_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_guia_caixa_services_style_guia_caixa_service__WEBPACK_IMPORTED_MODULE_3__.GuiaCaixaStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_url_redirect_service__WEBPACK_IMPORTED_MODULE_4__.UrlRedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 12,
    vars: 9,
    consts: [[3, "fullscreen", "name"], ["id", "conteudoPrincipal", 3, "ngClass"], ["id", "mobileBackdrop", 3, "ngClass", "click"], ["id", "painelConteudoPrincipal"], ["outlet", "outlet"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-navbar")(1, "cx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "app-side-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "section", 1)(5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AppComponent_Template_div_click_5_listener() {
          return ctx.menuService.fechar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "router-outlet", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "cx-modal");
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("fullscreen", true)("name", "global");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](5, _c0, !ctx.isMenuAberto));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](7, _c1, ctx.isMenuAberto));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _layout_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__.SideMenuComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _guia_caixa_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__.SpinnerCaixaComponent, _guia_caixa_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__.ModalComponent],
    styles: ["#conteudoPrincipal[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  height: 100%;\n  transition: 0.5s;\n  z-index: 1;\n  padding-top: 4rem;\n  \n}\n\n@media (max-width: 992px) {\n  #conteudoPrincipal[_ngcontent-%COMP%] {\n    padding-left: 165px;\n  }\n}\n@media (min-width: 992px) {\n  #conteudoPrincipal[_ngcontent-%COMP%] {\n    padding-left: 264px;\n    transition: 0.5s;\n  }\n  #conteudoPrincipal.sidemenu-hidden[_ngcontent-%COMP%] {\n    padding-left: 165px;\n    transition: 0.5s;\n  }\n}\n#painelConteudoPrincipal[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  min-height: calc(100vh - 64px);\n}\n\n@media (max-width: 992px) {\n  #painelConteudoPrincipal[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n}\n#mobileBackdrop[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  display: block;\n  visibility: hidden;\n  z-index: -1;\n  transition-duration: 0.7s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: background-color, visibility;\n}\n\n@media (max-width: 992px) {\n  #mobileBackdrop.sidemenu-shown[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.6);\n    z-index: 3;\n    visibility: visible;\n  }\n}\n@media (min-width: 992px) {\n  #mobileBackdrop.sidemenu-shown[_ngcontent-%COMP%] {\n    z-index: -1;\n    visibility: hidden;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 100%;\n  height: 100vh !important;\n  max-width: 100%;\n  margin: 0;\n  transform: none;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch;\n  display: block;\n  \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Qsc0JBQUE7QUFDRDs7QUFFQTtFQUNFO0lBQ0UsbUJBQUE7RUFDRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7RUFDRjtFQUNBO0lBQ0UsbUJBQUE7SUFDQSxnQkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFFQTtFQUNDO0lBQ0csa0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw0REFBQTtFQUNBLGlEQUFBO0FBQUY7O0FBRUE7RUFDRTtJQUNFLG9DQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDRix3QkFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRldWRvUHJpbmNpcGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZy10b3A6IDRyZW07XHJcblx0LyogICBvdmVyZmxvdzogYXV0bzsgKi9cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgI2NvbnRldWRvUHJpbmNpcGFsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTY1cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICNjb250ZXVkb1ByaW5jaXBhbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2NHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgI2NvbnRldWRvUHJpbmNpcGFsLnNpZGVtZW51LWhpZGRlbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2NXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbn1cclxuXHJcbiNwYWluZWxDb250ZXVkb1ByaW5jaXBhbCB7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuXHQjcGFpbmVsQ29udGV1ZG9QcmluY2lwYWwge1xyXG4gICAgcGFkZGluZzogMnJlbSAxcmVtIDtcclxuXHR9XHJcbn1cclxuXHJcbiNtb2JpbGVCYWNrZHJvcCB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgei1pbmRleDogLTE7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC43cztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcix2aXNpYmlsaXR5O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICNtb2JpbGVCYWNrZHJvcC5zaWRlbWVudS1zaG93biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAjbW9iaWxlQmFja2Ryb3Auc2lkZW1lbnUtc2hvd24ge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG5tYWluIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuLyogICBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_shared_animations_simple_fade_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation]
    }
  });
}


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "options": () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/pt */ 7423);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-ui-loader */ 6413);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 8626);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _errors_errors_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/errors.module */ 7985);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _layout_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/menu.module */ 2865);
/* harmony import */ var _guia_caixa_components_spinner_caixa_spinner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guia-caixa/components/spinner/caixa-spinner.module */ 4381);
/* harmony import */ var _guia_caixa_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guia-caixa/components/modal/modal.module */ 90);




















(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__["default"]);
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
let options;
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [{
      provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }, /*  		{ provide: HTTP_INTERCEPTORS,	useClass: LoaderInterceptor, multi: true }, */
    {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.LOCALE_ID,
      useValue: "pt"
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _layout_menu_module__WEBPACK_IMPORTED_MODULE_4__.LayoutModule, _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomeModule, _errors_errors_module__WEBPACK_IMPORTED_MODULE_1__.ErrorsModule,
    //PerfectScrollbarModule,
    _guia_caixa_components_spinner_caixa_spinner_module__WEBPACK_IMPORTED_MODULE_5__.CaixaSpinnerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule, ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__.NgxUiLoaderModule, _guia_caixa_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__.ModalModule,
    //NgxMaskModule.forRoot(),
    //OAuthModule.forRoot(),
    ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: false,
      positionClass: "toast-bottom-center",
      closeButton: true,
      tapToDismiss: false,
      preventDuplicates: true,
      enableHtml: true
    })]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _layout_menu_module__WEBPACK_IMPORTED_MODULE_4__.LayoutModule, _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomeModule, _errors_errors_module__WEBPACK_IMPORTED_MODULE_1__.ErrorsModule,
    //PerfectScrollbarModule,
    _guia_caixa_components_spinner_caixa_spinner_module__WEBPACK_IMPORTED_MODULE_5__.CaixaSpinnerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule, ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__.NgxUiLoaderModule, _guia_caixa_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__.ModalModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule]
  });
})();

/***/ }),

/***/ 5761:
/*!******************************************************!*\
  !*** ./src/app/authentication/users/user.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3765);






class UserService {
  constructor(http) {
    this.http = http;
    this._user = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
  }
  buscarUsuario() {
    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/usuario").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      return response;
    })
    // catchError( err =>
    //   throwError(err)
    // )
    );
  }

  cadastrarOuAtualizarUsuario(usuario) {
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/usuario", usuario).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      return response;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err)));
  }
  get perfil() {
    return this._user;
  }
  setPerfilFromIdentityClaims(identityClaims) {
    if (identityClaims) {
      const user = {
        nome: identityClaims.name,
        matricula: identityClaims.preferred_username
      };
      this._user.next(user);
    }
  }
  hasPermissao(roles) {
    if (roles && this.perfil && this.perfil.value) {
      const found = this.perfil.value.roles.some(r => roles.includes(r));
      if (found) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: "root"
  });
}


/***/ }),

/***/ 7985:
/*!*****************************************!*\
  !*** ./src/app/errors/errors.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorsModule": () => (/* binding */ ErrorsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ 9953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);



class ErrorsModule {
  static #_ = this.ɵfac = function ErrorsModule_Factory(t) {
    return new (t || ErrorsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ErrorsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErrorsModule, {
    declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
})();

/***/ }),

/***/ 9953:
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class NotFoundComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["ap-not-found"]],
    decls: 5,
    vars: 0,
    consts: [[1, "text-center"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "P\u00E1gina n\u00E3o encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " O recurso desta p\u00E1gina n\u00E3o existe ou foi removido. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 3281:
/*!***************************************************************************!*\
  !*** ./src/app/guia-caixa/components/card-panel/card-panel-style.enum.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPanelStyle": () => (/* binding */ CardPanelStyle)
/* harmony export */ });
var CardPanelStyle;
(function (CardPanelStyle) {
  CardPanelStyle["SIMPLE"] = "SIMPLE";
  CardPanelStyle["VERTICAL"] = "VERTICAL";
  CardPanelStyle["HORIZONTAL"] = "HORIZONTAL";
})(CardPanelStyle || (CardPanelStyle = {}));

/***/ }),

/***/ 9721:
/*!**************************************************************************!*\
  !*** ./src/app/guia-caixa/components/card-panel/card-panel.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPanelComponent": () => (/* binding */ CardPanelComponent)
/* harmony export */ });
/* harmony import */ var _card_panel_style_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-panel-style.enum */ 3281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);




function CardPanelComponent_div_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const resource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", resource_r3.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", resource_r3.iconClass, " fa-2x mr-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", resource_r3.name, " ");
  }
}
function CardPanelComponent_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5)(2, "div", 9)(3, "div", 10)(4, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12)(7, "div", 13)(8, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 15)(11, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const resource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", resource_r3.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", resource_r3.iconClass, " fa-3x my-0 mr-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](resource_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](resource_r3.description);
  }
}
function CardPanelComponent_div_0_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17)(2, "div", 18)(3, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 19)(6, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const resource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", resource_r3.iconClass, " fa-3x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](resource_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](resource_r3.description);
  }
}
function CardPanelComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CardPanelComponent_div_0_div_1_ng_container_1_Template, 7, 5, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CardPanelComponent_div_0_div_1_ng_container_2_Template, 13, 6, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CardPanelComponent_div_0_div_1_ng_container_3_Template, 10, 5, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.cardStyle == ctx_r2.cardStyleEnum.SIMPLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.cardStyle == ctx_r2.cardStyleEnum.HORIZONTAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.cardStyle == ctx_r2.cardStyleEnum.VERTICAL);
  }
}
function CardPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CardPanelComponent_div_0_div_1_Template, 4, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cols_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", cols_r1);
  }
}
class CardPanelComponent {
  constructor() {
    this.cardStyleEnum = _card_panel_style_enum__WEBPACK_IMPORTED_MODULE_0__.CardPanelStyle;
    this.items = [];
    /* TODO: alterar a classe das colunas */
    this.itemsPerColumn = 3;
    this.cardStyle = _card_panel_style_enum__WEBPACK_IMPORTED_MODULE_0__.CardPanelStyle.SIMPLE;
    this.rows = [];
  }
  ngOnInit() {
    this.rows = this.groupColumns(this.items, this.itemsPerColumn);
  }
  groupColumns(resources, n) {
    const filteredResources = resources.filter(resource => {
      return resource.enabled && resource.isLink && resource.name != "Início";
    });
    const newRows = [];
    for (let index = 0; index < filteredResources.length; index += n) {
      newRows.push(filteredResources.slice(index, index + n));
    }
    return newRows;
  }
  static #_ = this.ɵfac = function CardPanelComponent_Factory(t) {
    return new (t || CardPanelComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardPanelComponent,
    selectors: [["app-card-panel"]],
    inputs: {
      items: "items",
      itemsPerColumn: "itemsPerColumn",
      cardStyle: "cardStyle"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "row d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-10 col-md-6 col-xl-4 d-flex justify-content-around mb-3", 4, "ngFor", "ngForOf"], [1, "col-10", "col-md-6", "col-xl-4", "d-flex", "justify-content-around", "mb-3"], [4, "ngIf"], ["role", "button", 1, "card", "card-hover", "w-75", 3, "routerLink"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-center", "text-center"], [1, "header-subtitulo-caixa", "m-0", "mr-3", "text-center"], [1, "row", "h-100", "no-gutters"], [1, "col", "col-3", "bg-accent", "text-base", "d-flex", "align-items-center", "justify-content-center", "rounded-right"], [1, "text-center"], [1, "col", "col-9"], [1, "d-flex", "my-3", "align-items-center", "justify-content-center", "text-center", "mb-3"], [1, "subtitulo", "mb-0"], [1, "d-flex", "flex-column", "align-items-center", "my-2"], [1, "text-muted", "mb-3"], [1, "card", "card-hover", "cursor-pointer", "w-50"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "py-4", "mb-4", "bg-accent", "text-base", "rounded-bottom"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center", "mb-4"], [1, "subtitulo", "mb-4"], [1, "text-muted"]],
    template: function CardPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CardPanelComponent_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5377:
/*!***********************************************************************!*\
  !*** ./src/app/guia-caixa/components/card-panel/card-panel.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPanelModule": () => (/* binding */ CardPanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _card_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-panel.component */ 9721);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




class CardPanelModule {
  static #_ = this.ɵfac = function CardPanelModule_Factory(t) {
    return new (t || CardPanelModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CardPanelModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CardPanelModule, {
    declarations: [_card_panel_component__WEBPACK_IMPORTED_MODULE_0__.CardPanelComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_card_panel_component__WEBPACK_IMPORTED_MODULE_0__.CardPanelComponent]
  });
})();

/***/ }),

/***/ 8161:
/*!**************************************************************!*\
  !*** ./src/app/guia-caixa/components/modal/modal-options.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSize": () => (/* binding */ ModalSize),
/* harmony export */   "defaultModalOptions": () => (/* binding */ defaultModalOptions)
/* harmony export */ });
var ModalSize;
(function (ModalSize) {
  ModalSize["NORMAL"] = "";
  ModalSize["PEQUENO"] = "modal-sm";
  ModalSize["GRANDE"] = "modal-lg";
  ModalSize["MAIOR"] = "modal-xl";
})(ModalSize || (ModalSize = {}));
const defaultModalOptions = {
  titulo: "",
  mensagem: "",
  btOkTexto: "Ok",
  btCancelarTexto: "Fechar",
  showCancelar: false,
  classTitulo: "subtitulo",
  btnOkClass: "btn btn-accent",
  btnCancelarClass: "btn btn-cancel",
  modalBodyClass: "",
  modalHeaderClass: "bg-accent text-base",
  modalFooterClass: "",
  centralizado: false,
  tamanho: ModalSize.NORMAL
};

/***/ }),

/***/ 4689:
/*!****************************************************************!*\
  !*** ./src/app/guia-caixa/components/modal/modal.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _modal_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-options */ 8161);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/modal.service */ 9556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);





const _c0 = ["modalDinamico"];
const _c1 = ["defaultModal"];
function ModalComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.cancelar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.btnCancelarClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.btCancelarTexto, " ");
  }
}
const _c2 = function (a0, a1, a2, a3) {
  return {
    "modal-dialog-centered": a0,
    "modal-sm": a1,
    "modal-lg": a2,
    "modal-xl": a3
  };
};
class ModalComponent {
  constructor(modalService, componentFactoryResolver) {
    this.modalService = modalService;
    this.componentFactoryResolver = componentFactoryResolver;
    this.modalSize = _modal_options__WEBPACK_IMPORTED_MODULE_0__.ModalSize;
    this.titulo = "";
    this.mensagem = "";
    this.btOkTexto = "Ok";
    this.btCancelarTexto = "Fechar";
    this.showCancelar = false;
    this.classTitulo = "text-principal";
    this.btnOkClass = "btn btn-accent";
    this.btnCancelarClass = "btn btn-cancel";
    this.modalDialogClass = "modal-lg";
    this.modalBodyClass = "";
    this.modalHeaderClass = "bg-accent";
    this.modalFooterClass = "";
    this.centralizado = false;
    this.tamanho = _modal_options__WEBPACK_IMPORTED_MODULE_0__.ModalSize.NORMAL;
  }
  ngOnInit() {
    this.modalService.showEvent.subscribe(options => {
      this.config(options);
      this.show();
    });
    this.contextoSubscription = this.modalService.contextoInjecaoGenerico$.subscribe(contexto => {
      this.componentFactoryResolver = contexto.resolver;
      this.injectorDoComponenteParaInjetar = contexto.injector;
      this.componenteParaInjetar = contexto.componenteParaInjetar;
      this.injetarComponenteGenerico();
    });
    this.contextoSubscription = this.modalService.contextoInjecaoInstanciado$.subscribe(componentRef => {
      this.componenteParaInjetarRef = componentRef;
      this.injetarComponenteInstanciado();
    });
  }
  injetarComponenteGenerico() {
    if (!this.componenteParaInjetar) {
      this.clearComponent();
    }
    if (!this.injectorDoComponenteParaInjetar || !this.componentFactoryResolver) {
      return;
    }
    if (this.componenteInjetadoRef && this.componenteInjetadoRef.componentType && this.componenteParaInjetar.toString() === this.componenteInjetadoRef.componentType.toString()) {
      return;
    }
    this.clearComponent();
    const componentType = this.componenteParaInjetar;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.injectorComponenteInjetado = _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create([{
      provide: componentType,
      useValue: componentType
    }], this.injectorDoComponenteParaInjetar);
    this.componenteInjetadoRef = this.modalDinamicoRef.createComponent(componentFactory, 0, this.injectorComponenteInjetado);
    this.componenteInjetadoRef.changeDetectorRef.detectChanges();
  }
  injetarComponenteInstanciado() {
    this.clearComponent();
    this.modalDinamicoRef.insert(this.componenteParaInjetarRef.hostView);
    this.componenteParaInjetarRef.changeDetectorRef.detectChanges();
  }
  clearComponent() {
    this.modalDinamicoRef.clear();
    if (this.componenteInjetadoRef) {
      this.componenteInjetadoRef.destroy();
      this.componenteInjetadoRef = {};
    }
  }
  clearContext() {
    this.componentFactoryResolver;
    this.injectorDoComponenteParaInjetar = {};
  }
  ngOnDestroy() {
    this.contextoSubscription.unsubscribe();
    this.clearComponent();
  }
  config(options) {
    this.titulo = options.titulo || _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.titulo;
    this.mensagem = options.mensagem || _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.mensagem;
    this.btOkTexto = options.btOkTexto || _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.btOkTexto;
    this.btnOkClass = options.btnOkClass || _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.btnOkClass;
    this.btnCancelarClass = options.btnCancelarClass || _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.btnCancelarClass;
    this.btCancelarTexto = options.btCancelarTexto || _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.btCancelarTexto;
    this.showCancelar = options.showCancelar;
    this.classTitulo = options.classTitulo || _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.classTitulo;
    this.centralizado = options.centralizado;
    this.tamanho = options.tamanho != undefined && options.tamanho != null ? options.tamanho : _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.tamanho;
    this.modalBodyClass = options.modalBodyClass || _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.modalBodyClass;
    this.modalHeaderClass = options.modalHeaderClass || _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.modalHeaderClass;
    this.modalFooterClass = options.modalFooterClass || _modal_options__WEBPACK_IMPORTED_MODULE_0__.defaultModalOptions.modalFooterClass;
  }
  show() {
    $(this.modal.nativeElement).modal("show");
  }
  cancelar() {
    this.modalService.btCancelarEvent.emit(true);
  }
  ok() {
    this.modalService.btOKEvent.emit(true);
  }
  static #_ = this.ɵfac = function ModalComponent_Factory(t) {
    return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ModalComponent,
    selectors: [["cx-modal"]],
    viewQuery: function ModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalDinamicoRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
      }
    },
    decls: 20,
    vars: 24,
    consts: [["id", "defaultModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "defaultModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["defaultModal", ""], ["role", "document", 3, "ngClass"], [1, "modal-content"], [1, "modal-title", 3, "ngClass"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["id", "modalInjectedContent"], ["modalDinamico", ""], ["id", "btModalCancelar", "type", "button", "data-dismiss", "modal", 3, "ngClass", "click", 4, "ngIf"], ["id", "btModalOk", "type", "button", "data-dismiss", "modal", 3, "ngClass", "click"], ["id", "btModalCancelar", "type", "button", "data-dismiss", "modal", 3, "ngClass", "click"]],
    template: function ModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5)(9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](14, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ModalComponent_button_17_Template, 2, 2, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_18_listener() {
          return ctx.ok();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("modal-dialog ", ctx.modalDialogClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](19, _c2, ctx.centralizado, ctx.tamanho == ctx.modalSize.PEQUENO, ctx.tamanho == ctx.modalSize.GRANDE, ctx.tamanho == ctx.modalSize.MAIOR));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("modal-header ", ctx.modalHeaderClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.classTitulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("modal-body text-break ", ctx.modalBodyClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.mensagem, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("modal-footer ", ctx.modalFooterClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showCancelar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.btnOkClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.btOkTexto, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: [".close[_ngcontent-%COMP%] {\n  color: var(--cxBase);\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ3VpYS1jYWl4YS9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csb0JBQUE7RUFDQSxZQUFBO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2Uge1xyXG4gICBjb2xvcjogdmFyKC0tY3hCYXNlKTtcclxuICAgb3BhY2l0eTogMC45O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 90:
/*!*************************************************************!*\
  !*** ./src/app/guia-caixa/components/modal/modal.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalModule": () => (/* binding */ ModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.component */ 4689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);



class ModalModule {
  static #_ = this.ɵfac = function ModalModule_Factory(t) {
    return new (t || ModalModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ModalModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModalModule, {
    declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent]
  });
})();

/***/ }),

/***/ 4381:
/*!***********************************************************************!*\
  !*** ./src/app/guia-caixa/components/spinner/caixa-spinner.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaixaSpinnerModule": () => (/* binding */ CaixaSpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component */ 8768);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




class CaixaSpinnerModule {
  static #_ = this.ɵfac = function CaixaSpinnerModule_Factory(t) {
    return new (t || CaixaSpinnerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CaixaSpinnerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CaixaSpinnerModule, {
    declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerCaixaComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerModule],
    exports: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerCaixaComponent]
  });
})();

/***/ }),

/***/ 8768:
/*!********************************************************************!*\
  !*** ./src/app/guia-caixa/components/spinner/spinner.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerCaixaComponent": () => (/* binding */ SpinnerCaixaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 7217);


class SpinnerCaixaComponent {
  constructor() {
    this.fullscreen = false;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SpinnerCaixaComponent_Factory(t) {
    return new (t || SpinnerCaixaComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SpinnerCaixaComponent,
    selectors: [["cx-spinner"]],
    inputs: {
      fullscreen: "fullscreen",
      name: "name"
    },
    decls: 1,
    vars: 2,
    consts: [["bdColor", "rgba(265,265,265,0.3)", "color", "#2267A0", "size", "medium", "type", "ball-clip-rotate", 3, "fullScreen", "name"]],
    template: function SpinnerCaixaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", ctx.fullscreen)("name", ctx.name);
      }
    },
    dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 1879:
/*!**************************************************************************************!*\
  !*** ./src/app/guia-caixa/components/stepper/stepper-component/stepper.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperComponent": () => (/* binding */ StepperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _stepper_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stepper-directive */ 360);
/* harmony import */ var _stepper_orientation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stepper-orientation */ 9694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);





function StepperComponent_li_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const backIcon_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](backIcon_r8);
  }
}
function StepperComponent_li_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const index_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", index_r3 + 1, " ");
  }
}
const _c0 = function (a0, a1, a2, a3, a4) {
  return {
    "current-step": a0,
    "prior-step": a1,
    "previous-step": a2,
    "last-step": a3,
    "cursor-pointer": a4
  };
};
function StepperComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StepperComponent_li_2_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const index_r3 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.clickable ? ctx_r10.toStepByIndex(index_r3) : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StepperComponent_li_2_ng_container_3_Template, 2, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StepperComponent_li_2_ng_template_4_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const last_r4 = ctx.last;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", step_r2 == null ? null : step_r2.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](6, _c0, ctx_r0.currentStep == index_r3, index_r3 == ctx_r0.currentStep - 1, index_r3 < ctx_r0.currentStep, last_r4 && ctx_r0.currentStep == index_r3, ctx_r0.clickable && index_r3 < ctx_r0.currentStep && ctx_r0.currentStep < ctx_r0.steps.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getStepIcon(index_r3))("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", index_r3 < ctx_r0.currentStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", step_r2 == null ? null : step_r2.title, " ");
  }
}
function StepperComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 11);
  }
  if (rf & 2) {
    const template_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", template_r12);
  }
}
function StepperComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StepperComponent_ng_container_3_ng_container_1_Template, 1, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentStep == i_r13);
  }
}
const _c1 = function (a0, a1) {
  return {
    "horizontal": a0,
    "vertical": a1
  };
};
const _c2 = function (a0, a1) {
  return {
    "completed": a0,
    "nav-guided": a1
  };
};
class StepperComponent {
  /**
   * Injeta o serviço ChangeDetectorRef para sinalizar as mudanças ocorridas
   */
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    /**
     * Quantidade mínima e máxima de passos permitidos
    */
    this.MINIMUM_STEPS = 2;
    this.MAXIMUM_STEPS = 7;
    /**
     * Ícones de navegação do Stepper. Apenas na navegação guiada.
    */
    this.BACK_ICON_X = "fa fa-arrow-left";
    this.BACK_ICON_Y = "fa fa-arrow-up";
    /**
     * Orientação das abas, podendo ser horizontal ou vertical.
     * @param {StepperOrientation} orientation Enum com valores Horizontal (0) e Vertical (1). Padrão = 0.
    */
    this.orientation = _stepper_orientation__WEBPACK_IMPORTED_MODULE_1__.StepperOrientation.Horizontal;
    /**
     * Na variante padrão de navegação livre, é possível retornar
     * para qualquer passo anterior.
     * Na navegação guiada, é possível retornar apenas para o passo
     * imediatamente anterior.
     * @param {boolean} freeNavigation Verdadeiro para navegação livre (padrão),
     * falso para navegação guiada.
    */
    this.freeNavigation = true;
    /**
     * Lista dos passos.
     * @param {StepperItem[]} steps Array de objetos do tipo StepperItem.
    */
    this.steps = [];
    /**
      * Index do passo atual, que pode ser alterado diretamente, pelos métodos de navegação ou clicando nos passos.
      * @param {string | number} currentStep Index do passo atual. Padrão = 0.
    */
    this.currentStep = 0;
    /**
     * Define se os ícones dos passos são 'clicáveis'.
     * @param {boolean} clickable True para tornar clicável. Padrão = true.
    */
    this.clickable = true;
    /**
     * Tema de cor dos ícones
     * @param {string} theme Nome do tema. Padrão = 'primary'.
     * Outras opções: 'secondary', 'info', 'warning', 'danger', 'light', 'dark'.
    */
    this.theme = "";
    /**
     * Evento que transmite o index do novo passo atual após ser selecionado.
     * @param {string | number} changeStep Index do novo passo selecionado.
    */
    this.changeStep = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {}
  /**
    Adotando a estratégia OnPush para melhor performance,
    valida-se o valor informado para a propriedade steps
    e apenas atualiza a view caso o valor seja válido
  */
  ngOnChanges(changes) {
    if (changes.steps && changes.steps.currentValue && changes.steps.currentValue.length) {
      this.validateStepChanges(changes.steps.currentValue);
    }
  }
  validateStepChanges(newSteps) {
    const isValidLength = this.isValidLength(newSteps);
    const isCurrentIndexValid = this.isCurrentIndexValid(newSteps);
    if (isValidLength && isCurrentIndexValid) {
      this.changeDetector.markForCheck();
    }
  }
  /**
   * Inicializa os templates
  */
  ngAfterContentInit() {
    this.changeDetector.detectChanges();
  }
  /**
   * Salta para o passo de index indicado, apenas se for um passo anterior
   * Caso esteja utilizando a navegação guiada, só será aceito o passo imediatamente anterior
   * @param {string | number} index Index da nova aba a ser selecionada.
  */
  toStepByIndex(index) {
    const lastIndex = this.steps.length - 1;
    const isNotLastIndex = !(this.currentStep === lastIndex);
    const isPrevious = index < this.currentStep;
    const isImmediatePrevious = index === this.currentStep - 1;
    if (this.freeNavigation && isNotLastIndex && isPrevious || !this.freeNavigation && isNotLastIndex && isImmediatePrevious) {
      this.currentStep = index;
      this.changeStep.emit(index);
      this.changeDetector.markForCheck();
    }
  }
  /**
   * Salta para o próximo passo
  */
  next() {
    if (this.currentStep + 1 < this.steps.length) {
      this.currentStep += 1;
      this.changeStep.emit(this.currentStep);
      this.changeDetector.markForCheck();
    }
  }
  /**
   * Salta para o passo anterior
  */
  previous() {
    if (this.currentStep - 1 >= 0) {
      this.currentStep -= 1;
      this.changeStep.emit(this.currentStep);
      this.changeDetector.markForCheck();
    }
  }
  /**
    * Salta para a primeira aba. Apenas na navegação livre.
  */
  first() {
    if (this.freeNavigation) {
      this.currentStep = 0;
      this.changeStep.emit(this.currentStep);
      this.changeDetector.markForCheck();
    }
  }
  /**
   * Verifica qual ícone deve ser exibido para cada item
   * @param index Índice do item a ser analisado
  */
  getStepIcon(index) {
    if (this.freeNavigation) {
      return null;
    }
    if (!this.freeNavigation) {
      if (index === this.currentStep - 1 && this.currentStep !== this.steps.length - 1) {
        return this.orientation === _stepper_orientation__WEBPACK_IMPORTED_MODULE_1__.StepperOrientation.Horizontal ? this.BACK_ICON_X : this.BACK_ICON_Y;
      } else {
        return null;
      }
    }
  }
  /**
    * Realiza manualmente a atualização do template
  */
  update() {
    this.changeDetector.detectChanges();
  }
  /**
    * Aplica o tema definido no ícone ativo
  */
  getActiveTheme(isActive, isLast) {
    return isActive && !isLast ? `bg-${this.theme}` : "";
  }
  isValidLength(newSteps) {
    if (newSteps && newSteps.length >= this.MINIMUM_STEPS && newSteps.length > this.MAXIMUM_STEPS) {
      this.steps = newSteps.slice(0, this.MAXIMUM_STEPS);
      return true;
    }
    return false;
  }
  isCurrentIndexValid(newSteps) {
    if (newSteps && this.currentStep >= newSteps.length) {
      this.currentStep = newSteps.length - 1;
      return true;
    }
    return false;
  }
  static #_ = this.ɵfac = function StepperComponent_Factory(t) {
    return new (t || StepperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StepperComponent,
    selectors: [["cx-stepper"]],
    contentQueries: function StepperComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _stepper_directive__WEBPACK_IMPORTED_MODULE_0__.StepperDirective, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    inputs: {
      orientation: "orientation",
      freeNavigation: "freeNavigation",
      steps: "steps",
      currentStep: "currentStep",
      clickable: "clickable",
      theme: "theme"
    },
    outputs: {
      changeStep: "changeStep"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 4,
    vars: 10,
    consts: [[1, "stepper-wrapper", 3, "ngClass"], [1, "stepper", 3, "ngClass"], ["class", "step", 3, "title", "ngClass", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "step", 3, "title", "ngClass"], [1, "step-title", "waves-effect", 3, "click"], [1, "step-icon"], [4, "ngIf", "ngIfElse"], ["showCounter", ""], [1, "step-name", 3, "hidden"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
    template: function StepperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StepperComponent_li_2_Template, 8, 12, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StepperComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c1, ctx.orientation == 0, ctx.orientation == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c2, ctx.currentStep == (ctx.steps == null ? null : ctx.steps.length) - 1, !ctx.freeNavigation));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.templates);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
    styles: [".stepper-wrapper.horizontal[_ngcontent-%COMP%] {\n  max-height: 6.5rem;\n}\n\n.stepper-wrapper.vertical[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  counter-reset: section;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0;\n  margin: 0;\n  transition: justify-content 0.4s;\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper.completed[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n\n.stepper-wrapper.vertical[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n\n.stepper-wrapper.horizontal[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]    > .step[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 !important;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 6.5rem;\n  transition: width 0.4s, visibility 0.4s, opacity 0.4s;\n}\n\n.stepper-wrapper.horizontal[_ngcontent-%COMP%]    > .stepper.nav-guided[_ngcontent-%COMP%]:not(.completed)    > .step.previous-step[_ngcontent-%COMP%]:not(.prior-step) {\n  visibility: hidden !important;\n  opacity: 0;\n  width: 0 !important;\n}\n\n.stepper-wrapper.vertical[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]    > .step[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 38.5rem;\n  transition: max-height 0.4s, width 0.4s, visibility 0.4s, opacity 0.4s;\n}\n\n.stepper-wrapper.vertical[_ngcontent-%COMP%]    > .stepper.nav-guided[_ngcontent-%COMP%]:not(.completed)    > .step.previous-step[_ngcontent-%COMP%]:not(.prior-step) {\n  visibility: hidden !important;\n  width: 0 !important;\n  max-height: 0 !important;\n  opacity: 0;\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]    > .step.previous-step[_ngcontent-%COMP%] {\n  width: 6.9rem;\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper.completed[_ngcontent-%COMP%]    > .step[_ngcontent-%COMP%] {\n  width: 68px;\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]    > .step[_ngcontent-%COMP%]:last-of-type {\n  width: auto !important;\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper.completed[_ngcontent-%COMP%]    > .step.last-step[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper.completed[_ngcontent-%COMP%]    > .step.prior-step[_ngcontent-%COMP%] {\n  width: 6.9rem;\n}\n\n\n.stepper[_ngcontent-%COMP%]    > .step[_ngcontent-%COMP%]:not(:last-of-type)::after {\n  content: \"\";\n  background-color: var(--cxCancel);\n  display: inline-block;\n}\n\n.stepper-wrapper.horizontal[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]    > .step[_ngcontent-%COMP%]:not(:last-of-type)::after {\n  position: static;\n  min-width: 0.77rem;\n  width: 100%;\n  height: 1px;\n}\n\n.stepper-wrapper.vertical[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]    > .step[_ngcontent-%COMP%]:not(:last-of-type)::after {\n  position: absolute;\n  width: 0.15rem;\n  height: 100%;\n  top: 3.39rem;\n  left: 1.92rem;\n}\n\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]    > .step[_ngcontent-%COMP%]    > .step-title[_ngcontent-%COMP%] {\n  line-height: 6.5rem;\n  height: 6.5rem;\n  margin: 0;\n  padding: 0 0.3rem 0 3.69rem;\n  display: inline-block;\n  max-width: 18.8rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-shrink: 0;\n}\n\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]    > .step[_ngcontent-%COMP%]    > .step-title[_ngcontent-%COMP%]    > .step-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  position: absolute;\n  height: 2.69rem;\n  width: 2.69rem;\n  border-radius: var(--cxBorderRadiusRound);\n  text-align: center;\n  line-height: 2.5rem;\n  font-size: 1.3rem;\n  top: 2.03rem;\n  left: 0.69rem;\n  margin-right: 1px;\n  color: var(--cxContrast);\n  background-color: var(--cxCancel);\n  font-weight: 400;\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]:not(.nav-guided)    > .step[_ngcontent-%COMP%]    > .step-title[_ngcontent-%COMP%]    > .step-icon[_ngcontent-%COMP%] {\n  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]    > .step.current-step[_ngcontent-%COMP%]    > .step-title[_ngcontent-%COMP%]    > .step-icon[_ngcontent-%COMP%] {\n  background-color: var(--cxAccent);\n  color: var(--cxBase);\n  box-shadow: var(--cxShadow);\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]:not(.completed)    > .step.previous-step[_ngcontent-%COMP%]    > .step-title[_ngcontent-%COMP%]    > .step-icon[_ngcontent-%COMP%] {\n  border: 2px var(--cxSuccess) solid;\n  line-height: 2.07rem;\n  transition: background-color 0.2s, color 0.2s;\n}\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]:not(.completed)    > .step.previous-step[_ngcontent-%COMP%]    > .step-title[_ngcontent-%COMP%]    > .step-icon[_ngcontent-%COMP%]:hover {\n  border-color: var(--cxAccent);\n  background-color: var(--cxAccent);\n  color: var(--cxBase);\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper.nav-guided[_ngcontent-%COMP%]:not(.completed)    > .step.previous-step[_ngcontent-%COMP%]    > .step-title[_ngcontent-%COMP%]    > .step-icon[_ngcontent-%COMP%] {\n  background-color: var(--cxBase);\n  color: var(--cxAux);\n  transition: background-color 0.2s, color 0.2s;\n}\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper.nav-guided[_ngcontent-%COMP%]:not(.completed)    > .step.previous-step[_ngcontent-%COMP%]    > .step-title[_ngcontent-%COMP%]    > .step-icon[_ngcontent-%COMP%]:hover {\n  border-color: var(--cxAccent);\n  background-color: var(--cxAccent);\n  color: var(--cxBase);\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper.completed[_ngcontent-%COMP%]    > .step.previous-step[_ngcontent-%COMP%]    > .step-title[_ngcontent-%COMP%]    > .step-icon[_ngcontent-%COMP%] {\n  color: var(--cxContrast);\n  border: 2px var(--cxSuccess) solid;\n  background-color: var(--cxCancel);\n  font-weight: 400;\n}\n\n.stepper-wrapper[_ngcontent-%COMP%]    > .stepper[_ngcontent-%COMP%]    > .step.last-step[_ngcontent-%COMP%]    > .step-title[_ngcontent-%COMP%]    > .step-icon[_ngcontent-%COMP%] {\n  background-color: var(--cxSuccess);\n  color: var(--cxSuccessContrast);\n}\n\n\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ3VpYS1jYWl4YS9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcHBlci1jb21wb25lbnQvc3RlcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBQTtBQUVBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQSxrQkFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQSxlQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtBQUZGOztBQUtBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQUZGOztBQUtBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFLQSx3QkFBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUEsdUJBQUE7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0EsMkJBQUE7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLDhEQUFBO0FBTEY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFMRjs7QUFRQTtFQUNFLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSw2Q0FBQTtBQUxGO0FBTUU7RUFDRSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFRQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQUxGO0FBTUU7RUFDRSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFRQTtFQUNFLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQ0FBQTtFQUNBLCtCQUFBO0FBTEY7O0FBUUEsdUJBQUE7QUFFQTtFQUNFLGVBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQU5GIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFNURVBQRVIgV1JBUFBFUiAtIGRpdiAqL1xyXG5cclxuLnN0ZXBwZXItd3JhcHBlci5ob3Jpem9udGFsIHtcclxuICBtYXgtaGVpZ2h0OiA2LjVyZW07XHJcbn1cclxuXHJcbi5zdGVwcGVyLXdyYXBwZXIudmVydGljYWwge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyoqIFNURVBQRVIgLSB1bCAqL1xyXG5cclxuLnN0ZXBwZXItd3JhcHBlciA+IC5zdGVwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY291bnRlci1yZXNldDogc2VjdGlvbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2l0aW9uOiBqdXN0aWZ5LWNvbnRlbnQgMC40cztcclxufVxyXG5cclxuLnN0ZXBwZXItd3JhcHBlciA+IC5zdGVwcGVyLmNvbXBsZXRlZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxufVxyXG5cclxuLnN0ZXBwZXItd3JhcHBlci52ZXJ0aWNhbCA+IC5zdGVwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiogU1RFUCAtIGxpICovXHJcblxyXG4uc3RlcHBlci13cmFwcGVyLmhvcml6b250YWwgPiAuc3RlcHBlciA+IC5zdGVwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYuNXJlbTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzLCB2aXNpYmlsaXR5IDAuNHMsIG9wYWNpdHkgMC40cztcclxufVxyXG5cclxuLnN0ZXBwZXItd3JhcHBlci5ob3Jpem9udGFsID4gLnN0ZXBwZXIubmF2LWd1aWRlZDpub3QoLmNvbXBsZXRlZCkgPiAuc3RlcC5wcmV2aW91cy1zdGVwOm5vdCgucHJpb3Itc3RlcCkge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0ZXBwZXItd3JhcHBlci52ZXJ0aWNhbCA+IC5zdGVwcGVyID4gLnN0ZXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtaGVpZ2h0OiAzOC41cmVtO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cywgd2lkdGggMC40cywgdmlzaWJpbGl0eSAwLjRzLCBvcGFjaXR5IDAuNHM7XHJcbn1cclxuXHJcbi5zdGVwcGVyLXdyYXBwZXIudmVydGljYWwgPiAuc3RlcHBlci5uYXYtZ3VpZGVkOm5vdCguY29tcGxldGVkKSA+IC5zdGVwLnByZXZpb3VzLXN0ZXA6bm90KC5wcmlvci1zdGVwKSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnN0ZXBwZXItd3JhcHBlciA+IC5zdGVwcGVyID4gLnN0ZXAucHJldmlvdXMtc3RlcCB7XHJcbiAgd2lkdGg6IDYuOXJlbTtcclxufVxyXG5cclxuLnN0ZXBwZXItd3JhcHBlciA+IC5zdGVwcGVyLmNvbXBsZXRlZCA+IC5zdGVwIHtcclxuICB3aWR0aDogNjhweDtcclxufVxyXG5cclxuLnN0ZXBwZXItd3JhcHBlciA+IC5zdGVwcGVyID4gLnN0ZXA6bGFzdC1vZi10eXBlIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RlcHBlci13cmFwcGVyID4gLnN0ZXBwZXIuY29tcGxldGVkID4gLnN0ZXAubGFzdC1zdGVwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN0ZXBwZXItd3JhcHBlciA+IC5zdGVwcGVyLmNvbXBsZXRlZCA+IC5zdGVwLnByaW9yLXN0ZXAge1xyXG4gIHdpZHRoOiA2LjlyZW07XHJcbn1cclxuXHJcbi8qKiBTVEVQIEFGVEVSIC0gbGluaGEgKi9cclxuXHJcbi5zdGVwcGVyID4gLnN0ZXA6bm90KDpsYXN0LW9mLXR5cGUpOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeENhbmNlbCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc3RlcHBlci13cmFwcGVyLmhvcml6b250YWwgPiAuc3RlcHBlciA+IC5zdGVwOm5vdCg6bGFzdC1vZi10eXBlKTo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgbWluLXdpZHRoOiAwLjc3cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4uc3RlcHBlci13cmFwcGVyLnZlcnRpY2FsID4gLnN0ZXBwZXIgPiAuc3RlcDpub3QoOmxhc3Qtb2YtdHlwZSk6OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDAuMTVyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMy4zOXJlbTtcclxuICBsZWZ0OiAxLjkycmVtO1xyXG59XHJcblxyXG4vKiogU1RFUCBUSVRMRSAtIHNwYW4gKi9cclxuXHJcbi5zdGVwcGVyLXdyYXBwZXIgPiAuc3RlcHBlciA+IC5zdGVwID4gLnN0ZXAtdGl0bGUge1xyXG4gIGxpbmUtaGVpZ2h0OiA2LjVyZW07XHJcbiAgaGVpZ2h0OiA2LjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMC4zcmVtIDAgMy42OXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxOC44cmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLyoqIFNURVAgVElUTEUgSUNPTiAtIGRpdiAqL1xyXG5cclxuLnN0ZXBwZXItd3JhcHBlciA+IC5zdGVwcGVyID4gLnN0ZXAgPiAuc3RlcC10aXRsZSA+IC5zdGVwLWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDIuNjlyZW07XHJcbiAgd2lkdGg6IDIuNjlyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY3hCb3JkZXJSYWRpdXNSb3VuZCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgdG9wOiAyLjAzcmVtO1xyXG4gIGxlZnQ6IDAuNjlyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgY29sb3I6IHZhcigtLWN4Q29udHJhc3QpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4Q2FuY2VsKTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc3RlcHBlci13cmFwcGVyID4gLnN0ZXBwZXI6bm90KC5uYXYtZ3VpZGVkKSA+IC5zdGVwID4gLnN0ZXAtdGl0bGUgPiAuc3RlcC1pY29uIHtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLnN0ZXBwZXItd3JhcHBlciA+IC5zdGVwcGVyID4gLnN0ZXAuY3VycmVudC1zdGVwID4gLnN0ZXAtdGl0bGUgPiAuc3RlcC1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeEFjY2VudCk7XHJcbiAgY29sb3I6IHZhcigtLWN4QmFzZSk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tY3hTaGFkb3cpO1xyXG59XHJcblxyXG4uc3RlcHBlci13cmFwcGVyID4gLnN0ZXBwZXI6bm90KC5jb21wbGV0ZWQpID4gLnN0ZXAucHJldmlvdXMtc3RlcCA+IC5zdGVwLXRpdGxlID4gLnN0ZXAtaWNvbiB7XHJcbiAgYm9yZGVyOiAycHggdmFyKC0tY3hTdWNjZXNzKSBzb2xpZDtcclxuICBsaW5lLWhlaWdodDogMi4wN3JlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnM7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWN4QWNjZW50KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4QWNjZW50KTtcclxuICAgIGNvbG9yOiB2YXIoLS1jeEJhc2UpO1xyXG4gIH1cclxufVxyXG5cclxuLnN0ZXBwZXItd3JhcHBlciA+IC5zdGVwcGVyLm5hdi1ndWlkZWQ6bm90KC5jb21wbGV0ZWQpID4gLnN0ZXAucHJldmlvdXMtc3RlcCA+IC5zdGVwLXRpdGxlID4gLnN0ZXAtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3hCYXNlKTtcclxuICBjb2xvcjogdmFyKC0tY3hBdXgpO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgY29sb3IgMC4ycztcclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY3hBY2NlbnQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3hBY2NlbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLWN4QmFzZSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcHBlci13cmFwcGVyID4gLnN0ZXBwZXIuY29tcGxldGVkID4gLnN0ZXAucHJldmlvdXMtc3RlcCA+IC5zdGVwLXRpdGxlID4gLnN0ZXAtaWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWN4Q29udHJhc3QpO1xyXG4gIGJvcmRlcjogMnB4IHZhcigtLWN4U3VjY2Vzcykgc29saWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3hDYW5jZWwpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5zdGVwcGVyLXdyYXBwZXIgPiAuc3RlcHBlciA+IC5zdGVwLmxhc3Qtc3RlcCA+IC5zdGVwLXRpdGxlID4gLnN0ZXAtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3hTdWNjZXNzKTtcclxuICBjb2xvcjogdmFyKC0tY3hTdWNjZXNzQ29udHJhc3QpO1xyXG59XHJcblxyXG4vKiBFU1RJTE9TIEFESUNJT05BSVMgKi9cclxuXHJcbi5jdXJzb3ItcG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2F2ZXMtZWZmZWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 360:
/*!********************************************************************!*\
  !*** ./src/app/guia-caixa/components/stepper/stepper-directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperDirective": () => (/* binding */ StepperDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class StepperDirective {
  constructor() {}
  static #_ = this.ɵfac = function StepperDirective_Factory(t) {
    return new (t || StepperDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: StepperDirective,
    selectors: [["", "cxStepper", ""]],
    inputs: {
      stepId: ["cxStepper", "stepId"]
    }
  });
}


/***/ }),

/***/ 6819:
/*!********************************************************************************************!*\
  !*** ./src/app/guia-caixa/components/stepper/stepper-message/stepper-message.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperMessageComponent": () => (/* binding */ StepperMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


function StepperMessageComponent_div_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
  }
}
function StepperMessageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StepperMessageComponent_div_0_span_3_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.icon, " mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message);
  }
}
class StepperMessageComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.show = false;
  }
  ngOnInit() {}
  ngOnChanges(changes) {
    this.cdr.detectChanges();
  }
  static #_ = this.ɵfac = function StepperMessageComponent_Factory(t) {
    return new (t || StepperMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StepperMessageComponent,
    selectors: [["cx-stepper-message"]],
    inputs: {
      show: "show",
      message: "message",
      icon: "icon"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "stepper-message-wrapper", 4, "ngIf"], [1, "stepper-message-wrapper"], [1, "stepper-message", "rounded"], [4, "ngIf"]],
    template: function StepperMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StepperMessageComponent_div_0_Template, 4, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".stepper-message-wrapper[_ngcontent-%COMP%] {\r\n   height: 84px;\r\n   display: flex;\r\n   align-items: center;\r\n}\r\n.stepper-message[_ngcontent-%COMP%] {\r\n   background-color: #008254;\r\n   color: white;\r\n   padding: 0.7rem;\r\n   width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ3VpYS1jYWl4YS9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcHBlci1tZXNzYWdlL3N0ZXBwZXItbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csWUFBWTtHQUNaLGFBQWE7R0FDYixtQkFBbUI7QUFDdEI7QUFDQTtHQUNHLHlCQUF5QjtHQUN6QixZQUFZO0dBQ1osZUFBZTtHQUNmLFdBQVc7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyLW1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgIGhlaWdodDogODRweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc3RlcHBlci1tZXNzYWdlIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODI1NDtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 9694:
/*!**********************************************************************!*\
  !*** ./src/app/guia-caixa/components/stepper/stepper-orientation.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperOrientation": () => (/* binding */ StepperOrientation)
/* harmony export */ });
/** @enum Enum que define a orientação do stepper */
var StepperOrientation;
(function (StepperOrientation) {
  StepperOrientation[StepperOrientation["Horizontal"] = 0] = "Horizontal";
  StepperOrientation[StepperOrientation["Vertical"] = 1] = "Vertical";
})(StepperOrientation || (StepperOrientation = {}));

/***/ }),

/***/ 8390:
/*!*****************************************************************!*\
  !*** ./src/app/guia-caixa/components/stepper/stepper.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperModule": () => (/* binding */ StepperModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _stepper_component_stepper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stepper-component/stepper.component */ 1879);
/* harmony import */ var _tabber_component_tabber_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabber-component/tabber.component */ 4509);
/* harmony import */ var _stepper_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepper-directive */ 360);
/* harmony import */ var _stepper_message_stepper_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stepper-message/stepper-message.component */ 6819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);






class StepperModule {
  static #_ = this.ɵfac = function StepperModule_Factory(t) {
    return new (t || StepperModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: StepperModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StepperModule, {
    declarations: [_stepper_component_stepper_component__WEBPACK_IMPORTED_MODULE_0__.StepperComponent, _stepper_directive__WEBPACK_IMPORTED_MODULE_2__.StepperDirective, _tabber_component_tabber_component__WEBPACK_IMPORTED_MODULE_1__.TabberComponent, _stepper_message_stepper_message_component__WEBPACK_IMPORTED_MODULE_3__.StepperMessageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
    exports: [_stepper_component_stepper_component__WEBPACK_IMPORTED_MODULE_0__.StepperComponent, _stepper_directive__WEBPACK_IMPORTED_MODULE_2__.StepperDirective, _tabber_component_tabber_component__WEBPACK_IMPORTED_MODULE_1__.TabberComponent]
  });
})();

/***/ }),

/***/ 7792:
/*!*******************************************************************************!*\
  !*** ./src/app/guia-caixa/components/stepper/tabber-component/tabber-item.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabberItemState": () => (/* binding */ TabberItemState)
/* harmony export */ });
var TabberItemState;
(function (TabberItemState) {
  TabberItemState["SUCCESS"] = "success";
  TabberItemState["WARNING"] = "warning";
  TabberItemState["ERROR"] = "error";
})(TabberItemState || (TabberItemState = {}));

/***/ }),

/***/ 4509:
/*!************************************************************************************!*\
  !*** ./src/app/guia-caixa/components/stepper/tabber-component/tabber.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabberComponent": () => (/* binding */ TabberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _stepper_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stepper-directive */ 360);
/* harmony import */ var _stepper_orientation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stepper-orientation */ 9694);
/* harmony import */ var _tabber_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabber-item */ 7792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);






function TabberComponent_li_2_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 13);
  }
}
function TabberComponent_li_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const tab_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](tab_r2.icon);
  }
}
function TabberComponent_li_2_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 14);
  }
}
function TabberComponent_li_2_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 15);
  }
}
function TabberComponent_li_2_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 16);
  }
}
const _c0 = function (a0, a1) {
  return {
    "current-tab": a0,
    "cursor-pointer": a1
  };
};
function TabberComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TabberComponent_li_2_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const index_r3 = restoredCtx.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.toTabByIndex(index_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TabberComponent_li_2_i_3_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TabberComponent_li_2_i_4_Template, 1, 3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TabberComponent_li_2_i_5_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TabberComponent_li_2_i_6_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TabberComponent_li_2_i_7_Template, 1, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", tab_r2.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c0, ctx_r0.currentTab == index_r3, ctx_r0.currentTab != index_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.getActiveTheme(ctx_r0.currentTab == index_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.currentTab == index_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.currentTab != index_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tab_r2.state === ctx_r0.tabberState.SUCCESS);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tab_r2.state === ctx_r0.tabberState.WARNING);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tab_r2.state === ctx_r0.tabberState.ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tab_r2.name);
  }
}
function TabberComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 18);
  }
  if (rf & 2) {
    const template_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", template_r13);
  }
}
function TabberComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TabberComponent_ng_container_3_ng_container_1_Template, 1, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.currentTab == i_r14);
  }
}
const _c1 = function (a0, a1) {
  return {
    "horizontal": a0,
    "vertical": a1
  };
};
/** @class Componente Tabber para organizar conteúdo dinâmico ou estático em abas */
class TabberComponent {
  /**
   * Injeta o serviço ChangeDetectorRef para sinalizar as mudanças ocorridas
   */
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    /**
     * Quantidade mínima e máxima de abas permitidas
    */
    this.MINIMUM_TABS = 2;
    this.MAXIMUM_TABS = 7;
    this.tabberState = _tabber_item__WEBPACK_IMPORTED_MODULE_2__.TabberItemState;
    /**
     * Orientação das abas, podendo ser horizontal ou vertical.
     * @param {TabberOrientation} orientation Enum com valores Horizontal (0) e Vertical (1).
    */
    this.orientation = _stepper_orientation__WEBPACK_IMPORTED_MODULE_1__.StepperOrientation.Horizontal;
    /**
     * Lista das abas, com sua descrição e ícone.
     * @param {TabberItem[]} tabs Array de objetos TabberItem representando as abas.
    */
    this.tabs = [];
    /**
     * Index da aba atual que pode ser alterado diretamente, pelos métodos de navegação ou clicando nas abas.
     * @param {string | number} currentTab Index da aba atual.
    */
    this.currentTab = 0;
    /**
     * Tema de cor dos ícones
     * @param {string} theme Nome do tema. Padrão = 'primary'.
     * Outras opções: 'secondary', 'info', 'warning', 'danger', 'light', 'dark'.
    */
    this.theme = "secundario";
    /**
     * Evento que transmite o index da nova aba atual após ser selecionada.
     * @param {string | number} changeTab Index da nova aba selecionada.
    */
    this.changeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngOnInit() {}
  /**
    Adotando a estratégia OnPush para melhor performance,
    valida-se o valor informado para a propriedade tabs
    e apenas atualiza a view caso o valor seja válido
  */
  ngOnChanges(changes) {
    if (changes["tabs"]) {
      const newTabs = changes["tabs"].currentValue;
      /* Verifica se a nova lista possui comprimento válido */
      if (newTabs.length >= this.MINIMUM_TABS && newTabs.length > this.MAXIMUM_TABS) {
        this.tabs = newTabs.slice(0, this.MAXIMUM_TABS);
        this.changeDetector.detectChanges();
      }
      /* Verifica se a aba atual está em uma posição válida */
      if (this.currentTab >= newTabs.length) {
        this.currentTab = newTabs.length - 1;
      }
    }
  }
  /**
   * Inicializa os templates
  */
  ngAfterContentInit() {
    this.changeDetector.detectChanges();
  }
  /**
   * Salta para a aba de index indicado
   * @param {string | number} index Index da nova aba a ser selecionada.
  */
  toTabByIndex(index) {
    if (index != null && index != undefined && index < this.tabs.length) {
      this.currentTab = index;
      this.changeTab.emit(index);
      this.changeDetector.detectChanges();
    }
  }
  /**
   * Salta para a próxima aba
  */
  next() {
    if (this.currentTab + 1 < this.tabs.length) {
      this.currentTab += 1;
      this.changeTab.emit(this.currentTab);
      this.changeDetector.detectChanges();
    }
  }
  /**
   * Salta para a aba anterior
  */
  previous() {
    if (this.currentTab - 1 >= 0) {
      this.currentTab -= 1;
      this.changeTab.emit(this.currentTab);
      this.changeDetector.detectChanges();
    }
  }
  /**
   * Salta para a primeira aba
  */
  first() {
    this.currentTab = 0;
    this.changeTab.emit(this.currentTab);
    this.changeDetector.detectChanges();
  }
  /**
   * Salta para a última aba
  */
  last() {
    this.currentTab = this.tabs.length - 1;
    this.changeTab.emit(this.currentTab);
    this.changeDetector.detectChanges();
  }
  /**
    * Retorna o tema definido para o ícone ativo
  */
  getActiveTheme(isActive) {
    return isActive ? `bg-${this.theme}` : "";
  }
  /**
    * Realiza manualmente a atualização do template
  */
  update() {
    this.changeDetector.detectChanges();
  }
  static #_ = this.ɵfac = function TabberComponent_Factory(t) {
    return new (t || TabberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: TabberComponent,
    selectors: [["cx-tabber"]],
    contentQueries: function TabberComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _stepper_directive__WEBPACK_IMPORTED_MODULE_0__.StepperDirective, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    inputs: {
      orientation: "orientation",
      tabs: "tabs",
      currentTab: "currentTab",
      theme: "theme"
    },
    outputs: {
      changeTab: "changeTab"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    decls: 4,
    vars: 6,
    consts: [[1, "tabber-wrapper", 3, "ngClass"], [1, "tabber"], ["class", "tab", 3, "title", "ngClass", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "tab", 3, "title", "ngClass"], [1, "tab-title", "waves-effect", 3, "click"], [1, "tab-icon", 3, "ngClass"], ["class", "fa fa-arrow-down", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "fa fa-check state-icon success", 4, "ngIf"], ["class", "fa fa-exclamation state-icon warning", 4, "ngIf"], ["class", "fa fa-times state-icon danger", 4, "ngIf"], [1, "tab-name"], [1, "fa", "fa-arrow-down"], [1, "fa", "fa-check", "state-icon", "success"], [1, "fa", "fa-exclamation", "state-icon", "warning"], [1, "fa", "fa-times", "state-icon", "danger"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
    template: function TabberComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TabberComponent_li_2_Template, 10, 12, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TabberComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c1, ctx.orientation == 0, ctx.orientation == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.templates);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
    styles: [".tabber-wrapper.horizontal[_ngcontent-%COMP%] {\r\n   max-height: 6.5rem;\r\n}\r\n\r\n.tabber-wrapper.vertical[_ngcontent-%COMP%] {\r\n   max-width: 100%;\r\n}\r\n\r\n\r\n\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%] {\r\n   position: relative;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   counter-reset: section;\r\n   overflow-y: auto;\r\n   overflow-x: hidden;\r\n   padding: 0;\r\n   margin: 0;\r\n}\r\n\r\n.tabber-wrapper.vertical[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%] {\r\n   overflow: hidden;\r\n   flex-direction: column;\r\n}\r\n\r\n\r\n\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%] {\r\n   position: relative;\r\n   transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);\r\n   padding: 0 !important;\r\n   width: 100%;\r\n   display: flex;\r\n   align-items: center;\r\n   height: 6.5rem;\r\n}\r\n\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]:last-of-type {\r\n   width: auto !important;\r\n}\r\n\r\n\r\n\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]::after {\r\n   display: inline-block;\r\n   content: \"\";\r\n}\r\n\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]:not(:last-of-type)::after {\r\n   top: 3.39rem;\r\n   left: 1.92rem;\r\n   background-color: var(--cxCancel);\r\n   \r\n}\r\n\r\n.tabber-wrapper.horizontal[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]:not(:last-of-type)::after {\r\n   position: static;\r\n   min-width: 0.77rem;\r\n   width: 100%;\r\n   height: 1px;\r\n}\r\n\r\n.tabber-wrapper.vertical[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]:not(:last-of-type)::after {\r\n   position: absolute;\r\n   width: 0.15rem;\r\n   height: 100%;\r\n}\r\n\r\n\r\n\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]    > .tab-title[_ngcontent-%COMP%] {\r\n   line-height: 6.5rem;\r\n   height: 6.5rem;\r\n   margin: 0;\r\n   padding: 0 0.3rem 0 3.69rem;\r\n   display: inline-block;\r\n   max-width: 245px;\r\n   white-space: nowrap;\r\n   overflow: hidden;\r\n   text-overflow: ellipsis;\r\n   flex-shrink: 0;\r\n}\r\n\r\n\r\n\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]    > .tab-title[_ngcontent-%COMP%]    > .tab-icon[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   position: absolute;\r\n   height: 2.69rem;\r\n   width: 2.69rem;\r\n   border-radius: var(--cxBorderRadiusRound);\r\n   text-align: center;\r\n   line-height: 2.5rem;\r\n   font-size: 1.3rem;\r\n   top: 2.03rem;\r\n   left: 0.69rem;\r\n   margin-right: 1px;\r\n   color: var(--cxContrast);\r\n   background-color: var(--cxCancel);\r\n   font-weight: 400;\r\n   transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab.current-tab[_ngcontent-%COMP%]    > .tab-title[_ngcontent-%COMP%]    > .tab-icon[_ngcontent-%COMP%] {\r\n   background-color: var(--cxAccent);\r\n   color: var(--cxBase);\r\n   box-shadow: var(--cxShadow);\r\n}\r\n\r\n\r\n\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]    > .tab-title[_ngcontent-%COMP%]    > .tab-icon[_ngcontent-%COMP%]    > .state-icon[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   position: absolute;\r\n   right: -0.38rem;\r\n   top: -0.38rem;\r\n   border-radius: 0.77rem;\r\n   padding: 0.23rem;\r\n   font-size: 0.7rem;\r\n   width: 1.2rem;\r\n   height: 1.2rem;\r\n   margin: auto;\r\n}\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]    > .tab-title[_ngcontent-%COMP%]    > .tab-icon[_ngcontent-%COMP%]    > .state-icon.success[_ngcontent-%COMP%] {\r\n   background-color: var(--cxSuccess);\r\n   color: var(--cxSuccessContrast);\r\n}\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]    > .tab-title[_ngcontent-%COMP%]    > .tab-icon[_ngcontent-%COMP%]    > .state-icon.danger[_ngcontent-%COMP%] {\r\n   background-color: var(--cxDanger);\r\n   color: var(--cxDangerContrast);\r\n}\r\n.tabber-wrapper[_ngcontent-%COMP%]    > .tabber[_ngcontent-%COMP%]    > .tab[_ngcontent-%COMP%]    > .tab-title[_ngcontent-%COMP%]    > .tab-icon[_ngcontent-%COMP%]    > .state-icon.warning[_ngcontent-%COMP%] {\r\n   background-color: var(--cxWarning);\r\n   color: var(--cxWarningContrast);\r\n}\r\n\r\n\r\n\r\n.cursor-pointer[_ngcontent-%COMP%] {\r\n   cursor: pointer;\r\n}\r\n\r\n.waves-effect[_ngcontent-%COMP%] {\r\n   position: relative;\r\n   display: inline-block;\r\n   overflow: hidden;\r\n   -webkit-user-select: none;\r\n   user-select: none;\r\n   -webkit-tap-highlight-color: transparent;\r\n   vertical-align: middle;\r\n   z-index: 1;\r\n   transition: 0.3s ease-out;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ3VpYS1jYWl4YS9jb21wb25lbnRzL3N0ZXBwZXIvdGFiYmVyLWNvbXBvbmVudC90YWJiZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7O0FBRTFCO0dBQ0csa0JBQWtCO0FBQ3JCOztBQUVBO0dBQ0csZUFBZTtBQUNsQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0dBQ0csa0JBQWtCO0dBQ2xCLGFBQWE7R0FDYiw4QkFBOEI7R0FDOUIsc0JBQXNCO0dBQ3RCLGdCQUFnQjtHQUNoQixrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLFNBQVM7QUFDWjs7QUFFQTtHQUNHLGdCQUFnQjtHQUNoQixzQkFBc0I7QUFDekI7O0FBRUEsY0FBYzs7QUFFZDtHQUNHLGtCQUFrQjtHQUNsQixzR0FBc0c7R0FDdEcscUJBQXFCO0dBQ3JCLFdBQVc7R0FDWCxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLGNBQWM7QUFDakI7O0FBRUE7R0FDRyxzQkFBc0I7QUFDekI7O0FBRUEsdUJBQXVCOztBQUV2QjtHQUNHLHFCQUFxQjtHQUNyQixXQUFXO0FBQ2Q7O0FBRUE7R0FDRyxZQUFZO0dBQ1osYUFBYTtHQUNiLGlDQUFpQztHQUNqQyw2REFBNkQ7QUFDaEU7O0FBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsa0JBQWtCO0dBQ2xCLFdBQVc7R0FDWCxXQUFXO0FBQ2Q7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIsY0FBYztHQUNkLFlBQVk7QUFDZjs7QUFFQSxxQkFBcUI7O0FBRXJCO0dBQ0csbUJBQW1CO0dBQ25CLGNBQWM7R0FDZCxTQUFTO0dBQ1QsMkJBQTJCO0dBQzNCLHFCQUFxQjtHQUNyQixnQkFBZ0I7R0FDaEIsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQix1QkFBdUI7R0FDdkIsY0FBYztBQUNqQjs7QUFFQSwwQkFBMEI7O0FBRTFCO0dBQ0csYUFBYTtHQUNiLG1CQUFtQjtHQUNuQix1QkFBdUI7R0FDdkIsa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZixjQUFjO0dBQ2QseUNBQXlDO0dBQ3pDLGtCQUFrQjtHQUNsQixtQkFBbUI7R0FDbkIsaUJBQWlCO0dBQ2pCLFlBQVk7R0FDWixhQUFhO0dBQ2IsaUJBQWlCO0dBQ2pCLHdCQUF3QjtHQUN4QixpQ0FBaUM7R0FDakMsZ0JBQWdCO0dBQ2hCLDhEQUE4RDtBQUNqRTtBQUNBO0dBQ0csaUNBQWlDO0dBQ2pDLG9CQUFvQjtHQUNwQiwyQkFBMkI7QUFDOUI7O0FBRUEsZUFBZTs7QUFFZjtHQUNHLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsdUJBQXVCO0dBQ3ZCLGtCQUFrQjtHQUNsQixlQUFlO0dBQ2YsYUFBYTtHQUNiLHNCQUFzQjtHQUN0QixnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLGFBQWE7R0FDYixjQUFjO0dBQ2QsWUFBWTtBQUNmO0FBQ0E7R0FDRyxrQ0FBa0M7R0FDbEMsK0JBQStCO0FBQ2xDO0FBQ0E7R0FDRyxpQ0FBaUM7R0FDakMsOEJBQThCO0FBQ2pDO0FBQ0E7R0FDRyxrQ0FBa0M7R0FDbEMsK0JBQStCO0FBQ2xDOztBQUVBLHVCQUF1Qjs7QUFFdkI7R0FDRyxlQUFlO0FBQ2xCOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLHFCQUFxQjtHQUNyQixnQkFBZ0I7R0FDaEIseUJBQXlCO0dBR3pCLGlCQUFpQjtHQUNqQix3Q0FBd0M7R0FDeEMsc0JBQXNCO0dBQ3RCLFVBQVU7R0FFVix5QkFBeUI7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVEFCQkVSIFdSQVBQRVIgLSBkaXYgKi9cclxuXHJcbi50YWJiZXItd3JhcHBlci5ob3Jpem9udGFsIHtcclxuICAgbWF4LWhlaWdodDogNi41cmVtO1xyXG59XHJcblxyXG4udGFiYmVyLXdyYXBwZXIudmVydGljYWwge1xyXG4gICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qKiBUQUJCRVIgLSB1bCAqL1xyXG5cclxuLnRhYmJlci13cmFwcGVyID4gLnRhYmJlciB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICBjb3VudGVyLXJlc2V0OiBzZWN0aW9uO1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRhYmJlci13cmFwcGVyLnZlcnRpY2FsID4gLnRhYmJlciB7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qKiBUQUIgLSBsaSAqL1xyXG5cclxuLnRhYmJlci13cmFwcGVyID4gLnRhYmJlciA+IC50YWIge1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIHRyYW5zaXRpb246IGhlaWdodCAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIHBhZGRpbmctYm90dG9tIDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgaGVpZ2h0OiA2LjVyZW07XHJcbn1cclxuXHJcbi50YWJiZXItd3JhcHBlciA+IC50YWJiZXIgPiAudGFiOmxhc3Qtb2YtdHlwZSB7XHJcbiAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKiBUQUIgQUZURVIgLSBsaW5oYSAqL1xyXG5cclxuLnRhYmJlci13cmFwcGVyID4gLnRhYmJlciA+IC50YWI6OmFmdGVyIHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4udGFiYmVyLXdyYXBwZXIgPiAudGFiYmVyID4gLnRhYjpub3QoOmxhc3Qtb2YtdHlwZSk6OmFmdGVyIHtcclxuICAgdG9wOiAzLjM5cmVtO1xyXG4gICBsZWZ0OiAxLjkycmVtO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeENhbmNlbCk7XHJcbiAgIC8qICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7ICovXHJcbn1cclxuXHJcbi50YWJiZXItd3JhcHBlci5ob3Jpem9udGFsID4gLnRhYmJlciA+IC50YWI6bm90KDpsYXN0LW9mLXR5cGUpOjphZnRlciB7XHJcbiAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgIG1pbi13aWR0aDogMC43N3JlbTtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4udGFiYmVyLXdyYXBwZXIudmVydGljYWwgPiAudGFiYmVyID4gLnRhYjpub3QoOmxhc3Qtb2YtdHlwZSk6OmFmdGVyIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB3aWR0aDogMC4xNXJlbTtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiogVEFCIFRJVExFIC0gZGl2ICovXHJcblxyXG4udGFiYmVyLXdyYXBwZXIgPiAudGFiYmVyID4gLnRhYiA+IC50YWItdGl0bGUge1xyXG4gICBsaW5lLWhlaWdodDogNi41cmVtO1xyXG4gICBoZWlnaHQ6IDYuNXJlbTtcclxuICAgbWFyZ2luOiAwO1xyXG4gICBwYWRkaW5nOiAwIDAuM3JlbSAwIDMuNjlyZW07XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgbWF4LXdpZHRoOiAyNDVweDtcclxuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4vKiogVEFCIFRJVExFIElDT04gLSBkaXYgKi9cclxuXHJcbi50YWJiZXItd3JhcHBlciA+IC50YWJiZXIgPiAudGFiID4gLnRhYi10aXRsZSA+IC50YWItaWNvbiB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGhlaWdodDogMi42OXJlbTtcclxuICAgd2lkdGg6IDIuNjlyZW07XHJcbiAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWN4Qm9yZGVyUmFkaXVzUm91bmQpO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICB0b3A6IDIuMDNyZW07XHJcbiAgIGxlZnQ6IDAuNjlyZW07XHJcbiAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gICBjb2xvcjogdmFyKC0tY3hDb250cmFzdCk7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4Q2FuY2VsKTtcclxuICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuLnRhYmJlci13cmFwcGVyID4gLnRhYmJlciA+IC50YWIuY3VycmVudC10YWIgPiAudGFiLXRpdGxlID4gLnRhYi1pY29uIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3hBY2NlbnQpO1xyXG4gICBjb2xvcjogdmFyKC0tY3hCYXNlKTtcclxuICAgYm94LXNoYWRvdzogdmFyKC0tY3hTaGFkb3cpO1xyXG59XHJcblxyXG4vKiBTVEFURSBJQ09OICovXHJcblxyXG4udGFiYmVyLXdyYXBwZXIgPiAudGFiYmVyID4gLnRhYiA+IC50YWItdGl0bGUgPiAudGFiLWljb24gPiAuc3RhdGUtaWNvbiB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHJpZ2h0OiAtMC4zOHJlbTtcclxuICAgdG9wOiAtMC4zOHJlbTtcclxuICAgYm9yZGVyLXJhZGl1czogMC43N3JlbTtcclxuICAgcGFkZGluZzogMC4yM3JlbTtcclxuICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgIHdpZHRoOiAxLjJyZW07XHJcbiAgIGhlaWdodDogMS4ycmVtO1xyXG4gICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnRhYmJlci13cmFwcGVyID4gLnRhYmJlciA+IC50YWIgPiAudGFiLXRpdGxlID4gLnRhYi1pY29uID4gLnN0YXRlLWljb24uc3VjY2VzcyB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4U3VjY2Vzcyk7XHJcbiAgIGNvbG9yOiB2YXIoLS1jeFN1Y2Nlc3NDb250cmFzdCk7XHJcbn1cclxuLnRhYmJlci13cmFwcGVyID4gLnRhYmJlciA+IC50YWIgPiAudGFiLXRpdGxlID4gLnRhYi1pY29uID4gLnN0YXRlLWljb24uZGFuZ2VyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3hEYW5nZXIpO1xyXG4gICBjb2xvcjogdmFyKC0tY3hEYW5nZXJDb250cmFzdCk7XHJcbn1cclxuLnRhYmJlci13cmFwcGVyID4gLnRhYmJlciA+IC50YWIgPiAudGFiLXRpdGxlID4gLnRhYi1pY29uID4gLnN0YXRlLWljb24ud2FybmluZyB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4V2FybmluZyk7XHJcbiAgIGNvbG9yOiB2YXIoLS1jeFdhcm5pbmdDb250cmFzdCk7XHJcbn1cclxuXHJcbi8qIEVTVElMT1MgQURJQ0lPTkFJUyAqL1xyXG5cclxuLmN1cnNvci1wb2ludGVyIHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2F2ZXMtZWZmZWN0IHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIHotaW5kZXg6IDE7XHJcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcclxuICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 5052:
/*!***************************************************!*\
  !*** ./src/app/guia-caixa/constants/constants.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapTheme": () => (/* binding */ BootstrapTheme),
/* harmony export */   "GradientTheme": () => (/* binding */ GradientTheme),
/* harmony export */   "LOGO_CAIXA_BRANCO_SRC": () => (/* binding */ LOGO_CAIXA_BRANCO_SRC),
/* harmony export */   "LOGO_CAIXA_SRC": () => (/* binding */ LOGO_CAIXA_SRC),
/* harmony export */   "LOGO_COMPLETO_BRANCO_SRC": () => (/* binding */ LOGO_COMPLETO_BRANCO_SRC),
/* harmony export */   "LOGO_COMPLETO_SRC": () => (/* binding */ LOGO_COMPLETO_SRC),
/* harmony export */   "LOGO_HEADER_ABREV": () => (/* binding */ LOGO_HEADER_ABREV),
/* harmony export */   "LOGO_HEADER_COMPLETO": () => (/* binding */ LOGO_HEADER_COMPLETO),
/* harmony export */   "Meses": () => (/* binding */ Meses),
/* harmony export */   "loremIpsumPlaceHolder": () => (/* binding */ loremIpsumPlaceHolder)
/* harmony export */ });
// tslint:disable-next-line: max-line-length
const loremIpsumPlaceHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
class BootstrapTheme {
  // private to disallow creating other instances of this type
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  static #_ = this.PRIMARY = new BootstrapTheme("PRIMARY", {
    name: "primary",
    textColor: "light"
  });
  static #_2 = this.PRIMARY_LIGHT = new BootstrapTheme("PRIMARY", {
    name: "primary-light",
    textColor: "light"
  });
  static #_3 = this.PRIMARY_LIGHTER = new BootstrapTheme("PRIMARY", {
    name: "primary-lighter",
    textColor: "light"
  });
  static #_4 = this.PRIMARY_DARK = new BootstrapTheme("PRIMARY", {
    name: "primary-dark",
    textColor: "light"
  });
  static #_5 = this.PRIMARY_DARKER = new BootstrapTheme("PRIMARY", {
    name: "primary-darker",
    textColor: "light"
  });
  static #_6 = this.SECONDARY = new BootstrapTheme("SECONDARY", {
    name: "secondary",
    textColor: "light"
  });
  static #_7 = this.SECONDARY_LIGHT = new BootstrapTheme("SECONDARY_LIGHT", {
    name: "secondary-light",
    textColor: "light"
  });
  static #_8 = this.SECONDARY_LIGHTER = new BootstrapTheme("SECONDARY_LIGHTER", {
    name: "secondary-lighter",
    textColor: "light"
  });
  static #_9 = this.SECONDARY_DARK = new BootstrapTheme("SECONDARY_DARK", {
    name: "secondary-dark",
    textColor: "light"
  });
  static #_10 = this.SECONDARY_DARKER = new BootstrapTheme("SECONDARY_DARKER", {
    name: "secondary-darker",
    textColor: "light"
  });
  static #_11 = this.SUCCESS = new BootstrapTheme("SUCCESS", {
    name: "success",
    textColor: "light"
  });
  static #_12 = this.SUCCESS_LIGHT = new BootstrapTheme("SUCCESS_LIGHT", {
    name: "success-light",
    textColor: "light"
  });
  static #_13 = this.SUCCESS_LIGHTER = new BootstrapTheme("SUCCESS_LIGHTER", {
    name: "success-lighter",
    textColor: "light"
  });
  static #_14 = this.SUCCESS_DARK = new BootstrapTheme("SUCCESS_DARK", {
    name: "success-dark",
    textColor: "light"
  });
  static #_15 = this.SUCCESS_DARKER = new BootstrapTheme("SUCCESS_DARKER", {
    name: "success-darker",
    textColor: "light"
  });
  static #_16 = this.DANGER = new BootstrapTheme("DANGER", {
    name: "danger",
    textColor: "light"
  });
  static #_17 = this.DANGER_LIGHT = new BootstrapTheme("DANGER_LIGHT", {
    name: "danger-light",
    textColor: "light"
  });
  static #_18 = this.DANGER_LIGHTER = new BootstrapTheme("DANGER_LIGHTER", {
    name: "danger-lighter",
    textColor: "light"
  });
  static #_19 = this.DANGER_DARK = new BootstrapTheme("DANGER_DARK", {
    name: "danger-dark",
    textColor: "light"
  });
  static #_20 = this.DANGER_DARKER = new BootstrapTheme("DANGER_DARKER", {
    name: "danger-darker",
    textColor: "light"
  });
  static #_21 = this.INFO = new BootstrapTheme("INFO", {
    name: "info",
    textColor: "light"
  });
  static #_22 = this.INFO_LIGHT = new BootstrapTheme("INFO_LIGHT", {
    name: "info-light",
    textColor: "light"
  });
  static #_23 = this.INFO_LIGHTER = new BootstrapTheme("INFO_LIGHTER", {
    name: "info-lighter",
    textColor: "light"
  });
  static #_24 = this.INFO_DARK = new BootstrapTheme("INFO_DARK", {
    name: "info-dark",
    textColor: "light"
  });
  static #_25 = this.INFO_DARKER = new BootstrapTheme("INFO_DARKER", {
    name: "info-darker",
    textColor: "light"
  });
  static #_26 = this.WARNING = new BootstrapTheme("WARNING", {
    name: "warning",
    textColor: "light"
  });
  static #_27 = this.WARNING_LIGHT = new BootstrapTheme("WARNING_LIGHT", {
    name: "warning-light",
    textColor: "light"
  });
  static #_28 = this.WARNING_LIGHTER = new BootstrapTheme("WARNING_LIGHTER", {
    name: "warning-lighter",
    textColor: "light"
  });
  static #_29 = this.WARNING_DARK = new BootstrapTheme("WARNING_DARK", {
    name: "warning-dark",
    textColor: "light"
  });
  static #_30 = this.WARNING_DARKER = new BootstrapTheme("WARNING_DARKER", {
    name: "warning-darker",
    textColor: "light"
  });
  static #_31 = this.TURQUESA = new BootstrapTheme("TURQUESA", {
    name: "turquesa",
    textColor: "light"
  });
  static #_32 = this.TURQUESA_LIGHT = new BootstrapTheme("TURQUESA_LIGHT", {
    name: "turquesa-light",
    textColor: "light"
  });
  static #_33 = this.TURQUESA_LIGHTER = new BootstrapTheme("TURQUESA_LIGHTER", {
    name: "turquesa-lighter",
    textColor: "light"
  });
  static #_34 = this.TURQUESA_DARK = new BootstrapTheme("TURQUESA_DARK", {
    name: "turquesa-dark",
    textColor: "light"
  });
  static #_35 = this.TURQUESA_DARKER = new BootstrapTheme("TURQUESA_DARKER", {
    name: "turquesa-darker",
    textColor: "light"
  });
  static #_36 = this.LIMAO = new BootstrapTheme("LIMAO", {
    name: "limao",
    textColor: "light"
  });
  static #_37 = this.LIMAO_LIGHT = new BootstrapTheme("LIMAO_LIGHT", {
    name: "limao-light",
    textColor: "light"
  });
  static #_38 = this.LIMAO_LIGHTER = new BootstrapTheme("LIMAO_LIGHTER", {
    name: "limao-lighter",
    textColor: "light"
  });
  static #_39 = this.LIMAO_DARK = new BootstrapTheme("LIMAO_DARK", {
    name: "limao-dark",
    textColor: "light"
  });
  static #_40 = this.LIMAO_DARKER = new BootstrapTheme("LIMAO_DARKER", {
    name: "limao-darker",
    textColor: "light"
  });
  static #_41 = this.GOIABA = new BootstrapTheme("GOIABA", {
    name: "goiaba",
    textColor: "light"
  });
  static #_42 = this.GOIABA_LIGHT = new BootstrapTheme("GOIABA_LIGHT", {
    name: "goiaba-light",
    textColor: "light"
  });
  static #_43 = this.GOIABA_LIGHTER = new BootstrapTheme("GOIABA_LIGHTER", {
    name: "goiaba-lighter",
    textColor: "light"
  });
  static #_44 = this.GOIABA_DARK = new BootstrapTheme("GOIABA_DARK", {
    name: "goiaba-dark",
    textColor: "light"
  });
  static #_45 = this.GOIABA_DARKER = new BootstrapTheme("GOIABA_DARKER", {
    name: "goiaba-darker",
    textColor: "light"
  });
  static #_46 = this.CEU = new BootstrapTheme("CEU", {
    name: "ceu",
    textColor: "light"
  });
  static #_47 = this.CEU_LIGHT = new BootstrapTheme("CEU_LIGHT", {
    name: "ceu-light",
    textColor: "light"
  });
  static #_48 = this.CEU_LIGHTER = new BootstrapTheme("CEU_LIGHTER", {
    name: "ceu-lighter",
    textColor: "light"
  });
  static #_49 = this.CEU_DARK = new BootstrapTheme("CEU_DARK", {
    name: "ceu-dark",
    textColor: "light"
  });
  static #_50 = this.CEU_DARKER = new BootstrapTheme("CEU_DARKER", {
    name: "ceu-darker",
    textColor: "light"
  });
  static #_51 = this.TANGERINA = new BootstrapTheme("TANGERINA", {
    name: "tangerina",
    textColor: "light"
  });
  static #_52 = this.TANGERINA_LIGHT = new BootstrapTheme("TANGERINA_LIGHT", {
    name: "tangerina-light",
    textColor: "light"
  });
  static #_53 = this.TANGERINA_LIGHTER = new BootstrapTheme("TANGERINA_LIGHTER", {
    name: "tangerina-lighter",
    textColor: "light"
  });
  static #_54 = this.TANGERINA_DARK = new BootstrapTheme("TANGERINA_DARK", {
    name: "tangerina-dark",
    textColor: "light"
  });
  static #_55 = this.TANGERINA_DARKER = new BootstrapTheme("TANGERINA_DARKER", {
    name: "tangerina-darker",
    textColor: "light"
  });
  static #_56 = this.UVA = new BootstrapTheme("UVA", {
    name: "uva",
    textColor: "light"
  });
  static #_57 = this.UVA_LIGHT = new BootstrapTheme("UVA_LIGHT", {
    name: "uva-light",
    textColor: "light"
  });
  static #_58 = this.UVA_LIGHTER = new BootstrapTheme("UVA_LIGHTER", {
    name: "uva-lighter",
    textColor: "light"
  });
  static #_59 = this.UVA_DARK = new BootstrapTheme("UVA_DARK", {
    name: "uva-dark",
    textColor: "light"
  });
  static #_60 = this.UVA_DARKER = new BootstrapTheme("UVA_DARKER", {
    name: "uva-darker",
    textColor: "light"
  });
  static #_61 = this.CINZA = new BootstrapTheme("CINZA", {
    name: "cinza",
    textColor: "light"
  });
  static #_62 = this.CINZA_LIGHT = new BootstrapTheme("CINZA_LIGHT", {
    name: "cinza-light",
    textColor: "light"
  });
  static #_63 = this.CINZA_LIGHTER = new BootstrapTheme("CINZA_LIGHTER", {
    name: "cancel-lighter",
    textColor: "light"
  });
  static #_64 = this.CINZA_DARK = new BootstrapTheme("CINZA_DARK", {
    name: "cinza-dark",
    textColor: "light"
  });
  static #_65 = this.CINZA_DARKER = new BootstrapTheme("CINZA_DARKER", {
    name: "cinza-darker",
    textColor: "light"
  });
  static #_66 = this.GRAFITE = new BootstrapTheme("GRAFITE", {
    name: "grafite",
    textColor: "light"
  });
  static #_67 = this.GRAFITE_LIGHT = new BootstrapTheme("GRAFITE_LIGHT", {
    name: "grafite-light",
    textColor: "light"
  });
  static #_68 = this.GRAFITE_LIGHTER = new BootstrapTheme("GRAFITE_LIGHTER", {
    name: "grafite-lighter",
    textColor: "light"
  });
  static #_69 = this.GRAFITE_DARK = new BootstrapTheme("GRAFITE_DARK", {
    name: "grafite-dark",
    textColor: "light"
  });
  static #_70 = this.GRAFITE_DARKER = new BootstrapTheme("GRAFITE_DARKER", {
    name: "grafite-darker",
    textColor: "light"
  });
  static getTemas() {
    const temas = [];
    Object.getOwnPropertyNames(BootstrapTheme).forEach(theme => {
      const tema = BootstrapTheme[theme].value;
      if (tema) {
        temas.push(tema);
      }
    });
    return temas;
  }
  toString() {
    return this.key;
  }
}

class GradientTheme {
  static #_ = this.PRIMARY = new GradientTheme("PRIMARY", {
    name: "gradient-primary",
    textColor: "light"
  });
  static #_2 = this.SECONDARY = new GradientTheme("SECONDARY", {
    name: "gradient-sky",
    textColor: "light"
  });
  static #_3 = this.SUCCESS = new GradientTheme("SUCCESS", {
    name: "gradient-success",
    textColor: "light"
  });
  static #_4 = this.DANGER = new GradientTheme("DANGER", {
    name: "gradient-aux",
    textColor: "light"
  });
  static #_5 = this.INFO = new GradientTheme("INFO", {
    name: "gradient-light",
    textColor: "dark"
  });
  static #_6 = this.WARNING = new GradientTheme("WARNING", {
    name: "gradient-dark",
    textColor: "light"
  });
  static getTemas() {
    const temas = [];
    Object.getOwnPropertyNames(GradientTheme).forEach(theme => {
      const tema = GradientTheme[theme].value;
      if (tema) {
        temas.push(tema);
      }
    });
    return temas;
  }
  // private to disallow creating other instances of this type
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return this.key;
  }
}

const LOGO_CAIXA_BRANCO_SRC = "assets/images/caixa-logo-x-branco.png";
const LOGO_CAIXA_SRC = "assets/images/caixa-logo-x.png";
const LOGO_COMPLETO_SRC = "assets/images/caixa-logo-completo.png";
const LOGO_COMPLETO_BRANCO_SRC = "assets/images/caixa-logo-completo-branco.png";
const LOGO_HEADER_COMPLETO = "QUICKSTART";
const LOGO_HEADER_ABREV = "Q";
var Meses;
(function (Meses) {
  Meses[Meses["JAN"] = 0] = "JAN";
  Meses[Meses["FEV"] = 1] = "FEV";
  Meses[Meses["MAR"] = 2] = "MAR";
  Meses[Meses["ABR"] = 3] = "ABR";
  Meses[Meses["MAI"] = 4] = "MAI";
  Meses[Meses["JUN"] = 5] = "JUN";
  Meses[Meses["JUL"] = 6] = "JUL";
  Meses[Meses["AGO"] = 7] = "AGO";
  Meses[Meses["SET"] = 8] = "SET";
  Meses[Meses["OUT"] = 9] = "OUT";
  Meses[Meses["NOV"] = 10] = "NOV";
  Meses[Meses["DEZ"] = 11] = "DEZ";
})(Meses || (Meses = {}));

/***/ }),

/***/ 9556:
/*!******************************************************!*\
  !*** ./src/app/guia-caixa/services/modal.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);



class ModalService {
  constructor() {
    this.contextoInjecaoGenericoSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.contextoInjecaoGenerico$ = this.contextoInjecaoGenericoSource.asObservable();
    this.contextoInjecaoInstanciadoSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.contextoInjecaoInstanciado$ = this.contextoInjecaoInstanciadoSource.asObservable();
    this.limparModalDinamicoSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.limparModalDinamico$ = this.limparModalDinamicoSource.asObservable();
    this.injetarModalDinamicoSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.injetarModalDinamico$$ = this.injetarModalDinamicoSource.asObservable();
    this.showEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.btOKEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.btCancelarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  show(options) {
    this.showEvent.emit(options || {});
  }
  limpar() {
    this.limparModalDinamicoSource.next(true);
    this.limparModalDinamicoSource.next(false);
  }
  injetar() {
    this.injetarModalDinamicoSource.next(true);
    this.injetarModalDinamicoSource.next(false);
  }
  receberContexto(componentFactoryResolver, injector, componenteParaInjetar) {
    this.contextoInjecaoGenericoSource.next({
      resolver: componentFactoryResolver,
      injector: injector,
      componenteParaInjetar: componenteParaInjetar
    });
  }
  receberContextoInstanciado(componenteRef) {
    this.contextoInjecaoInstanciadoSource.next(componenteRef);
  }
  static #_ = this.ɵfac = function ModalService_Factory(t) {
    return new (t || ModalService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ModalService,
    factory: ModalService.ɵfac,
    providedIn: "root"
  });
}


/***/ }),

/***/ 3587:
/*!*****************************************************************!*\
  !*** ./src/app/guia-caixa/services/style-guia-caixa.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuiaCaixaStyleService": () => (/* binding */ GuiaCaixaStyleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ 5052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);



class GuiaCaixaStyleService {
  constructor() {
    this.defaultTheme = {
      toolbarBg: "gradient-primary",
      toolbarText: "light-light",
      toolbarIcon: _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOGO_CAIXA_BRANCO_SRC,
      sidemenuBg: "light-light",
      sidemenuText: "dark",
      counteudoPrincipalBg: ""
    };
    this.globalThemeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.defaultTheme);
    this.globalTheme$ = this.globalThemeSource.asObservable();
    this.toolbarBgSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("primary");
    this.toolbarBg$ = this.toolbarBgSource.asObservable();
    this.toolbarTextSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("light");
    this.toolbarText$ = this.toolbarTextSource.asObservable();
    this.toolbarIconSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOGO_CAIXA_BRANCO_SRC);
    this.toolbarIcon$ = this.toolbarIconSource.asObservable();
    this.sidemenuBgSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("light-light");
    this.sidemenuBg$ = this.sidemenuBgSource.asObservable();
    this.conteudoPrincipalBg = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("");
    this.conteudoPrincipalBg$ = this.conteudoPrincipalBg.asObservable();
  }
  setToolbarBg(className) {
    const tema = this.globalThemeSource.value;
    tema.toolbarBg = className;
    this.globalThemeSource.next(tema);
  }
  setToolbarText(className) {
    const tema = this.globalThemeSource.value;
    tema.toolbarText = className;
    this.globalThemeSource.next(tema);
  }
  setToolbarIcon(src) {
    const tema = this.globalThemeSource.value;
    tema.toolbarIcon = src;
    this.globalThemeSource.next(tema);
  }
  setSidemenuBg(className) {
    const tema = this.globalThemeSource.value;
    tema.sidemenuBg = className;
    this.globalThemeSource.next(tema);
  }
  setSidemenuText(className) {
    const tema = this.globalThemeSource.value;
    tema.sidemenuText = className;
    this.globalThemeSource.next(tema);
  }
  setConteudoPrincipalBg(className) {
    const tema = this.globalThemeSource.value;
    tema.counteudoPrincipalBg = className;
    this.globalThemeSource.next(tema);
  }
  static #_ = this.ɵfac = function GuiaCaixaStyleService_Factory(t) {
    return new (t || GuiaCaixaStyleService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: GuiaCaixaStyleService,
    factory: GuiaCaixaStyleService.ɵfac,
    providedIn: "root"
  });
}


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants */ 136);
/* harmony import */ var _guia_caixa_components_card_panel_card_panel_style_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guia-caixa/components/card-panel/card-panel-style.enum */ 3281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _guia_caixa_components_card_panel_card_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guia-caixa/components/card-panel/card-panel.component */ 9721);






class HomeComponent {
  constructor(fb) {
    this.fb = fb;
    this.cardPanelStyle = _guia_caixa_components_card_panel_card_panel_style_enum__WEBPACK_IMPORTED_MODULE_1__.CardPanelStyle.HORIZONTAL;
    this.rows = [];
    this.resources = _shared_constants__WEBPACK_IMPORTED_MODULE_0__.mockedSideMenuItems;
    this.contratos = [];
    this.formCpfNis = this.fb.group({
      cpf: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      nis: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
    this.cliente = null;
    this.uploadedFile = null;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 3,
    vars: 2,
    consts: [[1, "titulo"], [3, "items", "cardStyle"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " In\u00EDcio\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-card-panel", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.resources)("cardStyle", ctx.cardPanelStyle);
      }
    },
    dependencies: [_guia_caixa_components_card_panel_card_panel_component__WEBPACK_IMPORTED_MODULE_2__.CardPanelComponent],
    styles: [".button-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.button-card[_ngcontent-%COMP%]:hover {\n  transition: color 0.2s ease;\n}\n\n#msgInput[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n#msgInput[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n}\n#msgInput[_ngcontent-%COMP%]   .input-caixa[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (min-width: 992px) {\n  .button-card-container[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  #msgInput[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n  }\n  #msgInput[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  #msgInput[_ngcontent-%COMP%]   .input-caixa[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQUNEOztBQUVBO0VBQ0MsMkJBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7QUFDRDtBQUFDO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FBRUY7QUFBQztFQUNDLFdBQUE7QUFFRjs7QUFDQTtFQUNDO0lBQ0MsVUFBQTtFQUVBO0VBQUQ7SUFDQyxpQkFBQTtFQUVBO0VBREE7SUFDQyxXQUFBO0VBR0Q7RUFEQTtJQUNDLFVBQUE7RUFHRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jYXJkIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tY2FyZDpob3ZlciB7XHJcblx0dHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4jbXNnSW5wdXQge1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHQuYnRuIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luLXRvcDogMXJlbTtcclxuXHR9XHJcblx0LmlucHV0LWNhaXhhIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuXHQuYnV0dG9uLWNhcmQtY29udGFpbmVyIHtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdCNtc2dJbnB1dCB7XHJcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRcdC5idG4ge1xyXG5cdFx0XHR3aWR0aDogYXV0bztcclxuXHRcdH1cclxuXHRcdC5pbnB1dC1jYWl4YSB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5067);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _guia_caixa_components_card_panel_card_panel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guia-caixa/components/card-panel/card-panel.module */ 5377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _guia_caixa_components_card_panel_card_panel_module__WEBPACK_IMPORTED_MODULE_1__.CardPanelModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _guia_caixa_components_card_panel_card_panel_module__WEBPACK_IMPORTED_MODULE_1__.CardPanelModule]
  });
})();

/***/ }),

/***/ 9289:
/*!***********************************************************!*\
  !*** ./src/app/layout/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);





const _c0 = function (a0) {
  return {
    "text-link": a0
  };
};
function BreadcrumbComponent_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3)(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    const isLast_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", breadcrumb_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, isLast_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breadcrumb_r2.label, " ");
  }
}
function BreadcrumbComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ul_1_li_1_Template, 3, 5, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumbs);
  }
}
class BreadcrumbComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.breadcrumbs = [];
  }
  ngOnInit() {
    const breadcrumb = {
      label: "Home",
      url: ""
    };
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(event => {
      // set breadcrumbs
      const root = this.route.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
      this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
    });
  }
  getBreadcrumbs(route, url = "", breadcrumbs = []) {
    const ROUTE_DATA_BREADCRUMB = "breadcrumb";
    // get the child routes
    const children = route.children;
    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }
    // iterate over each children
    for (const child of children) {
      // verify primary route
      if (child.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_2__.PRIMARY_OUTLET || child.snapshot.url.length == 0) {
        continue;
      }
      // verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB) || child.snapshot.data[ROUTE_DATA_BREADCRUMB] == "Home") {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }
      // get the route's URL segment
      const routeURL = child.snapshot.url.map(segment => segment.path).join("/");
      // append route URL to URL
      url += `/${routeURL}`;
      // add breadcrumb
      const breadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url: url
      };
      breadcrumbs.push(breadcrumb);
      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
  static #_ = this.ɵfac = function BreadcrumbComponent_Factory(t) {
    return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BreadcrumbComponent,
    selectors: [["app-breadcrumb"]],
    decls: 2,
    vars: 1,
    consts: [["class", "breadcrumb", 4, "ngIf"], [1, "breadcrumb"], ["class", "breadcrumb-item align-items-center", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", "align-items-center"], [3, "ngClass", "routerLink"]],
    template: function BreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ul_1_Template, 2, 1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.breadcrumbs == null ? null : ctx.breadcrumbs.length) > 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".breadcrumb[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  list-style: none !important;\r\n  list-style-type: none;\r\n  padding: 0 !important;\r\n  background-color: transparent;\r\n}\r\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  vertical-align: middle;\r\n}\r\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n  background-color: white !important;\r\n}\r\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: var(--cxAux);\r\n  text-decoration: none;\r\n}\r\nol.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\r\n  content: \"\\f054\";\r\n  font-family: 'Font Awesome 5 Free';\r\n  font-weight: 900;\r\n  opacity: 0.8;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGlzdC1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJyZWFkY3J1bWIgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmJyZWFkY3J1bWIgbGkgYnV0dG9uOmZvY3VzLCAuYnJlYWRjcnVtYiBsaSBidXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5icmVhZGNydW1iIGxpIGEge1xyXG4gIGNvbG9yOiB2YXIoLS1jeEF1eCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbm9sLmJyZWFkY3J1bWIgbGkgYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGYwNTRcIjtcclxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6017:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class FooterComponent {
  constructor() {
    this.appVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 8,
    vars: 1,
    consts: [[1, "bg-gradient-oceano", "mt-auto", "d-flex", "align-items-center"], [1, "row", "mx-5", "text-center", "w-100"], [1, "col-md-4"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Caixa Econ\u00F4mica Federal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Vers\u00E3o: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appVersion);
      }
    },
    styles: ["footer[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 64px;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 2865:
/*!***************************************!*\
  !*** ./src/app/layout/menu.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-menu/side-menu.component */ 9081);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ 9289);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ 7252);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 6017);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);









class LayoutModule {
  static #_ = this.ɵfac = function LayoutModule_Factory(t) {
    return new (t || LayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: LayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LayoutModule, {
    declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_0__.SideMenuComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
    exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_0__.SideMenuComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent]
  });
})();

/***/ }),

/***/ 7252:
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guia-caixa/constants/constants */ 5052);
/* harmony import */ var src_app_models_global_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/global-style */ 4667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _authentication_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication/users/user.service */ 5761);
/* harmony import */ var src_app_guia_caixa_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guia-caixa/services/modal.service */ 9556);
/* harmony import */ var _side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../side-menu/side-menu.service */ 9870);
/* harmony import */ var src_app_services_style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/style.service */ 3112);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6477);









const _c0 = ["navbar"];
function HeaderComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.getLogo(), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function HeaderComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.getLogo());
  }
}
const _c1 = function (a0) {
  return {
    "active": a0
  };
};
function HeaderComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_21_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const font_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.setFontSize(font_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const font_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-size", font_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, ctx_r4.currentFontSize === font_r6.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", font_r6.name, " (", font_r6.value, ") ");
  }
}
function HeaderComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_27_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const tema_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.setTheme(tema_r9.value.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tema_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r5.currentTheme.value.name === tema_r9.value.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", tema_r9["background"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tema_r9.toString(), " ");
  }
}
const _c2 = function (a0) {
  return {
    "menu-is-aberto": a0
  };
};
class HeaderComponent {
  constructor(userService, modalService, sidemenuService, styleService) {
    this.userService = userService;
    this.modalService = modalService;
    this.sidemenuService = sidemenuService;
    this.styleService = styleService;
    this.useImgLogo = false;
    this.useHeaderLogo = true;
    this.imgLogoMenuClosed = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOGO_CAIXA_BRANCO_SRC;
    this.imgLogoMenuOpen = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOGO_COMPLETO_BRANCO_SRC;
    this.headerLogoMenuClosed = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOGO_HEADER_ABREV;
    this.headerLogoMenuOpen = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOGO_HEADER_COMPLETO;
    this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable();
    this.fontSizes = [{
      name: "Pequeno",
      value: "13px"
    }, {
      name: "Médio",
      value: "14px"
    }, {
      name: "Grande",
      value: "15px"
    }, {
      name: "Muito Grande",
      value: "16px"
    }, {
      name: "Extra Grande",
      value: "17px"
    }];
    this.themes = [];
    this.user$ = this.userService.perfil;
    this.sidemenuService.isAberto$.subscribe(isAberto => this.isMenuAberto = isAberto);
    this.styleService.currentFontSize$.subscribe(fontSize => this.currentFontSize = fontSize);
    this.styleService.currentGlobalStyle$.subscribe(theme => this.currentTheme = theme);
    this.showDate();
    this.setDefaultTheme();
    console.log(this.useHeaderLogo);
  }
  ngOnInit() {
    this.user = this.setMockUser();
    const themes = src_app_models_global_style__WEBPACK_IMPORTED_MODULE_1__.GlobalThemes.getThemes();
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
  toggleHeaderBackground() {
    console.log("TEMA", this.currentTheme);
    const temaAtual = this.currentTheme.value.theme;
    const headerBgVariableValue = this.styleService.getCssVariableValue("--cxHeaderBgColor");
    if (headerBgVariableValue === this.styleService.getCssVariableValue(temaAtual.cxHeaderBgColor)) {
      console.log("IGUAL", headerBgVariableValue, temaAtual.cxHeaderBgColor);
      this.styleService.setCssVariable("--cxHeaderBgColor", "linear-gradient(90deg, #005CA9 40%, #54BBAB 100%)");
    } else {
      console.log("DIFERENTE", headerBgVariableValue, temaAtual.cxHeaderBgColor);
      this.styleService.setCssVariable("--cxHeaderBgColor", this.styleService.getCssVariableValue(temaAtual.cxHeaderBgColor));
    }
    console.log("HEADER BG COLOR", this.styleService.getCssVariableValue(temaAtual.cxHeaderBgColor));
  }
  showLogoutModal() {
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
  sair() {}
  trocaMenuLateral() {
    this.sidemenuService.trocar();
  }
  setMockUser() {
    return {
      nome_completo: "Usuário Teste",
      primeiro_nome: "Usuário",
      matricula: "C123456",
      roles: []
    };
  }
  showDate() {
    this.setDate(new Date());
    setInterval(() => {
      this.setDate(new Date());
    }, 1000);
  }
  setDate(data) {
    const hora = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.Meses[data.getMonth()];
    const ano = data.getFullYear();
    this.dataHora = `${hora}h${minutos} - ${dia} ${mes} ${ano}`;
  }
  setFontSize(fontSize) {
    this.styleService.setFontSize(fontSize);
  }
  setTheme(tema) {
    this.styleService.setGlobalTheme(tema);
  }
  setDefaultTheme() {
    this.styleService.setDefaultStyle();
  }
  getLogo() {
    if (this.useImgLogo) return this.isMenuAberto ? this.imgLogoMenuOpen : this.imgLogoMenuClosed;
    if (this.useHeaderLogo) return this.isMenuAberto ? this.headerLogoMenuOpen : this.headerLogoMenuClosed;
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_authentication_users_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_guia_caixa_services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_4__.SideMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_style_service__WEBPACK_IMPORTED_MODULE_5__.StyleService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-navbar"]],
    viewQuery: function HeaderComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
      }
    },
    inputs: {
      tema: "tema",
      resources: "resources"
    },
    decls: 44,
    vars: 9,
    consts: [["id", "navbar"], ["navbar", ""], ["id", "headerNav"], ["role", "button", 1, "sidemenu-collapse-icon", 3, "click"], [1, "fas", "fa-bars", "fa-lg"], ["id", "spanLogo", 1, "h-100", 3, "ngClass"], [1, "d-flex", "align-items-center", "h-100", 3, "dblclick"], [4, "ngIf", "ngIfElse"], ["headerLogoContainer", ""], [1, "d-none", "d-md-block", "mb-0", "ml-2", "subtitulo", "full-opacity"], ["id", "painelDataHora", 1, "d-none", "d-lg-flex", "h-100", "align-items-center", "ml-auto", "mr-4"], [1, "subtitulo", "m-0", "full-opacity"], ["id", "painelIconesUsuario", 1, "ml-auto", "ml-lg-0"], [1, "notification-container"], [1, "dropdown"], ["data-toggle", "dropdown", "title", "Tamanho base da fonte", 1, "btn", "btn-link", "btn-sm", "shadow-none", "border-0", "dropdown-toggle"], ["role", "button", 1, "fa", "fa-font", "mr-2", "fa-2x"], [1, "dropdown-menu"], ["class", "dropdown-item cursor-pointer d-flex align-items-center", 3, "ngClass", "fontSize", "click", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", "title", "Modo Escuro", 1, "btn", "btn-link", "btn-sm", "shadow-none", "border-0", "dropdown-toggle"], ["role", "button", 1, "fa", "fa-palette", "mr-2", "fa-2x"], ["class", "dropdown-item cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", "role", "button", 1, "notification-container"], [1, "btn", "btn-link", "btn-sm", "shadow-none", "border-0"], ["role", "button", "title", "Notifica\u00E7\u00F5es", 1, "fa", "fa-bell", "fa-2x"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item"], ["role", "button", "data-toggle", "dropdown", 1, "notification-container"], ["role", "button", "title", "Mensagens", 1, "fa", "fa-envelope", "fa-2x"], [1, "btn", "btn-link", "border", "mx-4"], [1, "fa", "fa-sign-out-alt", "fa-lg", "mr-2"], [1, "text-uppercase", "font-fam-bold"], ["alt", "Logotipo", 1, "img-fluid", "img-logo", "rounded", "mx-auto", 3, "src"], [1, "subtitulo", "my-0", "py-0", "mx-auto"], [1, "dropdown-item", "cursor-pointer", "d-flex", "align-items-center", 3, "ngClass", "click"], [1, "dropdown-item", "cursor-pointer", 3, "ngClass", "click"], [1, "theme-example", "mr-2"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 0, 1)(2, "nav", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_3_listener() {
          return ctx.trocaMenuLateral();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dblclick", function HeaderComponent_Template_div_dblclick_6_listener() {
          return ctx.toggleHeaderBackground();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, HeaderComponent_ng_container_7_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, HeaderComponent_ng_template_8_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, HeaderComponent_div_21_Template, 2, 7, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 13)(23, "div", 14)(24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, HeaderComponent_div_27_Template, 3, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 22)(29, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 25)(32, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Voc\u00EA tem 2 notifica\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 27)(35, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 25)(38, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " Voc\u00EA tem 5 mensagens ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Sair");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c2, ctx.isMenuAberto));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.useImgLogo)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Ol\u00E1, ", ctx.user.nome_completo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.dataHora, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.fontSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.themes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
    styles: ["#spanLogo[_ngcontent-%COMP%] {\n  width: 165px;\n  max-width: 165px;\n  transition: 0.5s;\n}\n\n#spanLogo.menu-is-aberto[_ngcontent-%COMP%] {\n  width: 264px;\n  max-width: 264px;\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  min-width: 3rem;\n  max-height: 2.1rem;\n}\n\n.logo-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.notification-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n}\n\n\n.notification-badge[_ngcontent-%COMP%] {\n  background-color: #fa3e3e;\n  border-radius: 0.9rem;\n  color: white;\n  padding: 0.1rem 0.3rem;\n  font-size: 0.9rem;\n  position: absolute; \n  top: -5px;\n  right: -5px;\n}\n\n.square[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n\n.theme-example[_ngcontent-%COMP%] {\n  border: solid 3px var(--cxCancel);\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 2rem;\n}\n\n.sidemenu-collapse-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  padding: 1.5rem;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNJLGlCQUFBO0FBR0o7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQUEsK0RBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBLEVBQUEsK0RBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI3NwYW5Mb2dvIHtcclxuICB3aWR0aDogMTY1cHg7XHJcbiAgbWF4LXdpZHRoOiAxNjVweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbiNzcGFuTG9nby5tZW51LWlzLWFiZXJ0byB7XHJcbiAgd2lkdGg6IDI2NHB4O1xyXG4gIG1heC13aWR0aDogMjY0cHg7XHJcbn1cclxuXHJcbi5pbWctbG9nbyB7XHJcbiAgbWluLXdpZHRoOiAzcmVtO1xyXG4gIG1heC1oZWlnaHQ6IDIuMXJlbTtcclxufVxyXG4ubG9nby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIE1ha2UgdGhlIGJhZGdlIGZsb2F0IGluIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBidXR0b24gKi9cclxuLm5vdGlmaWNhdGlvbi1iYWRnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhM2UzZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjlyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gXHJcbiAgcGFkZGluZzogMC4xcmVtIDAuM3JlbTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9uIHRoZSBiYWRnZSB3aXRoaW4gdGhlIHJlbGF0aXZlbHkgcG9zaXRpb25lZCBidXR0b24gKi9cclxuICB0b3A6IC01cHg7XHJcbiAgcmlnaHQ6IC01cHg7XHJcbn1cclxuXHJcbi5zcXVhcmUge1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweFxyXG59XHJcblxyXG4udGhlbWUtZXhhbXBsZSB7XHJcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tY3hDYW5jZWwpO1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLnNpZGVtZW51LWNvbGxhcHNlLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 9081:
/*!*********************************************************!*\
  !*** ./src/app/layout/side-menu/side-menu.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideMenuComponent": () => (/* binding */ SideMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants */ 136);
/* harmony import */ var src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guia-caixa/constants/constants */ 5052);
/* harmony import */ var _side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-menu.service */ 9870);
/* harmony import */ var src_app_guia_caixa_services_style_guia_caixa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guia-caixa/services/style-guia-caixa.service */ 3587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/accordion/accordion.component */ 7415);











const _c0 = ["menuLateral"];
const _c1 = ["menuTarget"];
const _c2 = ["inputSearch"];
const _c3 = function (a0, a1) {
  return {
    "reduzido": a0,
    "aberto": a1
  };
};
const MENU_ROUTE_PROPERTY = "menuLateral";
const MOBILE_BREAKPOINT = 991.9;
class SideMenuComponent {
  constructor(componentFactoryResolver, router, route, menuService, styleService) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.router = router;
    this.route = route;
    this.menuService = menuService;
    this.styleService = styleService;
    this.options = {
      multi: false
    };
    this.logo = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_1__.LOGO_HEADER_ABREV;
    this.menus = [];
  }
  ngOnInit() {
    this.larguraTela = window.innerWidth;
    this.menuService.isAberto$.subscribe(isAberto => {
      this.isAberto = isAberto;
    });
    this.menuService.menuItems$.subscribe(menus => this.menus = [...menus]);
    this.verificarContextoMudancaRota();
    this.fecharSeMobile();
    this.abrirSeDesktop();
  }
  onResize() {
    this.larguraTela = window.innerWidth;
    this.fecharSeMobile();
    this.abrirSeDesktop();
  }
  fecharSeMobile() {
    if (this.larguraTela <= MOBILE_BREAKPOINT) {
      this.menuService.fechar();
    }
  }
  abrirSeDesktop() {
    if (this.larguraTela > MOBILE_BREAKPOINT) {
      this.menuService.abrir();
    }
  }
  /* Verifica na mudança de rota se há informação de menu para a nova rota acessada */
  verificarContextoMudancaRota() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.fecharSeMobile()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
      let route = this.route.firstChild;
      let child = route;
      while (child) {
        if (child.firstChild) {
          child = child.firstChild;
          route = child;
        } else {
          child = null;
        }
      }
      return route;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(route => route.data)).subscribe(data => {
      if (data && data[MENU_ROUTE_PROPERTY]) {
        this.componenteParaInjetar = data[MENU_ROUTE_PROPERTY];
        this.injetarComponente();
      } else {
        this.clearComponent();
      }
    });
  }
  injetarComponente() {
    /* Verifica se o componente a injetar já foi recebido,
      seja pelo receberContexto(), ou pela mudança de rota
    */
    if (!this.componenteParaInjetar) {
      this.clearComponent();
      return console.error("Não há componente a ser injetado.");
    }
    if (this.componentRef && this.componentRef.componentType && this.componenteParaInjetar.toString() === this.componentRef.componentType.toString()) {
      return;
    }
    this.clearComponent();
    const factoryComponenteInjetado = this.componentFactoryResolver.resolveComponentFactory(this.componenteParaInjetar);
    // tslint:disable-next-line: deprecation
    const injetorComponenteInjetado = _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector.create([{
      provide: this.componenteParaInjetar,
      useValue: this.componenteParaInjetar
    }], this.injectorComponentParaInjetar);
    this.componentRef = this.menuTargetRef.createComponent(factoryComponenteInjetado, 0, injetorComponenteInjetado);
    this.componentRef.changeDetectorRef.detectChanges();
  }
  clearComponent() {
    this.menuTargetRef.clear();
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
  openSearch() {
    this.menuService.abrir();
    setTimeout(() => {
      this.inputSearch.nativeElement.focus();
    }, 0);
  }
  filterMenu(ev) {
    this.menus = JSON.parse(JSON.stringify(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__.mockedSideMenuItems));
    const text = ev.target.value.trim();
    const filteredMenus = this.menus.filter(function f(menu) {
      const nameLowercase = menu.name.toLowerCase();
      const test = nameLowercase.includes(text.toLowerCase()) || menu.url.includes(text) || menu.submenu && (menu.submenu = menu.submenu.filter(f)).length;
      return test;
    });
    this.menus = JSON.parse(JSON.stringify(filteredMenus));
  }
  ngOnDestroy() {
    this.resolverSub.unsubscribe();
    this.clearComponent();
  }
  static #_ = this.ɵfac = function SideMenuComponent_Factory(t) {
    return new (t || SideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_side_menu_service__WEBPACK_IMPORTED_MODULE_2__.SideMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_guia_caixa_services_style_guia_caixa_service__WEBPACK_IMPORTED_MODULE_3__.GuiaCaixaStyleService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: SideMenuComponent,
    selectors: [["app-side-menu"]],
    viewQuery: function SideMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.menuLateral = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.menuTargetRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.inputSearch = _t.first);
      }
    },
    hostBindings: function SideMenuComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function SideMenuComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      tema: "tema"
    },
    decls: 16,
    vars: 7,
    consts: [["id", "menuLateral", 3, "ngClass"], ["menuLateral", ""], [1, "p-3", "text-center"], [1, "subtitulo"], ["role", "button", 1, "menu-item", "mb-3", 3, "click"], [1, "menu-item-icon"], [1, "fa", "fa-search", "fa-lg", "mr-2"], [1, "menu-item-name"], ["placeholder", "Pesquise o portal...", 1, "form-control", "text-center", "mr-2", 3, "input"], ["inputSearch", ""], ["id", "menuLateralNav"], [3, "options", "menus"], ["id", "menuLateralDinamico", 1, "mt-5"], ["menuTarget", ""]],
    template: function SideMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "perfect-scrollbar", 0, 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SideMenuComponent_Template_div_click_5_listener() {
          return ctx.openSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 7)(9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function SideMenuComponent_Template_input_input_9_listener($event) {
          return ctx.filterMenu($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "app-accordion", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](14, null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](4, _c3, !ctx.isAberto, ctx.isAberto));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.options)("menus", ctx.menus);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _shared_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__.AccordionComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9870:
/*!*******************************************************!*\
  !*** ./src/app/layout/side-menu/side-menu.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideMenuService": () => (/* binding */ SideMenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants */ 136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);



class SideMenuService {
  constructor() {
    this.menus = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__.mockedSideMenuItems;
    this.contextoInjecaoSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.contextoInjecao$ = this.contextoInjecaoSource.asObservable();
    this.abertoSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.isAberto$ = this.abertoSource.asObservable();
    this.menuItemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.menus);
    this.menuItems$ = this.menuItemsSource.asObservable();
  }
  trocar() {
    this.abertoSource.next(!this.abertoSource.value);
  }
  abrir() {
    this.abertoSource.next(true);
  }
  fechar() {
    this.abertoSource.next(false);
  }
  receberContexto(resolver, injector, componenteParaInjetar) {
    this.contextoInjecaoSource.next({
      resolver,
      injector,
      componenteParaInjetar
    });
  }
  updateMenu(menu) {
    this.menuItemsSource.next(menu);
  }
  inserirItemMenu(menuItem, parentMenuItemName) {
    if (!parentMenuItemName) {
      const newMenuItems = this.menuItemsSource.value;
      newMenuItems.push(menuItem);
      this.menuItemsSource.next(newMenuItems);
    } else {
      const menuItems = this.menuItemsSource.value;
      const parentMenu = menuItems.filter(item => item.name === parentMenuItemName)[0];
      parentMenu.submenu.push(menuItem);
    }
  }
  static #_ = this.ɵfac = function SideMenuService_Factory(t) {
    return new (t || SideMenuService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: SideMenuService,
    factory: SideMenuService.ɵfac,
    providedIn: "root"
  });
}


/***/ }),

/***/ 4667:
/*!****************************************!*\
  !*** ./src/app/models/global-style.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalThemes": () => (/* binding */ GlobalThemes),
/* harmony export */   "blueDarkTheme": () => (/* binding */ blueDarkTheme),
/* harmony export */   "blueLightTheme": () => (/* binding */ blueLightTheme),
/* harmony export */   "highContrastTheme": () => (/* binding */ highContrastTheme),
/* harmony export */   "purpleLightTheme": () => (/* binding */ purpleLightTheme)
/* harmony export */ });
const baseLightTheme = {
  cxSuccess: "--success",
  cxSuccessContrast: "--cinza-lighter",
  cxSuccessInvert: "--success-lighter",
  cxSuccessInvertContrast: "--cinza-lighter",
  cxDanger: "--danger",
  cxDangerContrast: "--white",
  cxDangerInvert: "--danger-lighter",
  cxDangerInvertContrast: "--grafite-dark",
  cxWarning: "--warning",
  cxWarningContrast: "--grafite-dark",
  cxWarningInvert: "--warning-lighter",
  cxWarningInvertContrast: "--grafite-dark",
  cxInfo: "--info",
  cxInfoContrast: "--white",
  cxInfoInvert: "--info-lighter",
  cxInfoInvertContrast: "--white",
  cxBase: "--cinza-lighter",
  cxBackground: "--polar",
  cxContrast: "--grafite-dark",
  cxShadow: "--cxShadowDark",
  cxShadowSm: "--cxShadowDarkSm",
  cxShadowLg: "--cxShadowDarkLg",
  cxTransparentBase025: "rgba(255, 255, 255, 0.025)",
  cxTransparentBase050: "rgba(255, 255, 255, 0.05)",
  cxTransparentBase075: "rgba(255, 255, 255, 0.075)",
  cxTransparentBase25: "rgba(255, 255, 255, 0.25)",
  cxTransparentBase50: "rgba(255, 255, 255, 0.5)",
  cxTransparentBase75: "rgba(255, 255, 255, 0.75)",
  cxTransparentContrast025: "rgba(0, 0, 0, 0.025)",
  cxTransparentContrast050: "rgba(0, 0, 0, 0.05)",
  cxTransparentContrast075: "rgba(0, 0, 0, 0.075)",
  cxTransparentContrast25: "rgba(0, 0, 0, 0.25)",
  cxTransparentContrast50: "rgba(0, 0, 0, 0.5)",
  cxTransparentContrast75: "rgba(0, 0, 0, 0.75)"
};
const baseDarkTheme = {
  cxSuccess: "--success",
  cxSuccessContrast: "--cinza-lighter",
  cxSuccessInvert: "--success-lighter",
  cxSuccessInvertContrast: "--cinza-lighter",
  cxDanger: "--danger",
  cxDangerContrast: "--white",
  cxDangerInvert: "--danger-lighter",
  cxDangerInvertContrast: "--grafite-dark",
  cxWarning: "--warning",
  cxWarningContrast: "--grafite-dark",
  cxWarningInvert: "--warning-lighter",
  cxWarningInvertContrast: "--grafite-dark",
  cxInfo: "--info",
  cxInfoContrast: "--white",
  cxInfoInvert: "--info-lighter",
  cxInfoInvertContrast: "--white",
  cxBase: "--grafite-darker",
  cxBackground: "--grafite-dark",
  cxContrast: "--cinza-lighter",
  cxShadow: "--cxShadowLight",
  cxShadowSm: "--cxShadowLightSm",
  cxShadowLg: "--cxShadowLightLg",
  cxTransparentBase025: "rgba(0, 0, 0, 0.025)",
  cxTransparentBase050: "rgba(0, 0, 0, 0.05)",
  cxTransparentBase075: "rgba(0, 0, 0, 0.075)",
  cxTransparentBase25: "rgba(0, 0, 0, 0.25)",
  cxTransparentBase50: "rgba(0, 0, 0, 0.5)",
  cxTransparentBase75: "rgba(0, 0, 0, 0.75)",
  cxTransparentContrast025: "rgba(255, 255, 255, 0.025)",
  cxTransparentContrast050: "rgba(255, 255, 255, 0.05)",
  cxTransparentContrast075: "rgba(255, 255, 255, 0.075)",
  cxTransparentContrast25: "rgba(255, 255, 255, 0.25)",
  cxTransparentContrast50: "rgba(255, 255, 255, 0.5)",
  cxTransparentContrast75: "rgba(255, 255, 255, 0.75)"
};
const baseHighContrastTheme = {
  cxSuccess: "--success-lighter",
  cxSuccessContrast: "--grafite-darker",
  cxSuccessInvert: "--success-lighter",
  cxSuccessInvertContrast: "--cinza-lighter",
  cxDanger: "--danger-lighter",
  cxDangerContrast: "--white",
  cxDangerInvert: "--danger-lighter",
  cxDangerInvertContrast: "--grafite-darker",
  cxWarning: "--warning",
  cxWarningContrast: "--grafite-dark",
  cxWarningInvert: "--warning-lighter",
  cxWarningInvertContrast: "--grafite-darker",
  cxInfo: "--info-lighter",
  cxInfoContrast: "--white",
  cxInfoInvert: "--info-lighter",
  cxInfoInvertContrast: "--white",
  cxBase: "--grafite-darker",
  cxBackground: "--grafite-darker",
  cxContrast: "--warning",
  cxShadow: "--cxShadowLight",
  cxShadowSm: "--cxShadowLightSm",
  cxShadowLg: "--cxShadowLightLg",
  cxTransparentBase025: "rgba(0, 0, 0, 0.025)",
  cxTransparentBase050: "rgba(0, 0, 0, 0.05)",
  cxTransparentBase075: "rgba(0, 0, 0, 0.075)",
  cxTransparentBase25: "rgba(0, 0, 0, 0.25)",
  cxTransparentBase50: "rgba(0, 0, 0, 0.5)",
  cxTransparentBase75: "rgba(0, 0, 0, 0.75)",
  cxTransparentContrast025: "rgba(255, 255, 255, 0.025)",
  cxTransparentContrast050: "rgba(255, 255, 255, 0.05)",
  cxTransparentContrast075: "rgba(255, 255, 255, 0.075)",
  cxTransparentContrast25: "rgba(255, 255, 255, 0.25)",
  cxTransparentContrast50: "rgba(255, 255, 255, 0.5)",
  cxTransparentContrast75: "rgba(255, 255, 255, 0.75)"
};
/* Light blue theme */
const blueLightBaseTheme = {
  cxHeaderBgColor: "--primary",
  cxHeaderTextColor: "--white",
  cxSidemenuBgColor: "--white",
  cxSidemenuTextColor: "--grafite",
  cxSidemenuActiveBgColor: "--primary",
  cxSidemenuActiveTextColor: "--white",
  cxBodyBgColor: "--polar",
  cxBodyTextColor: "--grafite",
  cxMain: "--secondary",
  cxMainDark: "--secondary-dark",
  cxMainDarker: "--secondary-darker",
  cxMainLight: "--secondary-light",
  cxMainLighter: "--secondary-lighter",
  cxAccent: "--primary",
  cxAccentDark: "--primary-dark",
  cxAccentDarker: "--primary-darker",
  cxAccentLight: "--primary-light",
  cxAccentLighter: "--primary-lighter",
  cxLink: "--primary-light",
  cxRemark: "--turquesa",
  cxAux: "--grafite-light",
  cxAuxDark: "--grafite",
  cxAuxDarker: "--grafite-dark",
  cxAuxLight: "--grafite-lighter",
  cxAuxLighter: "--cancel-darker",
  cxCancel: "--cinza",
  cxCancelDark: "--cinza-dark",
  cxCancelDarker: "--cinza-darker",
  cxCancelLight: "--cinza-light",
  cxCancelLighter: "--cinza-lighter"
};
const blueLightTheme = Object.assign(blueLightBaseTheme, baseLightTheme);
/* Dark lightblue theme */
const blueDarkBaseTheme = {
  cxHeaderBgColor: "--grafite-darker",
  cxHeaderTextColor: "--cinza-lighter",
  cxSidemenuBgColor: "--grafite-darker",
  cxSidemenuTextColor: "--cinza-lighter",
  cxSidemenuActiveBgColor: "--ceu",
  cxSidemenuActiveTextColor: "--white",
  cxBodyBgColor: "--grafite-dark",
  cxBodyTextColor: "--white",
  cxMain: "--secondary",
  cxMainDark: "--secondary-dark",
  cxMainDarker: "--secondary-darker",
  cxMainLight: "--secondary-light",
  cxMainLighter: "--secondary-lighter",
  cxAccent: "--ceu",
  cxAccentDark: "--ceu-dark",
  cxAccentDarker: "--ceu-darker",
  cxAccentLight: "--ceu-light",
  cxAccentLighter: "--ceu-lighter",
  cxLink: "--primary-light",
  cxRemark: "--turquesa",
  cxAux: "--cinza",
  cxAuxDark: "--cinza-dark",
  cxAuxDarker: "--cinza-darker",
  cxAuxLight: "--cinza-light",
  cxAuxLighter: "--cinza-lighter",
  cxCancel: "--grafite-light",
  cxCancelDark: "--grafite",
  cxCancelDarker: "--grafite-dark",
  cxCancelLight: "--grafite-lighter",
  cxCancelLighter: "--cancel-darker"
};
const blueDarkTheme = Object.assign(blueDarkBaseTheme, baseDarkTheme);
/* Purple Theme */
const purpleLightBaseTheme = {
  cxHeaderBgColor: "--uva-darker",
  cxHeaderTextColor: "--cinza-lighter",
  cxSidemenuBgColor: "--white",
  cxSidemenuTextColor: "--grafite",
  cxSidemenuActiveBgColor: "--uva",
  cxSidemenuActiveTextColor: "--white",
  cxBodyBgColor: "--polar",
  cxBodyTextColor: "--grafite",
  cxMain: "--secondary",
  cxMainDark: "--secondary-dark",
  cxMainDarker: "--secondary-darker",
  cxMainLight: "--secondary-light",
  cxMainLighter: "--secondary-lighter",
  cxAccent: "--uva",
  cxAccentDark: "--uva-dark",
  cxAccentDarker: "--uva-darker",
  cxAccentLight: "--uva-light",
  cxAccentLighter: "--uva-lighter",
  cxLink: "--primary-light",
  cxRemark: "--tangerina",
  cxAux: "--grafite-light",
  cxAuxDark: "--grafite",
  cxAuxDarker: "--grafite-dark",
  cxAuxLight: "--grafite-lighter",
  cxAuxLighter: "--cancel-darker",
  cxCancel: "--cinza",
  cxCancelDark: "--cinza-dark",
  cxCancelDarker: "--cinza-darker",
  cxCancelLight: "--cinza-light",
  cxCancelLighter: "--cinza-lighter"
};
const purpleLightTheme = Object.assign(purpleLightBaseTheme, baseLightTheme);
/* High Contrast theme */
const highContrastBaseTheme = {
  cxHeaderBgColor: "--black",
  cxHeaderTextColor: "--warning",
  cxSidemenuBgColor: "--black",
  cxSidemenuTextColor: "--warning",
  cxSidemenuActiveBgColor: "--warning",
  cxSidemenuActiveTextColor: "--black",
  cxBodyBgColor: "--black",
  cxBodyTextColor: "--warning",
  cxMain: "--secondary-light",
  cxMainDark: "--secondary-dark",
  cxMainDarker: "--secondary-darker",
  cxMainLight: "--secondary-light",
  cxMainLighter: "--secondary-lighter",
  cxAccent: "--ceu",
  cxAccentDark: "--ceu-dark",
  cxAccentDarker: "--ceu-darker",
  cxAccentLight: "--ceu-light",
  cxAccentLighter: "--ceu-lighter",
  cxLink: "--primary-light",
  cxRemark: "--turquesa",
  cxAux: "--cinza-lighter",
  cxAuxDark: "--cinza-dark",
  cxAuxDarker: "--cinza-darker",
  cxAuxLight: "--cinza-light",
  cxAuxLighter: "--cinza-lighter",
  cxCancel: "--cinza-lighter",
  cxCancelDark: "--grafite",
  cxCancelDarker: "--grafite-dark",
  cxCancelLight: "--grafite-lighter",
  cxCancelLighter: "--cancel-darker"
};
const highContrastTheme = Object.assign(highContrastBaseTheme, baseHighContrastTheme);
class GlobalThemes {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  static #_ = this.lightTheme = new GlobalThemes("Tema Padrão", {
    name: "lightTheme",
    className: "tema-padrao",
    theme: blueLightTheme
  });
  /*    static readonly purpleTheme = new GlobalThemes(
        "Tema Claro e Roxo", { name: "purpleTheme", className: "tema-claro", theme: purpleLightTheme }
     ); */
  static #_2 = this.darkTheme = new GlobalThemes("Tema Escuro", {
    name: "darkTheme",
    className: "tema-escuro",
    theme: blueDarkTheme
  });
  static #_3 = this.highContrast = new GlobalThemes("Tema Alto Contraste", {
    name: "highContrast",
    className: "tema-alto-contraste",
    theme: highContrastTheme
  });
  static getThemes() {
    const temas = [];
    Object.getOwnPropertyNames(GlobalThemes).forEach(theme => {
      const tema = GlobalThemes[theme];
      if (tema && tema.value) {
        temas.push(tema);
      }
    });
    return temas;
  }
  toString() {
    return this.key;
  }
}


/***/ }),

/***/ 3112:
/*!*******************************************!*\
  !*** ./src/app/services/style.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleService": () => (/* binding */ StyleService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _models_global_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/global-style */ 4667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);




class StyleService {
  constructor(document, rendererFactory) {
    this.document = document;
    this.BODY_FONT_SIZE = "bodyFontSize";
    this.BODY_FONT_SIZE_CSS = "--cxBodyFontSize";
    this.DEFAULT_BODY_FONT_SIZE = "14px";
    this.BODY_BG_COLOR = "bodyBgColor";
    this.BODY_TEXT_COLOR = "bodyTextColor";
    this.GLOBAL_THEME = "globalTheme";
    this.DEFAULT_GLOBAL_THEME_NAME = _models_global_style__WEBPACK_IMPORTED_MODULE_0__.GlobalThemes.lightTheme.value.name;
    this.currentGlobalStyleSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.currentGlobalStyle$ = this.currentGlobalStyleSource.asObservable();
    this.currentFontSizeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("");
    this.currentFontSize$ = this.currentFontSizeSource.asObservable();
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  setDefaultStyle() {
    let bodyFontSize = this.getLocalStorageValue(this.BODY_FONT_SIZE);
    if (!bodyFontSize || bodyFontSize === "null") {
      bodyFontSize = this.DEFAULT_BODY_FONT_SIZE;
    }
    this.setFontSize(bodyFontSize);
    let themeName = this.getLocalStorageValue(this.GLOBAL_THEME);
    if (!themeName || !_models_global_style__WEBPACK_IMPORTED_MODULE_0__.GlobalThemes[themeName]) {
      themeName = this.DEFAULT_GLOBAL_THEME_NAME;
    }
    this.setGlobalTheme(themeName);
  }
  setFontSize(fontSize) {
    this.setCssVariable(this.BODY_FONT_SIZE_CSS, fontSize);
    window.localStorage.setItem(this.BODY_FONT_SIZE, fontSize);
    this.currentFontSizeSource.next(fontSize);
  }
  setGlobalTheme(tema) {
    const body = this.document.body;
    const globalTheme = _models_global_style__WEBPACK_IMPORTED_MODULE_0__.GlobalThemes[tema];
    const theme = globalTheme.value.theme;
    let color = "";
    for (const prop in theme) {
      if (theme.hasOwnProperty(prop)) {
        if (theme[prop][0] === "-") {
          const style = getComputedStyle(document.body);
          color = style.getPropertyValue(theme[prop]);
        } else {
          color = theme[prop];
        }
        this.setCssVariable(`--${prop}`, color);
      }
    }
    this.renderer.setAttribute(body, "class", globalTheme.value.className);
    this.setLocalStorageValue(this.GLOBAL_THEME, tema);
    this.currentGlobalStyleSource.next(globalTheme);
  }
  getCssVariableValue(name) {
    const style = getComputedStyle(document.body);
    return style.getPropertyValue(name);
  }
  setCssVariable(name, value) {
    const root = this.document.documentElement;
    root.style.setProperty(name, value);
  }
  getLocalStorageValue(name) {
    return window.localStorage.getItem(name);
  }
  setLocalStorageValue(name, value) {
    window.localStorage.setItem(name, value);
  }
  static #_ = this.ɵfac = function StyleService_Factory(t) {
    return new (t || StyleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: StyleService,
    factory: StyleService.ɵfac,
    providedIn: "root"
  });
}


/***/ }),

/***/ 1271:
/*!**************************************************!*\
  !*** ./src/app/services/url-redirect.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlRedirectService": () => (/* binding */ UrlRedirectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);



class UrlRedirectService {
  constructor(router) {
    this.router = router;
    this.redirectParamsSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.redirectParams$ = this.redirectParamsSource.asObservable();
  }
  setRedirectParams(route, urlTree) {
    const urlFull = urlTree.toString();
    urlTree.queryParams = {};
    const urlNoParam = urlTree.toString();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.zip)(route.queryParams, (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(urlNoParam)).subscribe(paramsConcat => {
      const params = paramsConcat[0];
      const url = paramsConcat[1];
      const redirectParams = {
        cpfCnpj: params.cpfCnpj,
        origem: params.origem,
        urlFull: urlFull,
        urlNoParams: urlNoParam,
        target: params.target
      };
      if (!redirectParams.target) {
        return;
      }
      this.redirectParamsSource.next(redirectParams);
      this.router.navigateByUrl(redirectParams.target);
    });
  }
  static #_ = this.ɵfac = function UrlRedirectService_Factory(t) {
    return new (t || UrlRedirectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: UrlRedirectService,
    factory: UrlRedirectService.ɵfac,
    providedIn: "root"
  });
}


/***/ }),

/***/ 4210:
/*!************************************************************!*\
  !*** ./src/app/shared/animations/simple-fade.animation.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeAnimation": () => (/* binding */ fadeAnimation),
/* harmony export */   "fadeInAnimation": () => (/* binding */ fadeInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2223);

const simpleFadeAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: '{{ opacity }}'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ time }}')]);
const fadeAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('simpleFadeAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.useAnimation)(simpleFadeAnimation, {
  params: {
    opacity: 0,
    time: '0.5s'
  }
})])]);
const fadeInAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.useAnimation)(simpleFadeAnimation, {
  params: {
    opacity: 0,
    time: '0.3s'
  }
})])]);

/***/ }),

/***/ 7415:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/accordion/accordion.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionComponent": () => (/* binding */ AccordionComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var src_app_layout_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/side-menu/side-menu.service */ 9870);
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-item/menu-item.component */ 8692);






class AccordionComponent {
  constructor(cdr, location, router, menuService) {
    this.cdr = cdr;
    this.location = location;
    this.router = router;
    this.menuService = menuService;
    this.options = {};
    this.menus = [];
    this.config = {};
    this.url = "";
  }
  ngOnInit() {
    this.config = this.mergeConfig(this.options);
    this.router.events.subscribe(ev => {
      if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        this.toggleAllFalse(this.menus);
        this.toggleActiveByLocation(this.location.path(), this.menus);
        this.cdr.detectChanges();
      }
    });
  }
  toggleActiveByLocation(location, menus) {
    menus.forEach(menu => {
      if (location.includes(menu.url)) {
        menu.active = true;
        if (menu.submenu) {
          this.toggleActiveByLocation(location, menu.submenu);
        }
      }
    });
  }
  mergeConfig(options) {
    const config = {
      // selector: '#accordion',
      multi: true
    };
    return {
      ...config,
      ...options
    };
  }
  toggleAllFalse(menus) {
    menus.forEach(menu => {
      menu.active = false;
      if (menu.submenu) {
        this.toggleAllFalse(menu.submenu);
      }
    });
  }
  activate(menu) {
    if (menu.isLink) {
      this.navigate(menu.url);
    } else {
      menu.active = !menu.active;
    }
  }
  navigate(url) {
    this.router.navigateByUrl(url);
  }
  trocarMenuLateral() {
    this.menuService.trocar();
  }
  fecharMenulateral() {
    this.menuService.fechar();
  }
  abrirMenuLateral() {
    this.menuService.abrir();
  }
  static #_ = this.ɵfac = function AccordionComponent_Factory(t) {
    return new (t || AccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_layout_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_0__.SideMenuService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AccordionComponent,
    selectors: [["app-accordion"]],
    inputs: {
      options: "options",
      menus: "menus"
    },
    decls: 3,
    vars: 4,
    consts: [[1, "accordion", "nav", "flex-column", 3, "ngClass"], [3, "menus", "activateMenu"]],
    template: function AccordionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-menu-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activateMenu", function AccordionComponent_Template_app_menu_item_activateMenu_2_listener($event) {
          return ctx.activate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.menuService.isAberto$) ? "menu-aberto" : "menu-reduzido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menus", ctx.menus);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_1__.MenuItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: [".accordion[_ngcontent-%COMP%] {\n  width: 100%;\n  list-style: none;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvcmRpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 8692:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/accordion/menu-item/menu-item.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemComponent": () => (/* binding */ MenuItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_layout_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/side-menu/side-menu.service */ 9870);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);





function MenuItemComponent_li_0_div_1_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 9);
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "active": a0,
    "has-submenu": a1,
    "is-link": a2
  };
};
function MenuItemComponent_li_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuItemComponent_li_0_div_1_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.activate(menu_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuItemComponent_li_0_div_1_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.activate(menu_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuItemComponent_li_0_div_1_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.collapse(menu_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MenuItemComponent_li_0_div_1_i_6_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", menu_r1.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, menu_r1.active, menu_r1.active && menu_r1.submenu, menu_r1.active && !menu_r1.submenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menu_r1.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menu_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r1.submenu);
  }
}
const _c1 = function (a0) {
  return {
    "d-none": a0
  };
};
function MenuItemComponent_li_0_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 10, 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-menu-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, !menu_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menu_r1.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menu_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menus", menu_r1.submenu)("parentRef", _r14);
  }
}
function MenuItemComponent_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuItemComponent_li_0_div_1_Template, 7, 10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuItemComponent_li_0_ul_2_Template, 7, 8, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", menu_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r1.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r1.submenu);
  }
}
class MenuItemComponent {
  constructor(menuService, router) {
    this.menuService = menuService;
    this.router = router;
    this.menus = [];
    this.activateMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {}
  activate(menu) {
    if (menu.isLink) {
      this.navigate(menu.url);
    } else {
      menu.active = !menu.active;
    }
  }
  collapse(menu) {
    menu.active = !menu.active;
  }
  navigate(url) {
    this.router.navigateByUrl(url);
  }
  abrirMenuLateral() {
    this.menuService.abrir();
  }
  fecharMenuLateral() {
    this.menuService.fechar();
  }
  static #_ = this.ɵfac = function MenuItemComponent_Factory(t) {
    return new (t || MenuItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_layout_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_0__.SideMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuItemComponent,
    selectors: [["app-menu-item"]],
    inputs: {
      menus: "menus",
      parentRef: "parentRef"
    },
    outputs: {
      activateMenu: "activateMenu"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "nav-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["class", "menu-item", "role", "button", 3, "title", "ngClass", 4, "ngIf"], ["class", "submenu", 3, "ngClass", 4, "ngIf"], ["role", "button", 1, "menu-item", 3, "title", "ngClass"], [1, "menu-item-icon", 3, "click"], [1, "menu-item-name", 3, "click"], [1, "menu-item-caret", 3, "click"], ["class", "fa fa-chevron-down item-caret", 4, "ngIf"], [1, "fa", "fa-chevron-down", "item-caret"], [1, "submenu", 3, "ngClass"], ["submenuDiv", ""], [1, "submenu-title"], [1, "ml-3"], [3, "menus", "parentRef"]],
    template: function MenuItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MenuItemComponent_li_0_Template, 3, 4, "li", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menus);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, MenuItemComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9471:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/buttons/back-button/back-button.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButtonComponent": () => (/* binding */ BackButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class BackButtonComponent {
  constructor() {
    this.btnClass = "btn btn-link text-contrast-light p-0";
    this.iconClass = "fas fa-chevron-left mr-2";
    this.text = "Voltar";
  }
  ngOnInit() {}
  goBack() {
    history.back();
  }
  static #_ = this.ɵfac = function BackButtonComponent_Factory(t) {
    return new (t || BackButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BackButtonComponent,
    selectors: [["app-back-button"]],
    inputs: {
      btnClass: "btnClass",
      iconClass: "iconClass",
      text: "text"
    },
    decls: 3,
    vars: 5,
    consts: [["role", "button", 3, "click"]],
    template: function BackButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackButtonComponent_Template_span_click_0_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.btnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.iconClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
      }
    },
    encapsulation: 2
  });
}


/***/ }),

/***/ 933:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/shared-components.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponentsModule": () => (/* binding */ SharedComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _tooltip_icon_tooltip_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip-icon/tooltip-icon.component */ 1759);
/* harmony import */ var _buttons_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/back-button/back-button.component */ 9471);
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion/accordion.component */ 7415);
/* harmony import */ var _guia_caixa_components_stepper_stepper_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../guia-caixa/components/stepper/stepper.module */ 8390);
/* harmony import */ var _accordion_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion/menu-item/menu-item.component */ 8692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);









class SharedComponentsModule {
  static #_ = this.ɵfac = function SharedComponentsModule_Factory(t) {
    return new (t || SharedComponentsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SharedComponentsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
    //HighlightModule,
    _guia_caixa_components_stepper_stepper_module__WEBPACK_IMPORTED_MODULE_3__.StepperModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedComponentsModule, {
    declarations: [_tooltip_icon_tooltip_icon_component__WEBPACK_IMPORTED_MODULE_0__.TooltipIconComponent, _buttons_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_1__.BackButtonComponent, _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__.AccordionComponent,
    //CodeViewComponent,
    _accordion_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__.MenuItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
    //HighlightModule,
    _guia_caixa_components_stepper_stepper_module__WEBPACK_IMPORTED_MODULE_3__.StepperModule],
    exports: [_tooltip_icon_tooltip_icon_component__WEBPACK_IMPORTED_MODULE_0__.TooltipIconComponent, _buttons_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_1__.BackButtonComponent, _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__.AccordionComponent]
  });
})();

/***/ }),

/***/ 1759:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/tooltip-icon/tooltip-icon.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipIconComponent": () => (/* binding */ TooltipIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class TooltipIconComponent {
  constructor() {
    this.text = '';
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function TooltipIconComponent_Factory(t) {
    return new (t || TooltipIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TooltipIconComponent,
    selectors: [["app-tooltip-icon"]],
    inputs: {
      text: "text"
    },
    decls: 2,
    vars: 1,
    consts: [["role", "button", "onmouseenter", "$(this).tooltip('show')", "data-toggle", "top", "data-html", "true", 1, "text-link-dark", "ml-2", 3, "title"], [1, "fas", "fa-info-circle", "fa-lg"]],
    template: function TooltipIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.text);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}


/***/ }),

/***/ 136:
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mockedSideMenuItems": () => (/* binding */ mockedSideMenuItems)
/* harmony export */ });
const mockedSideMenuItems = [{
  name: "Início",
  iconClass: "fas fa-lg fa-home",
  description: "Módulo que trata de ...",
  url: "/home",
  isLink: true,
  enabled: true,
  level: 1
}, {
  name: "Módulo 1",
  description: "Módulo que trata de ...",
  iconClass: "fas fa-lg fa-dollar-sign",
  url: "/modulo1",
  isLink: true,
  enabled: true,
  level: 2
}, {
  name: "Módulo 2",
  iconClass: "far fa-lg fa-building",
  description: "Módulo que trata de ...",
  url: "/modulo2",
  isLink: true,
  enabled: true,
  level: 2
}, {
  name: "Módulo 3",
  iconClass: "far fa-lg fa-id-badge",
  description: "Módulo que trata de ...",
  url: "/modulo3",
  isLink: true,
  enabled: true,
  level: 2
}, {
  name: "Módulo 4",
  iconClass: "far fa-lg fa-user",
  description: "Módulo que trata de ...",
  url: "/modulo4",
  isLink: true,
  enabled: true,
  level: 2
}, {
  name: "Módulo 5",
  iconClass: "fas fa-lg fa-users",
  description: "Módulo que trata de ...",
  url: "/modulo5",
  isLink: true,
  enabled: true,
  level: 2
}, {
  name: "Módulo 6",
  iconClass: "far fa-lg fa-credit-card",
  description: "Módulo que trata de ...",
  url: "/modulo6",
  isLink: true,
  enabled: true,
  level: 2
}];

/***/ }),

/***/ 8034:
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/ripple.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RippleDirective": () => (/* binding */ RippleDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);


class RippleDirective {
  constructor(el, renderer, document) {
    this.el = el;
    this.renderer = renderer;
    this.document = document;
  }
  ngAfterContentInit() {
    this.renderer.setStyle(this.el.nativeElement, "position", "relative");
    this.renderer.setStyle(this.el.nativeElement, "overflow", "hidden");
  }
  onClick(ev) {
    const children = this.el.nativeElement.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.classList.contains("cx-ripple")) {
        this.renderer.removeChild(this.el.nativeElement, child);
      }
    }
    const circle = this.document.createElement('div');
    this.renderer.appendChild(this.el.nativeElement, circle);
    const diametro = Math.max(this.el.nativeElement.clientWidth, this.el.nativeElement.clientHeight);
    this.renderer.setStyle(circle, "width", diametro + 'px');
    this.renderer.setStyle(circle, "height", diametro + 'px');
    const offset = this.getOffset();
    /*     this.renderer.setStyle(circle, "left", ev.pageX - offset.left - (diametro / 2) + 'px'); */
    this.renderer.setStyle(circle, "left", 0);
    this.renderer.setStyle(circle, "top", ev.pageY - offset.top - diametro / 2 + 'px');
    const rippleColor = this.setRippleColor();
    this.renderer.setStyle(circle, "background-color", rippleColor);
    this.renderer.addClass(circle, "cx-ripple");
  }
  setRippleColor() {
    const hexcolor = window.getComputedStyle ? window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("background-color") : this.el.nativeElement.style.backgroundColor;
    const rgb = hexcolor.replace("rgba", "").replace("rgb", "").replace("(", "").replace(")", "").split(",");
    const r = parseInt(rgb[0].trim());
    const g = parseInt(rgb[1].trim());
    const b = parseInt(rgb[2].trim());
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? ' rgba(0, 0, 0, 0.2)' : "rgba(255, 255, 255, 0.7)";
  }
  getOffset() {
    let elem = this.el.nativeElement;
    let x = elem.offsetLeft;
    let y = elem.offsetTop;
    while (elem = elem.offsetParent) {
      x += elem.offsetLeft;
      y += elem.offsetTop;
    }
    return {
      left: x,
      top: y
    };
  }
  static #_ = this.ɵfac = function RippleDirective_Factory(t) {
    return new (t || RippleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: RippleDirective,
    selectors: [["", "cx-ripple", ""]],
    hostBindings: function RippleDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RippleDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    }
  });
}


/***/ }),

/***/ 577:
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scrollspy.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSpyDirective": () => (/* binding */ ScrollSpyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);


class ScrollSpyDirective {
  constructor(_el) {
    this._el = _el;
    this.spiedTags = [];
    this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onScroll(event) {
    let currentSection;
    const children = this._el.nativeElement.children;
    const scrollTop = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if (element.offsetTop - parentOffset <= scrollTop) {
          currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
  static #_ = this.ɵfac = function ScrollSpyDirective_Factory(t) {
    return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ScrollSpyDirective,
    selectors: [["", "scrollSpy", ""]],
    hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) {
          return ctx.onScroll($event);
        });
      }
    },
    inputs: {
      spiedTags: "spiedTags"
    },
    outputs: {
      sectionChange: "sectionChange"
    }
  });
}


/***/ }),

/***/ 9539:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/bytesize-pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByteSizePipe": () => (/* binding */ ByteSizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class ByteSizePipe {
  transform(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  static #_ = this.ɵfac = function ByteSizePipe_Factory(t) {
    return new (t || ByteSizePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "bytesize",
    type: ByteSizePipe,
    pure: true
  });
}


/***/ }),

/***/ 2091:
/*!******************************************!*\
  !*** ./src/app/shared/pipes/cpf-pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CpfPipe": () => (/* binding */ CpfPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class CpfPipe {
  transform(cpf) {
    if (!cpf) {
      return;
    }
    const notNumberRegx = /\D/g;
    let cpfString = cpf.trim().replace(notNumberRegx, '');
    if (cpfString.length < 11) {
      cpfString = cpfString.padStart(11, "0");
    } else if (cpfString.length > 11) {
      cpfString = cpfString.slice(0, 11);
    }
    const s = cpfString.match(/.{1,3}/g);
    if (s) {
      return `${s[0]}.${s[1]}.${s[2]}-${s[3]}`;
    }
  }
  static #_ = this.ɵfac = function CpfPipe_Factory(t) {
    return new (t || CpfPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "cpf",
    type: CpfPipe,
    pure: true
  });
}


/***/ }),

/***/ 8246:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);


class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value, type) {
    switch (type) {
      case "html":
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case "style":
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case "script":
        return this.sanitizer.bypassSecurityTrustScript(value);
      case "url":
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case "resourceUrl":
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
  static #_ = this.ɵfac = function SafePipe_Factory(t) {
    return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "safe",
    type: SafePipe,
    pure: true
  });
}


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shared-components.module */ 933);
/* harmony import */ var _directives_scrollspy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/scrollspy.directive */ 577);
/* harmony import */ var _pipes_bytesize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/bytesize-pipe */ 9539);
/* harmony import */ var _pipes_cpf_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/cpf-pipe */ 2091);
/* harmony import */ var _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/ripple.directive */ 8034);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/safe.pipe */ 8246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);







class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule, _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_directives_scrollspy_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollSpyDirective, _pipes_bytesize_pipe__WEBPACK_IMPORTED_MODULE_2__.ByteSizePipe, _pipes_cpf_pipe__WEBPACK_IMPORTED_MODULE_3__.CpfPipe, _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_4__.RippleDirective, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__.SafePipe],
    imports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule],
    exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule, _directives_scrollspy_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollSpyDirective, _pipes_bytesize_pipe__WEBPACK_IMPORTED_MODULE_2__.ByteSizePipe, _pipes_cpf_pipe__WEBPACK_IMPORTED_MODULE_3__.CpfPipe, _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_4__.RippleDirective, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__.SafePipe]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ 4147);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
  production: false,
  apiUrl: "http://localhost:8000",
  version: String(_package_json__WEBPACK_IMPORTED_MODULE_0__.version)
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"prototipo-caixa","version":"1.0.0","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","prod":"ng build --configuration production --base-href /","e2e":"ng e2e","ghpages":"ng build --configuration production --output-path docs --base-href https://felipedpaulasantos.github.io/prototipo-caixa/","stats":"webpack-bundle-analyzer docs/stats.json"},"private":true,"dependencies":{"@angular/animations":"^16.0.0","@angular/common":"^16.0.0","@angular/compiler":"^16.0.0","@angular/core":"^16.0.0","@angular/forms":"^16.0.0","@angular/platform-browser":"^16.0.0","@angular/platform-browser-dynamic":"^16.0.0","@angular/router":"^16.0.0","@auth0/angular-jwt":"^4.2.0","@fortawesome/fontawesome-free":"^5.13.0","@ng-select/ng-select":"^9.1.0","angular-cli-ghpages":"^0.6.2","angular-datatables":"^14.0.2","angular-oauth2-oidc":"^9.2.2","angular-resizable-element":"^3.3.4","bootstrap":"^4.5.0","bootstrap-datepicker":"^1.9.0","bootstrap-select":"^1.13.17","chart.js":"^2.9.3","datatables.net":"^1.10.21","datatables.net-bs4":"^1.10.21","datatables.net-buttons":"^1.6.2","datatables.net-buttons-bs4":"^1.6.2","datatables.net-buttons-dt":"^1.6.2","datatables.net-colreorder-bs4":"^1.5.1","datatables.net-dt":"^1.10.21","datatables.net-fixedheader-bs4":"^3.1.7","datatables.net-responsive-bs4":"^2.2.5","jquery":"^3.5.1","ng2-charts":"^4.1.1","ngx-mask":"^15.0.2","ngx-perfect-scrollbar":"^10.1.1","ngx-spinner":"^15.0.1","ngx-toastr":"^16.2.0","ngx-ui-loader":"^13.0.0","popper.js":"^1.16.1","rxjs":"^7.8.0","socket.io-client":"^2.3.0","toastr":"^2.1.4","tslib":"^2.0.0","zone.js":"~0.13.0"},"devDependencies":{"@angular-devkit/build-angular":"^16.0.0","@angular-eslint/builder":"16.0.1","@angular-eslint/eslint-plugin":"16.0.1","@angular-eslint/eslint-plugin-template":"16.0.1","@angular-eslint/schematics":"16.0.1","@angular-eslint/template-parser":"16.0.1","@angular/cli":"^16.0.0","@angular/compiler-cli":"^16.0.0","@angular/language-service":"^16.0.0","@types/datatables.net":"^1.10.19","@types/datatables.net-buttons":"^1.4.3","@types/jasmine":"~3.6.0","@types/jasminewd2":"~2.0.3","@types/jquery":"^3.3.38","@types/node":"^12.11.1","@typescript-eslint/eslint-plugin":"^5.59.2","@typescript-eslint/parser":"^5.59.2","chartjs-plugin-datalabels":"^0.7.0","codelyzer":"^6.0.0","eslint":"^8.39.0","jasmine-core":"~3.6.0","jasmine-spec-reporter":"~5.0.0","jszip":"^3.5.0","karma":"~6.3.9","karma-chrome-launcher":"~3.1.0","karma-coverage-istanbul-reporter":"~3.0.2","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.5.0","ngx-highlightjs":"^4.1.0-beta","pdfmake":"^0.1.65","protractor":"~7.0.0","ts-node":"^8.10.2","tslint":"~6.1.0","typescript":"~5.0.4","webpack-bundle-analyzer":"^4.7.0"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map