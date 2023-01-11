"use strict";(self.webpackChunkprototipo_caixa=self.webpackChunkprototipo_caixa||[]).push([[278],{5278:(G,v,a)=>{a.r(v),a.d(v,{ComponentesBasicosModule:()=>u});var i=a(6895),d=a(6123),C=a(1438),t=a(4650),_=a(7185),x=a(2994),T=a(3891),h=a(2756);const A=["scrollElement"];function k(n,e){if(1&n&&(t.ynx(0),t.TgZ(1,"tr")(2,"td")(3,"button"),t._uU(4,"Padr\xe3o"),t.qZA()(),t.TgZ(5,"td")(6,"button"),t._uU(7,"Pequeno"),t.qZA()(),t.TgZ(8,"td")(9,"button"),t._uU(10,"Grande"),t.qZA()(),t.TgZ(11,"td")(12,"button"),t._uU(13,"Outline"),t.qZA()(),t.TgZ(14,"td")(15,"button",39),t._uU(16,"Desabilitado"),t.qZA()()(),t.BQk()),2&n){const o=e.$implicit;t.xp6(3),t.Gre("btn btn-",null==o?null:o.name,""),t.xp6(3),t.Gre("btn btn-",null==o?null:o.name," btn-sm"),t.xp6(3),t.Gre("btn btn-",null==o?null:o.name," btn-lg"),t.xp6(3),t.Gre("btn btn-outline-",null==o?null:o.name,""),t.xp6(3),t.Gre("btn btn-",null==o?null:o.name,"")}}const U=function(){return["html"]};class m extends C.P{constructor(e){super(e),this.toastr=e,this.temas=[{name:"main"},{name:"accent"},{name:"cancel"},{name:"aux"},{name:"success"},{name:"danger"},{name:"info"},{name:"warning"}],this.spiedTags=["APP-DOCUMENTACAO-TEMPLATE"],this.sectionOffset=0,this.currentSection="painelBotoes",this.navItems=[{id:"painelBotoes",name:"Padr\xe3o"},{id:"painelBotoesTamanho",name:"\xedcones"}],this.botoesIntroducao='<button class="btn btn-main">Principal</button>;\n<button class="btn btn-accent">Destaque</button>;\n<button class="btn btn-cancel">Cancel</button>;\n<button class="btn btn-outline-aux">Auxiliar</button>;\n<button class="btn btn-danger btn-sm">Perigo</button>;\n<button class="btn btn-success btn-lg">Sucesso</button>;\n<button class="btn btn-warning">Alerta</button>\n<button class="btn btn-info">Informativo</button>\n<button class="btn btn-link">Link</button>',this.botoesIcones='<button class="btn btn-accent btn-sm">\n  <i class="fa fa-plus mr-2"></i>Incluir\n</button>\n\n<button class="btn btn-outline-accent">\n  <i class="fa fa-edit mr-2"></i>Editar\n</button>\n\n<button class="btn btn-main btn-lg">\n  <i class="fa fa-lg fa-save mr-3"></i>Salvar\n</button>',this.htmlCodeBotoes='<button class="btn btn-cancel">Bot\xe3o</button>'.trim(),this.htmlCodeBotoesTematicos='        <button class="btn btn-accent">Prim\xe1rio</button> &nbsp;\n<button class="btn btn-danger-dark">Erro com tom escuro</button> &nbsp;\n<button class="btn btn-apoio-light">Apoio com tom claro</button> &nbsp;\n<button class="btn btn-outline-info">Info - outline</button>'.trim(),this.htmlCodeBotoesTamanho='        <button class="btn btn-outline-dark btn-sm">Pequeno</button> &nbsp;\n<button class="btn btn-primario btn-lg">Grande</button> &nbsp;\n<button class="btn btn-primario btn-lg disabled">Grande desabilitado</button> &nbsp;\n<button class="btn btn-outline-accent">\n  <i class="fa fa-edit mr-2"></i>\n  Com \xedcone\n</button>'.trim(),this.htmlCodeExemplo='          <button class="btn btn-link">\n  Flat\n</button>\n<button class="btn btn-link rounded-circle p-3">\n  <i class="fa fa-bars fa-2x"></i>\n</button>\n<button class="btn btn-link text-main rounded-circle p-2">\n  <i class="fa fa-home fa-2x"></i>\n</button>\n<button class="btn btn-outline-apoio rounded-circle p-2">\n  <i class="fa fa-check fa-lg"></i>\n</button>\n<button class="btn btn-primario rounded-circle p-3">\n  <i class="fa fa-play fa-lg"></i>\n</button>\n<button class="btn btn-outline-perigo rounded-circle shadow-none p-4">\n  <i class="fa fa-trash fa-2x"></i>\n</button>\n<button class="btn btn-aux shadow-none">\n  Sem sombra\n</button>'.trim(),this.cssCodeExemplo=".btn-exemplo button {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}".trim(),this.htmlCodeTodosTematicos='        <div class="table-responsive">\n  <table class="table table-caixa table-borderless">\n    <tbody>\n      <ng-container *ngFor="let tema of temas; let i = index">\n        <tr>\n          <td><button class="btn btn-{{tema.name}}">Padr\xe3o</button></td>\n          <td><button class="btn btn-{{tema.name}}-light">Claro</button></td>\n          <td><button class="btn btn-{{tema.name}}-dark">Escuro</button></td>\n          <td><button class="btn btn-outline-{{tema.name}}">Outline</button></td>\n          <td><button class="btn btn-outline-{{tema.name}}-light">Claro</button></td>\n          <td><button class="btn btn-outline-{{tema.name}}-dark">Escuro</button></td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>'.trim(),this.tsCodeTodosTematicos='  import { Component } from \'@angular/core\';\n\n  @Component({\n      selector: \'app-botoes\',\n      templateUrl: \'./botoes.component.html\',\n      styleUrls: [\'./botoes.component.scss\']\n  })\n  export class BotoesComponent {\n\n    temas = [\n      { "name": "primary" },\n      { "name": "secondary" },\n      { "name": "success" },\n      { "name": "danger" },\n      { "name": "info" },\n      { "name": "warning" },\n      { "name": "apoio" },\n      { "name": "aux" },\n      { "name": "light" },\n      { "name": "dark" }\n    ]\n  }\n  '.trimRight()}ngOnInit(){}}m.\u0275fac=function(e){return new(e||m)(t.Y36(_._W))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-botoes"]],viewQuery:function(e,o){if(1&e&&t.Gf(A,5),2&e){let s;t.iGM(s=t.CRH())&&(o.scrollElement=s.first)}},hostBindings:function(e,o){1&e&&t.NdJ("scroll",function(Z){return o.onScroll(Z)},!1,t.Jf7)},features:[t.qOj],decls:92,vars:26,consts:[[1,"titulo"],["role","tablist",1,"nav","nav-pills","tab-caixa"],[1,"nav-item"],["data-toggle","tab","href","#visaoGeral","role","tab",1,"nav-link","text-uppercase","active"],["data-toggle","tab","href","#exemplos","role","tab",1,"nav-link","text-uppercase"],[1,"tab-content"],["id","visaoGeral","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row","no-gutters"],[1,"col-12","col-xl-9","pr-2","mb-5"],["scrollElement",""],["id","painelBotoes",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"descricao"],["routerLink","/cores",1,"text-destaque"],[1,"conteudo"],[1,"btn","btn-main"],[1,"btn","btn-accent"],[1,"btn","btn-cancel"],[1,"btn","btn-outline-aux"],[1,"btn","btn-danger","btn-sm"],[1,"btn","btn-success","btn-lg"],[1,"btn","btn-warning"],[1,"btn","btn-info"],[1,"btn","btn-link"],[1,"mt-3"],[3,"highlight","languages"],["id","painelBotoesTamanho",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"btn","btn-accent","btn-sm"],[1,"fa","fa-plus","mr-2"],[1,"btn","btn-outline-accent"],[1,"fa","fa-edit","mr-2"],[1,"btn","btn-main","btn-lg"],[1,"fa","fa-lg","fa-save","mr-3"],["id","navSection",1,"d-none","col-3","d-xl-flex","pl-4"],[3,"items","currentSection"],["id","exemplos","role","tabpanel",1,"tab-pane","fade"],[3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode","tsTabId","tsCode"],[1,"table-responsive"],[1,"table","table-caixa","table-borderless"],[4,"ngFor","ngForOf"],["disabled",""]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1," Bot\xf5es\n"),t.qZA(),t.TgZ(2,"ul",1)(3,"li",2)(4,"a",3),t._uU(5," Vis\xe3o Geral "),t.qZA()(),t.TgZ(6,"li",2)(7,"a",4),t._uU(8," Exemplos "),t.qZA()()(),t._UZ(9,"br"),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"section",8,9)(15,"app-documentacao-template",10)(16,"div",11),t._uU(17," Seguir o padr\xe3o do Bootstrap com as classes tem\xe1ticas definidas no menu "),t.TgZ(18,"a",12),t._uU(19,"Cores"),t.qZA(),t._uU(20,"."),t._UZ(21,"br"),t._uU(22," Todas as variantes (outline, block, lg, sm) est\xe3o dispon\xedveis. "),t.qZA(),t.TgZ(23,"div",13)(24,"button",14),t._uU(25,"Principal"),t.qZA(),t._uU(26,"\xa0 "),t.TgZ(27,"button",15),t._uU(28,"Destaque"),t.qZA(),t._uU(29,"\xa0 "),t.TgZ(30,"button",16),t._uU(31,"Cancel"),t.qZA(),t._uU(32,"\xa0 "),t.TgZ(33,"button",17),t._uU(34,"Auxiliar"),t.qZA(),t._uU(35,"\xa0 "),t.TgZ(36,"button",18),t._uU(37,"Perigo"),t.qZA(),t._uU(38,"\xa0 "),t.TgZ(39,"button",19),t._uU(40,"Sucesso"),t.qZA(),t._uU(41,"\xa0 "),t.TgZ(42,"button",20),t._uU(43,"Alerta"),t.qZA(),t._uU(44,"\xa0 "),t.TgZ(45,"button",21),t._uU(46,"Informativo"),t.qZA(),t._uU(47,"\xa0 "),t.TgZ(48,"button",22),t._uU(49,"Link"),t.qZA(),t.TgZ(50,"pre",23),t._UZ(51,"code",24),t.qZA()()(),t._UZ(52,"br"),t.TgZ(53,"app-documentacao-template",25)(54,"div",11),t._uU(55," Utilizar \xedcones ao lado esquerdo do texto, conforme segue:"),t._UZ(56,"br"),t.TgZ(57,"b"),t._uU(58,"- Bot\xf5es pequenos:"),t.qZA(),t._uU(59,' \xedcones comuns (classe "fa/fas/far") com espa\xe7amento \xe0 direita padr\xe3o de 0.5rem (classe "mr-2").'),t._UZ(60,"br"),t.TgZ(61,"strong"),t._uU(62,"- Bot\xf5es de tamanho normal:"),t.qZA(),t._uU(63,' \xedcones comuns (classe "fa/fas/far") com espa\xe7amento \xe0 direita padr\xe3o de 0.5rem (classe "mr-2").'),t._UZ(64,"br"),t.TgZ(65,"b"),t._uU(66,"- Bot\xf5es grandes:"),t.qZA(),t._uU(67,' \xedcones grandes (classe "fa/fas/far" acompanhada da "fa-lg") com espa\xe7amento \xe0 direita padr\xe3o de 1rem (classe "mr-3").'),t._UZ(68,"br"),t.qZA(),t.TgZ(69,"div",13)(70,"button",26),t._UZ(71,"i",27),t._uU(72,"Incluir "),t.qZA(),t._uU(73," \xa0 "),t.TgZ(74,"button",28),t._UZ(75,"i",29),t._uU(76,"Editar "),t.qZA(),t._uU(77," \xa0 "),t.TgZ(78,"button",30),t._UZ(79,"i",31),t._uU(80,"Salvar "),t.qZA(),t.TgZ(81,"pre",23),t._UZ(82,"code",24),t.qZA()()()(),t.TgZ(83,"nav",32),t._UZ(84,"app-code-fixed-nav",33),t.qZA()()(),t.TgZ(85,"div",34)(86,"app-documentacao-template",35)(87,"div",13)(88,"div",36)(89,"table",37)(90,"tbody"),t.YNc(91,k,17,15,"ng-container",38),t.qZA()()()()()()()),2&e&&(t.xp6(15),t.Q6J("showCodeButton",!1)("cardTitle","Padr\xe3o")("codeViewId","viewBotoes")("htmlTabId","htmlCodeBotoes")("htmlCode",o.htmlCodeBotoes),t.xp6(36),t.Q6J("highlight",o.botoesIntroducao)("languages",t.DdM(24,U)),t.xp6(2),t.Q6J("showCodeButton",!1)("cardTitle","\xcdcones")("codeViewId","viewBotoesTamanho")("htmlTabId","htmlCodeBotoesTamanho")("htmlCode",o.htmlCodeBotoesTamanho),t.xp6(29),t.Q6J("highlight",o.botoesIcones)("languages",t.DdM(25,U)),t.xp6(2),t.Q6J("items",o.navItems)("currentSection",o.currentSection),t.xp6(2),t.Q6J("showCodeButton",!1)("cardTitle","Tem\xe1ticos")("codeViewId","viewBotoesTodosTematicos")("htmlTabId","htmlCodeTodosTematicos")("htmlCode",o.htmlCodeTodosTematicos)("tsTabId","tsCodeTodosTematicos")("tsCode",o.tsCodeTodosTematicos),t.xp6(5),t.Q6J("ngForOf",o.temas))},dependencies:[i.sg,d.rH,x.a,T.u,h.y$],styles:[".btn-exemplo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}"]});var q=a(4081),y=a(1518);function B(n,e){if(1&n&&(t.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"h5",7),t._UZ(4,"i"),t._uU(5),t.qZA()()(),t._UZ(6,"br"),t.qZA()),2&n){const o=e.$implicit;t.xp6(1),t.s9C("routerLink",o.url),t.xp6(3),t.Gre("",o.iconClass," fa-lg mr-1"),t.xp6(1),t.hij(" ",o.name," ")}}function E(n,e){if(1&n&&(t.TgZ(0,"div",2),t.YNc(1,B,7,5,"div",3),t.qZA()),2&n){const o=e.$implicit;t.xp6(1),t.Q6J("ngForOf",o)}}class p{constructor(e){this.menuService=e,this.rows=[],this.resources=[]}ngOnInit(){this.menuService.menuItems$.subscribe(e=>{e.find(s=>"/componentes-basicos"===s.url).submenu.forEach(s=>{this.resources.push(s)}),this.resources=[].concat(this.resources),this.rows=this.groupColumns(this.resources)})}groupColumns(e){const o=[];for(let s=0;s<e.length;s+=3)o.push(e.slice(s,s+3));return o}}p.\u0275fac=function(e){return new(e||p)(t.Y36(y.D))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-componentes-basicos"]],decls:3,vars:1,consts:[[1,"titulo"],["class","row d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"row","d-flex","justify-content-center"],["class","col-10 col-md-6 col-xl-4",4,"ngFor","ngForOf"],[1,"col-10","col-md-6","col-xl-4"],["role","button","optionalClasses","button-card-min-height","routerLinkActive","active",1,"card","w-75","card-hover","button-card",3,"routerLink"],[1,"card-body"],[1,"header-subtitulo-caixa","m-0","mr-3","text-center"]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1," Componentes b\xe1sicos "),t.qZA(),t.YNc(2,E,2,1,"div",1)),2&e&&(t.xp6(2),t.Q6J("ngForOf",o.rows))},dependencies:[i.sg,d.rH,d.Od]});var l=a(433),f=a(1835);function w(n,e){if(1&n&&t._UZ(0,"div",5),2&n){const o=t.oxw();t.Q6J("ngClass",o.type)}}const O=function(n){return{checked:n}};class b{constructor(e,o){this.changeDetector=e,this.ngControl=o,this.type="checkbox",this.checked=new t.vpe,this.model=void 0,this.onChange=()=>{},this.onTouch=()=>{},o&&(o.valueAccessor=this)}ngOnInit(){!this.ngControl||this.ngControl.control.valueChanges.subscribe(e=>{this.writeValue(e)})}isChecked(){return this.model===this.value}toggleValue(){!this.type||("checkbox"===this.type&&(this.model=this.isChecked()?null:this.value),"radio"===this.type&&(this.model=this.value),this.onChange(this.model),this.emitChecked())}emitChecked(){this.checked.emit({target:this})}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouch=e}writeValue(e){this.model=e,this.changeDetector.detectChanges()}}b.\u0275fac=function(e){return new(e||b)(t.Y36(t.sBO),t.Y36(l.a5,10))},b.\u0275cmp=t.Xpm({type:b,selectors:[["cx-button-control"]],inputs:{value:"value",styles:"styles",type:"type"},outputs:{checked:"checked"},ngContentSelectors:["*"],decls:6,vars:5,consts:[[1,"button-control-wrapper",3,"ngStyle","ngClass","click"],[1,"flex-wrapper"],[1,"checkbox-wrapper"],["class","checkmark",3,"ngClass",4,"ngIf"],[1,"content-wrapper"],[1,"checkmark",3,"ngClass"]],template:function(e,o){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return o.toggleValue()}),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,w,1,1,"div",3),t.qZA(),t.TgZ(4,"div",4),t.Hsn(5),t.qZA()()()),2&e&&(t.Q6J("ngStyle",o.styles)("ngClass",t.VKq(3,O,!o.type||o.model===o.value)),t.xp6(3),t.Q6J("ngIf",o.type))},dependencies:[i.mk,i.O5,i.PC],styles:['.button-control-wrapper[_ngcontent-%COMP%]{display:inline-block;padding:.6rem 1rem;background-color:var(--cxAux);color:var(--cxBase);border-style:solid;border-width:1px;border-radius:var(--cxBorderRadius);border-color:var(--cxAux);box-sizing:content-box;vertical-align:middle}.button-control-wrapper.checked[_ngcontent-%COMP%]{border-color:var(--cxAccent);background-color:var(--cxAccent)}.button-control-wrapper[_ngcontent-%COMP%]:hover{cursor:pointer}.button-control-wrapper[_ngcontent-%COMP%] > .flex-wrapper[_ngcontent-%COMP%]{display:flex}.button-control-wrapper[_ngcontent-%COMP%] > .flex-wrapper[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%]{position:relative;height:100%;display:flex;align-items:center;width:2rem}.button-control-wrapper[_ngcontent-%COMP%] > .flex-wrapper[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;height:16px;width:16px;background-color:var(--cxBase);border:1px solid var(--cxCancel)}.button-control-wrapper[_ngcontent-%COMP%] > .flex-wrapper[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark.radio[_ngcontent-%COMP%]{border-radius:var(--cxBorderRadiusRound);display:flex;align-items:center;justify-content:center}.button-control-wrapper[_ngcontent-%COMP%] > .flex-wrapper[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark[_ngcontent-%COMP%]:after{position:absolute;content:"";opacity:0;transition:opacity .2s}.button-control-wrapper[_ngcontent-%COMP%] > .flex-wrapper[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark.checkbox[_ngcontent-%COMP%]:after{width:5px;height:10px;border-style:solid;border-color:var(--cxContrast);border-width:0 2px 2px 0;transform:rotate(45deg)}.button-control-wrapper[_ngcontent-%COMP%] > .flex-wrapper[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark.radio[_ngcontent-%COMP%]:after{width:8px;height:8px;border-style:solid;border-width:4px;border-color:var(--cxContrast);border-radius:var(--cxBorderRadiusRound);background-color:var(--cxContrast)}.button-control-wrapper.checked[_ngcontent-%COMP%] > .flex-wrapper[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark[_ngcontent-%COMP%]:after{opacity:1}'],changeDetection:0});const M=["scrollElement"];function P(n,e){1&n&&(t.TgZ(0,"span"),t._uU(1,"E-mail inv\xe1lido"),t.qZA())}function R(n,e){1&n&&(t.TgZ(0,"span"),t._uU(1,"Campo obrigat\xf3rio"),t.qZA())}function V(n,e){1&n&&(t.TgZ(0,"span"),t._uU(1,"Idade inv\xe1lida - deve ser entre 18 e 70"),t.qZA())}const c=function(){return["html"]};class g extends C.P{constructor(e,o){super(e),this.toastr=e,this.fb=o,this.spiedTags=["APP-DOCUMENTACAO-TEMPLATE"],this.sectionOffset=0,this.currentSection="painelInputs",this.navItems=[{id:"painelInputs",name:"Inputs e Text-area"},{id:"painelSelect",name:"Select"},{id:"painelCheckbox",name:"Checkbox"},{id:"painelRadio",name:"Radio"},{id:"painelRange",name:"Range"},{id:"painelValidacao",name:"Valida\xe7\xe3o"}],this.formValidation=this.fb.group({email:[null,[l.kI.email]],linkedin:[null],perfil:[null,[l.kI.required]],idade:[50,[l.kI.min(18),l.kI.max(70)]]}),this.inputExemplo='<div class="form-group">\n  <label>Nome</label>\n  <input class="form-control">\n</div>\n\n<label>Idade</label>\n<input class="form-control mb-3" type="number">\n\n<label>Observa\xe7\xf5es</label>\n<textarea class="form-control"></textarea>'.trim(),this.selectExemplo='<label>Sexo</label>\n<ng-select class="mb-3">\n  <ng-option>Masculino</ng-option>\n  <ng-option>Feminino</ng-option>\n</ng-select>\n\n<label>Naturalidade</label>\n<select class="form-control mb-3">\n  <option>Brasileiro</option>\n  <option>Estrangeiro</option>\n</select>'.trim(),this.checkboxExemplo='<div class="custom-control custom-checkbox mb-3">\n  <input type="checkbox" class="custom-control-input" id="customCheck1">\n  <label class="custom-control-label" for="customCheck1">Marque esse checkbox</label>\n</div>\n\n<div class="custom-control custom-checkbox">\n  <input type="checkbox" class="custom-control-input" id="customCheck2" checked>\n  <label class="custom-control-label" for="customCheck2">Desmarque esse checkbox</label>\n</div>'.trim(),this.radioExemplo='<div class="custom-control custom-radio mb-3">\n  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">\n  <label class="custom-control-label" for="customRadio1">Ou esse fica marcado</label>\n</div>\n<div class="custom-control custom-radio">\n  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">\n  <label class="custom-control-label" for="customRadio2">Ou esse aqui</label>\n</div>'.trim(),this.rangeExemplo='<label for="customRange1">Exemplo</label>\n<input type="range" class="custom-range" id="customRange1">'.trim(),this.htmlCodeValidacao='<form [formGroup]="formValidation">\n  <div class="form-group">\n    <label>E-mail</label>\n    <input class="form-control" type="text" formControlName="email">\n    <p class="feedback-msg">\n      <span *ngIf="formValidation.get(\'email\').invalid">E-mail inv\xe1lido</span>\n    </p>\n  </div>\n\n  <div class="form-group">\n    <label>LinkedIn</label>\n    <input class="form-control" type="text" formControlName="linkedin">\n    <p class="feedback-msg">\n      <span>Campo opcional</span>\n    </p>\n  </div>\n\n  <div class="form-group">\n    <label>Perfil</label>\n    <ng-select formControlName="perfil">\n      <ng-option value="">Selecione...</ng-option>\n      <ng-option value="Visitante">Visitante</ng-option>\n      <ng-option value="Desenvolvedor">Desenvolvedor</ng-option>\n      <ng-option value="Gestor">Gestor</ng-option>\n    </ng-select>\n    <p class="feedback-msg">\n      <span *ngIf="formValidation.get(\'perfil\').invalid">Campo obrigat\xf3rio</span>\n    </p>\n  </div>\n\n  <div class="form-group">\n    <label>Idade</label>\n    <input class="custom-range" type="range" formControlName="idade" min="0" max="100">\n    <p>{{ formValidation.get(\'idade\').value }}</p>\n    <p class="feedback-msg">\n      <span *ngIf="formValidation.get(\'idade\').invalid">Idade inv\xe1lida - deve ser entre 18 e 70</span>\n    </p>\n  </div>\n\n  <button class="btn btn-cancel" (click)="formValidation.reset()">Resetar</button>\n</form>'.trim(),this.tsCodeValidacao="import { Component } from '@angular/core';\nimport { FormBuilder, Validators } from \"@angular/forms\";\n\n@Component({\n    selector: 'app-forms',\n    templateUrl: './forms.component.html',\n    styleUrls: ['./forms.component.scss']\n})\nexport class FormsComponent {\n\n  constructor() {}\n\n  formValidation = this.fb.group({\n    email: [null, [Validators.email]],\n    linkedin: [null],\n    perfil: [null, [Validators.required]],\n    idade: [50, [Validators.min(18), Validators.max(70)]]\n  });\n\n}".trimRight(),this.cssCodeValidacao=".feedback-msg {\n  height: 1.5rem;\n  color: var(--aux);\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n}".trimRight(),this.buttonControlExample='<cx-button-control type="checkbox" value="valor_do_checkbox">\n  Checkbox\n</cx-button-control>\n\n<cx-button-control type="radio" value="valor_do_radio" class="ml-3">\n  Radio\n</cx-button-control>'}ngOnInit(){}}g.\u0275fac=function(e){return new(e||g)(t.Y36(_._W),t.Y36(l.QS))},g.\u0275cmp=t.Xpm({type:g,selectors:[["ng-component"]],viewQuery:function(e,o){if(1&e&&t.Gf(M,5),2&e){let s;t.iGM(s=t.CRH())&&(o.scrollElement=s.first)}},hostBindings:function(e,o){1&e&&t.NdJ("scroll",function(Z){return o.onScroll(Z)},!1,t.Jf7)},features:[t.qOj],decls:205,vars:48,consts:[[1,"titulo"],[1,"mb-5"],["target","_blank","href","https://getbootstrap.com/docs/4.6/components/forms/",1,"text-destaque"],["role","tablist",1,"nav","nav-pills","tab-caixa"],[1,"nav-item"],["data-toggle","tab","href","#visaoGeral","role","tab",1,"nav-link","text-uppercase","active"],["data-toggle","tab","href","#exemplos","role","tab",1,"nav-link","text-uppercase"],[1,"tab-content"],["id","visaoGeral","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row","no-gutters"],[1,"col-12","col-xl-9","pr-2","mb-5"],["scrollElement",""],["id","painelInputs",3,"showCodeButton","cardTitle"],[1,"descricao"],[1,"conteudo"],[1,"form-group"],["placeholder","Nome",1,"form-control"],["type","number","placeholder","Idade",1,"form-control","mb-3"],["placeholder","Observa\xe7\xf5es",1,"form-control"],[1,"mt-3"],[3,"highlight","languages"],["id","painelSelect",3,"showCodeButton","cardTitle"],["href","https://www.npmjs.com/package/@ng-select/ng-select","target","_blank",1,"text-destaque"],[1,"mb-3"],[1,"form-control","mb-3"],["id","painelCheckbox",3,"showCodeButton","cardTitle"],[1,"custom-control","custom-checkbox","mb-3"],["type","checkbox","id","customCheck1",1,"custom-control-input"],["for","customCheck1",1,"custom-control-label"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customCheck2","checked","",1,"custom-control-input"],["for","customCheck2",1,"custom-control-label"],["id","painelRadio",3,"showCodeButton","cardTitle"],[1,"custom-control","custom-radio","mb-3"],["type","radio","id","customRadio1","name","customRadio",1,"custom-control-input"],["for","customRadio1",1,"custom-control-label"],[1,"custom-control","custom-radio"],["type","radio","id","customRadio2","name","customRadio",1,"custom-control-input"],["for","customRadio2",1,"custom-control-label"],["id","painelButtonControl",3,"showCodeButton","cardTitle"],["type","checkbox","value","valor_do_checkbox"],["type","radio","value","valor_do_radio",1,"ml-3"],["id","painelRange",3,"showCodeButton","cardTitle"],["for","customRange1"],["type","range","id","customRange2",1,"custom-range"],["id","painelValidacao",3,"cardTitle","codeViewId","htmlTabId","htmlCode","tsTabId","tsCode","cssTabId","cssCode"],[3,"formGroup"],["type","text","formControlName","email","placeholder","email",1,"form-control"],[1,"feedback-msg"],[4,"ngIf"],["type","text","formControlName","linkedin","placeholder","linkedin",1,"form-control"],["formControlName","perfil"],["value",""],["value","Visitante"],["value","Desenvolvedor"],["value","Gestor"],["type","range","formControlName","idade","min","0","max","100","placeholder","Idade",1,"custom-range"],[1,"btn","btn-cancel",3,"click"],["id","navSection",1,"d-none","col-3","d-xl-flex","pl-4"],[3,"items","currentSection"],["id","exemplos","role","tabpanel",1,"tab-pane","fade"],["id","painelDisabled",3,"showCodeButton","cardTitle"],[1,"row"],[1,"col","mb-3"],["type","text","placeholder","Input","disabled","",1,"form-control"],[3,"readonly"],["placeholder","Text Area","disabled","",1,"form-control"],["type","range","id","customRange1","disabled","",1,"custom-range"],["type","checkbox","id","customCheck3","disabled","",1,"custom-control-input"],["for","customCheck3",1,"custom-control-label"],["type","radio","id","customRadio3","name","customRadio","disabled","",1,"custom-control-input"],["for","customRadio3",1,"custom-control-label"],["type","radio","id","customRadio4","name","customRadio","disabled","",1,"custom-control-input"],["for","customRadio4",1,"custom-control-label"]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1," Forms\n"),t.qZA(),t.TgZ(2,"h5",1),t._uU(3," Os estilos dos campos de formul\xe1rio seguem o padr\xe3o definido pelo "),t.TgZ(4,"a",2),t._uU(5,"Bootstrap."),t.qZA(),t._UZ(6,"br")(7,"br"),t._uU(8," As variantes de tamanho, status e layout descritas na documenta\xe7\xe3o do link acima devem ser seguidos sem altera\xe7\xe3o.\n"),t.qZA(),t.TgZ(9,"ul",3)(10,"li",4)(11,"a",5),t._uU(12," Vis\xe3o Geral "),t.qZA()(),t.TgZ(13,"li",4)(14,"a",6),t._uU(15," Exemplos "),t.qZA()()(),t._UZ(16,"br"),t.TgZ(17,"div",7)(18,"div",8)(19,"div",9)(20,"section",10,11)(22,"app-documentacao-template",12)(23,"div",13),t._uU(24,' Para campos do tipo "input" e "text-area" utilizar a classe padr\xe3o "form-control" do Bootstrap.'),t._UZ(25,"br")(26,"br"),t._uU(27," O espa\xe7amento entre campos pode ser implementado de duas maneiras:"),t._UZ(28,"br"),t._uU(29,' - Envolvendo o label e o campo num container com a classe "form-group";'),t._UZ(30,"br"),t._uU(31,' - Utilizando a classe auxiliar do Bootstrap "mb-3" (espa\xe7amento inferior de 1rem). '),t.qZA(),t.TgZ(32,"div",14)(33,"div",15)(34,"label"),t._uU(35,"Nome"),t.qZA(),t._UZ(36,"input",16),t.qZA(),t.TgZ(37,"label"),t._uU(38,"Idade"),t.qZA(),t._UZ(39,"input",17),t.TgZ(40,"label"),t._uU(41,"Observa\xe7\xf5es"),t.qZA(),t._UZ(42,"textarea",18),t.TgZ(43,"pre",19),t._UZ(44,"code",20),t.qZA()()(),t._UZ(45,"br"),t.TgZ(46,"app-documentacao-template",21)(47,"div",13),t._uU(48,' Para campos do tipo "select" utilizar por padr\xe3o o componente da biblioteca '),t.TgZ(49,"a",22),t._uU(50,"Ng-Select"),t.qZA(),t._uU(51,", que j\xe1 oferece funcionalidades de filtro, autocomplete e multi-sele\xe7\xe3o."),t._UZ(52,"br")(53,"br"),t._uU(54,' Caso n\xe3o seja poss\xedvel inserir o componente, utilizar a classe "form-control" no elemento "select". '),t.qZA(),t.TgZ(55,"div",14)(56,"label"),t._uU(57,"Sexo"),t.qZA(),t.TgZ(58,"ng-select",23)(59,"ng-option"),t._uU(60,"Masculino"),t.qZA(),t.TgZ(61,"ng-option"),t._uU(62,"Feminino"),t.qZA()(),t.TgZ(63,"label"),t._uU(64,"Naturalidade"),t.qZA(),t.TgZ(65,"select",24)(66,"option"),t._uU(67,"Brasileiro"),t.qZA(),t.TgZ(68,"option"),t._uU(69,"Estrangeiro"),t.qZA()(),t.TgZ(70,"pre",19),t._UZ(71,"code",20),t.qZA()()(),t._UZ(72,"br"),t.TgZ(73,"app-documentacao-template",25)(74,"div",13),t._uU(75,' O Checkbox deve seguir o estilo "custom". '),t.qZA(),t.TgZ(76,"div",14)(77,"div",26),t._UZ(78,"input",27),t.TgZ(79,"label",28),t._uU(80,"Marque esse checkbox"),t.qZA()(),t.TgZ(81,"div",29),t._UZ(82,"input",30),t.TgZ(83,"label",31),t._uU(84,"Desmarque esse checkbox"),t.qZA()(),t.TgZ(85,"pre",19),t._UZ(86,"code",20),t.qZA()()(),t._UZ(87,"br"),t.TgZ(88,"app-documentacao-template",32)(89,"div",13),t._uU(90,' O Radio, assim como o checkbox, tamb\xe9m deve seguir o estilo "custom". '),t.qZA(),t.TgZ(91,"div",14)(92,"div",33),t._UZ(93,"input",34),t.TgZ(94,"label",35),t._uU(95,"Ou esse fica marcado"),t.qZA()(),t.TgZ(96,"div",36),t._UZ(97,"input",37),t.TgZ(98,"label",38),t._uU(99,"Ou esse aqui"),t.qZA()(),t.TgZ(100,"pre",19),t._UZ(101,"code",20),t.qZA()()(),t._UZ(102,"br"),t.TgZ(103,"app-documentacao-template",39)(104,"div",13),t._uU(105," O componente 'cx-button-control' se comporta como radio ou checkbox, conforme o valor passado no atributo 'type'. "),t.qZA(),t.TgZ(106,"div",14)(107,"cx-button-control",40),t._uU(108," Checkbox "),t.qZA(),t.TgZ(109,"cx-button-control",41),t._uU(110," Radio "),t.qZA(),t.TgZ(111,"pre",19),t._UZ(112,"code",20),t.qZA()()(),t._UZ(113,"br"),t.TgZ(114,"app-documentacao-template",42)(115,"div",13),t._uU(116,' Para o elemento Range utilizar a classe "custom-range". '),t.qZA(),t.TgZ(117,"div",14)(118,"label",43),t._uU(119,"Exemplo"),t.qZA(),t._UZ(120,"input",44),t.TgZ(121,"pre",19),t._UZ(122,"code",20),t.qZA()()(),t._UZ(123,"br"),t.TgZ(124,"app-documentacao-template",45)(125,"div",13),t._uU(126," As classes do Angular Forms (ng-dirty, ng-valid, ng-invalid) alteram o visual dos campos conforme seu estado de valida\xe7\xe3o. "),t.qZA(),t.TgZ(127,"div",14)(128,"form",46)(129,"div",15)(130,"label"),t._uU(131,"E-mail"),t.qZA(),t._UZ(132,"input",47),t.TgZ(133,"p",48),t.YNc(134,P,2,0,"span",49),t.qZA()(),t.TgZ(135,"div",15)(136,"label"),t._uU(137,"LinkedIn"),t.qZA(),t._UZ(138,"input",50),t.TgZ(139,"p",48)(140,"span"),t._uU(141,"Campo opcional"),t.qZA()()(),t.TgZ(142,"div",15)(143,"label"),t._uU(144,"Perfil"),t.qZA(),t.TgZ(145,"ng-select",51)(146,"ng-option",52),t._uU(147,"Selecione..."),t.qZA(),t.TgZ(148,"ng-option",53),t._uU(149,"Visitante"),t.qZA(),t.TgZ(150,"ng-option",54),t._uU(151,"Desenvolvedor"),t.qZA(),t.TgZ(152,"ng-option",55),t._uU(153,"Gestor"),t.qZA()(),t.TgZ(154,"p",48),t.YNc(155,R,2,0,"span",49),t.qZA()(),t.TgZ(156,"div",15)(157,"label"),t._uU(158,"Idade"),t.qZA(),t._UZ(159,"input",56),t.TgZ(160,"p"),t._uU(161),t.qZA(),t.TgZ(162,"p",48),t.YNc(163,V,2,0,"span",49),t.qZA()(),t.TgZ(164,"button",57),t.NdJ("click",function(){return o.formValidation.reset()}),t._uU(165,"Resetar"),t.qZA()()()()(),t.TgZ(166,"nav",58),t._UZ(167,"app-code-fixed-nav",59),t.qZA()()(),t.TgZ(168,"div",60)(169,"app-documentacao-template",61)(170,"div",14)(171,"div",62)(172,"div",63)(173,"label"),t._uU(174,"Input"),t.qZA(),t._UZ(175,"input",64),t.qZA(),t.TgZ(176,"div",63)(177,"label"),t._uU(178,"Select"),t.qZA(),t.TgZ(179,"ng-select",65),t._uU(180,"Select"),t.qZA()()(),t.TgZ(181,"div",62)(182,"div",63)(183,"label"),t._uU(184,"Text Area"),t.qZA(),t._UZ(185,"textarea",66),t.qZA(),t.TgZ(186,"div",63)(187,"label"),t._uU(188,"Range"),t.qZA(),t._UZ(189,"input",67),t.qZA()(),t.TgZ(190,"div",62)(191,"div",63)(192,"div",29),t._UZ(193,"input",68),t.TgZ(194,"label",69),t._uU(195,"Checkbox"),t.qZA()()(),t.TgZ(196,"div",63)(197,"div",33),t._UZ(198,"input",70),t.TgZ(199,"label",71),t._uU(200,"Radio"),t.qZA()(),t.TgZ(201,"div",36),t._UZ(202,"input",72),t.TgZ(203,"label",73),t._uU(204,"Radio 2"),t.qZA()()()()()()()()),2&e&&(t.xp6(22),t.Q6J("showCodeButton",!1)("cardTitle","Inputs e Text-area"),t.xp6(22),t.Q6J("highlight",o.inputExemplo)("languages",t.DdM(42,c)),t.xp6(2),t.Q6J("showCodeButton",!1)("cardTitle","Select"),t.xp6(25),t.Q6J("highlight",o.selectExemplo)("languages",t.DdM(43,c)),t.xp6(2),t.Q6J("showCodeButton",!1)("cardTitle","Checkbox"),t.xp6(13),t.Q6J("highlight",o.checkboxExemplo)("languages",t.DdM(44,c)),t.xp6(2),t.Q6J("showCodeButton",!1)("cardTitle","Radio"),t.xp6(13),t.Q6J("highlight",o.radioExemplo)("languages",t.DdM(45,c)),t.xp6(2),t.Q6J("showCodeButton",!1)("cardTitle","Button Control"),t.xp6(9),t.Q6J("highlight",o.buttonControlExample)("languages",t.DdM(46,c)),t.xp6(2),t.Q6J("showCodeButton",!1)("cardTitle","Range"),t.xp6(8),t.Q6J("highlight",o.rangeExemplo)("languages",t.DdM(47,c)),t.xp6(2),t.Q6J("cardTitle","Valida\xe7\xe3o")("codeViewId","formsValidacao")("htmlTabId","htmlCodeValidacao")("htmlCode",o.htmlCodeValidacao)("tsTabId","tsCodeValidacao")("tsCode",o.tsCodeValidacao)("cssTabId","cssCodeValidacao")("cssCode",o.cssCodeValidacao),t.xp6(4),t.Q6J("formGroup",o.formValidation),t.xp6(6),t.Q6J("ngIf",o.formValidation.get("email").invalid),t.xp6(21),t.Q6J("ngIf",o.formValidation.get("perfil").invalid),t.xp6(6),t.Oqu(o.formValidation.get("idade").value),t.xp6(2),t.Q6J("ngIf",o.formValidation.get("idade").invalid),t.xp6(4),t.Q6J("items",o.navItems)("currentSection",o.currentSection),t.xp6(2),t.Q6J("showCodeButton",!1)("cardTitle","Desabilitados"),t.xp6(10),t.Q6J("readonly",!0))},dependencies:[i.O5,x.a,T.u,l._Y,l.YN,l.Kr,l.Fj,l.eT,l.JJ,l.JL,f.w9,f.jq,l.sg,l.u,h.y$,b],styles:[".feedback-msg[_ngcontent-%COMP%]{height:1.5rem;color:var(--cxAux);margin-top:.5rem;font-size:.9rem}"]});var F=a(2861);const J=[{path:"",component:p,data:{title:"Componentes b\xe1sicos",breadcrumb:"Componentes b\xe1sicos"}},{path:"botoes",component:m,data:{title:"Bot\xf5es",breadcrumb:"Bot\xf5es",animation:"Bot\xf5es"}},{path:"cards",component:q.s,data:{title:"Cards",breadcrumb:"Cards",animation:"Cards"}},{path:"forms",component:g,data:{title:"Forms",breadcrumb:"Forms",animation:"Forms"}},{path:"mensagens",component:F.J,data:{title:"Mensagens",breadcrumb:"Mensagens",animation:"Mensagens"}}];class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.Bz.forChild(J),d.Bz]});var Q=a(5415),S=a(3188),D=a(4466),N=a(4781);class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[i.ez,r,D.m,l.u5,f.A0,l.UX,Q.T,h._l,S.Xd,N.s]})}}]);