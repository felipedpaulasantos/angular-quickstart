"use strict";(self.webpackChunkprototipo_caixa=self.webpackChunkprototipo_caixa||[]).push([[763],{7763:(X,E,l)=>{l.r(E),l.d(E,{AlbumModule:()=>_});var C=l(6895),A=l(2103);function S(a,e,n,o,i,s,c){try{var u=a[s](c),b=u.value}catch(K){return void n(K)}u.done?e(b):Promise.resolve(b).then(o,i)}var x=l(7579);const O={buttons:{copy:'<i class="fas fa-lg fa-copy mr-2"></i>Copiar',copyTitle:"Copiado",copySuccess:{_:"Copiados %d registros",1:"Copiado 1 registro"},pdf:'<i class="fa fa-lg fa-file-pdf mr-2"></i>PDF',print:'<i class="fa fa-lg fa-print mr-2"></i>Imprimir',excel:'<i class="fa fa-lg fa-file-excel mr-2"></i>Exportar para planilha',colvis:'<i class="fa fa-lg fa-columns mr-2"></i>Colunas vis\xedveis',pageLength:'<i class="fa fa-lg fa-bars mr-2"></i>Mostrar <b>%d</b> linhas'},processing:"Processando...",search:'<i class="fa fa-search fa-lg mr-2"></i>',lengthMenu:"Mostrar _MENU_ elementos",info:"Mostrando desde <i>_START_</i> at\xe9 <i>_END_</i> de <b>_TOTAL_</b> elementos",infoEmpty:"Mostrando nenhum elemento.",infoFiltered:"(filtrado _MAX_ elementos total)",infoPostFix:"",loadingRecords:"Carregando registros...",zeroRecords:"N\xe3o foram encontrados registros",emptyTable:"<div class='text-center'>N\xe3o h\xe1 dados dispon\xedveis na tabela</div>",paginate:{first:"Primeiro",previous:"Anterior",next:"Seguinte",last:"\xdaltimo"},aria:{sortAscending:": Ativar para ordenar a tabela em ordem ascendente",sortDescending:": Ativar para ordenar a tabela em ordem descendente"},select:{rows:{_:" - %d linhas selecionadas",0:" - Clique em uma linha para selecion\xe1-la",1:" - 1 linha selecionada"}}};class m{constructor(e){this.button=e}}m.PRINT=new m({extend:"print",className:"btn btn-sm btn-outline-accent"}),m.EXCEL=new m({extend:"excel",className:"btn btn-sm btn-outline-accent"}),m.COPY=new m({extend:"copy",className:"btn btn-sm btn-outline-accent"}),m.COLVIS=new m({extend:"colvis",className:"btn btn-sm btn-outline-accent"});var d=(()=>{return(a=d||(d={})).INPUT="input",a.SELECT="select",a.NONE="none",d;var a})(),h=(()=>{return(a=h||(h={})).TOP="top",a.BOTTOM="bottom",a.NONE="none",h;var a})();const F=[m.PRINT.button,m.EXCEL.button];class r{static getDataTableSettings(e){const n={dom:this.SHOW_TABLE,buttons:[],language:O,responsive:!0};let o="",i="";return e.showFilter&&(o=o+=this.SHOW_FILTER),(e.showButtons||e.buttons&&e.buttons.length>0)&&(o=o+=this.SHOW_BUTTONS),e.showProcessing&&(o=o+=this.SHOW_PROCESSING),e.showInfo&&(i=i+=this.SHOW_INFO),e.showLength&&(i=i+=this.SHOW_LENGTH),e.showPagination&&(e.paging=!0,i=i+=this.SHOW_PAGINATION),e.buttons&&e.buttons.length>0&&(n.buttons=e.buttons),e.menuLength&&e.menuLength.length>0&&(n.lengthMenu=e.menuLength),n.dom=o+this.SHOW_TABLE+i,n.paging=!1!==e.paging||e.paging,n.searching=!1!==e.searching||e.searching,n.configOptions=e,n}}r.BTN_CLASS="btn btn-sm btn-outline-dark-light",r.SHOW_FILTER="f",r.SHOW_LENGTH="l",r.SHOW_BUTTONS="B",r.SHOW_TABLE="t",r.SHOW_INFO="i",r.SHOW_PROCESSING="r",r.SHOW_PAGINATION="p",r.DEFAULT_BUTTONS=m,r.DEFAULT_SETTINGS=r.getDataTableSettings({searching:!0,showFilter:!0,showLength:!1,showButtons:!1,showInfo:!0,showProcessing:!0,showPagination:!0}),r.COMPLETE_SETTINGS=r.getDataTableSettings({buttons:F,searching:!0,showFilter:!0,showLength:!0,showButtons:!0,showInfo:!0,showProcessing:!0,showPagination:!0}),r.COMPLETE_NO_BUTTON_SETTINGS=r.getDataTableSettings({searching:!0,showFilter:!0,showLength:!0,showButtons:!1,showInfo:!0,showProcessing:!0,showPagination:!0}),r.PAGINATION_INFO_SETTINGS=r.getDataTableSettings({searching:!1,showFilter:!1,showLength:!1,showButtons:!1,showInfo:!0,showProcessing:!0,showPagination:!0}),r.SIMPLE_SETTINGS=r.getDataTableSettings({searching:!0,showFilter:!1,showLength:!1,showButtons:!1,showInfo:!1,showProcessing:!1,showPagination:!1,paging:!1});var t=l(1571),N=l(6916),L=l(529);class g{constructor(e){this.http=e,this.ALBUM_API_URL=N.N.ALBUM_API}consultaApiAlbum(){return this.http.get(`${this.ALBUM_API_URL}`,{headers:{"Content-type":"application/json; charset=UTF-8"}})}}g.\u0275fac=function(e){return new(e||g)(t.LFG(L.eN))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"});var y=l(2136),M=l(7185),Z=l(8423),v=l(5415);class p{constructor(){this.TOP_FILTER_CLASS="d-table-row-group",this.FILTER_INPUT_CLASS="form-control",this.FILTER_SELECT_CLASS="form-control",this.settings=r.DEFAULT_SETTINGS,this.columnFilterType=d.NONE,this.columnFilterPosition=h.NONE,this.trigger=new x.x}ngOnInit(){this.setDefaultLanguage(),this.setDefaultClasses(),this.dtElement.dtTrigger||(this.dtElement.dtTrigger=new x.x),this.settings.columnFilterType=this.columnFilterType,this.settings.columnFilterPosition=this.columnFilterPosition,this.dtElement.dtOptions=this.settings}ngAfterViewInit(){this.drawTable(!0)}drawTable(e=!1){this.dtElement.dtTrigger.next(null),this.tableElementRef=this.dtElement.el,this.tableElement=this.tableElementRef.nativeElement,this.theadElement=this.tableElement.querySelector("thead"),this.tfootElement=this.tableElement.querySelector("tfoot"),this.tbodyElement=this.tableElement.querySelector("tbody"),this.bindRowExpandEvent(this.tbodyElement),this.dtElement.dtInstance&&this.dtElement.dtInstance.then(n=>{this.drawColumnFilters(n,this.theadElement,this.tfootElement,this.tbodyElement,e)})}reloadTable(){this.dtElement.dtOptions=this.settings,this.dtElement.dtInstance&&this.dtElement.dtInstance.then(e=>{e.destroy(),this.drawTable()})}updateSettings(e){this.settings=e,this.reloadTable()}updateFilterColumnPosition(e){this.columnFilterPosition=e,this.reloadTable()}updateFilterColumnType(e){this.columnFilterType=e,this.reloadTable()}setDefaultLanguage(){$.extend($.fn.dataTable.defaults,{language:O})}setDefaultClasses(){$.fn.dataTable.ext.classes.sPageButton="btn btn-sm ml-1 shadow-none",$.fn.dataTable.ext.classes.sPageButtonActive="btn-accent",$.fn.dataTable.ext.classes.sLengthSelect="form-control",$.fn.dataTable.ext.classes.sFilterInput="form-control"}drawColumnFilters(e,n,o,i,s){const c=this.settings.columnFilterType;c?o||(o=this.drawFooter(e,n)):e.columns().every(function(){$(this.footer()).remove()}),this.setFooterClass(o),this.drawInputColumnFilter(e,c),this.drawSelectColumnFilter(e,c),s&&(this.reloadTable(),this.trigger.subscribe(()=>{this.reloadTable()}))}drawFooter(e,n){let o="";for(let i=0;i<e.columns()[0].length;i++)o+="<td></td>";return o=`<tfoot><tr>${o}</tr></tfoot>`,$(o).insertAfter(n),this.tfootElement=this.tableElement.querySelector("tfoot"),this.tfootElement}setFooterClass(e){!e||this.columnFilterPosition!==h.TOP&&this.columnFilterPosition?e&&this.columnFilterPosition===h.BOTTOM&&$(e).removeClass(this.TOP_FILTER_CLASS):$(e).addClass(this.TOP_FILTER_CLASS)}drawInputColumnFilter(e,n){const o=this.FILTER_INPUT_CLASS;e.columns().every(function(){const i=this;if(n===d.INPUT||i.header().dataset.filter===d.INPUT){const s=i.header().innerText;$(`<input class='${o}' placeholder='Filtre ${s}'>`).appendTo($(i.footer()).empty()).on("keyup change",function(){i.search()!==this.value&&i.search(this.value).draw()})}})}drawSelectColumnFilter(e,n){const o=this.FILTER_SELECT_CLASS;e.columns().every(function(){const i=this;if(n===d.SELECT||i.header().dataset.filter===d.SELECT){const s=i.header().innerText,c=$(`<select class='${o}'><option value="">Filtre ${s}</option></select>`).appendTo($(i.footer()).empty()).on("change",function(){const u=$.fn.dataTable.util.escapeRegex(String($(this).val()));i.search(u?"^"+u+"$":"",!0,!1).draw()});i.data().unique().sort().each(function(u){c.append('<option value="'+u+'">'+u+"</option>")})}})}bindRowExpandEvent(e){e&&this.dtElement.dtInstance.then(o=>{this.unbindRowExpandEvent(e),$(e).on("click","td.table-expand-button",function(){const i=$(this).closest("tr"),s=o.row(i);s.child.isShown()?(s.child.hide(),i.removeClass("shown"),i.find("i").attr("class","fa fa-plus")):(s.child(function(o,i){return"<div>Id: "+o+"<br />Prato: "+i+"</div>"}(i.data("child-name"),i.data("child-value"))).show(),i.addClass("shown"),i.find("i").attr("class","fa fa-minus"))})})}unbindRowExpandEvent(e){$(e).off("click","td.table-expand-button")}ngOnDestroy(){this.dtElement.dtTrigger.unsubscribe(),this.dtElement&&this.dtElement.dtInstance&&this.dtElement.dtInstance.then(e=>{e.destroy()})}}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["cx-datatable"]],contentQueries:function(e,n,o){if(1&e&&t.Suo(o,v.G,7,v.G),2&e){let i;t.iGM(i=t.CRH())&&(n.dtElement=i.first)}},inputs:{settings:"settings",columnFilterType:"columnFilterType",columnFilterPosition:"columnFilterPosition",trigger:"trigger"},ngContentSelectors:["*"],decls:1,vars:0,template:function(e,n){1&e&&(t.F$t(),t.Hsn(0))},styles:[".dataTables_wrapper{display:flex;flex-wrap:wrap;width:100%;overflow-x:auto}.dataTables_wrapper .table.dataTable{width:100%!important}.dataTables_length{display:flex;margin-bottom:1rem;width:30%;margin-left:auto}.dataTables_length label{width:100%;color:var(--cxContrast);text-align:right}.dataTables_length select{width:10rem!important;display:inline-block!important}.dataTables_filter{display:block;margin-bottom:1rem;width:30rem}.dataTables_filter label{display:flex;align-items:center;margin-left:auto;color:var(--cxContrast)}.dataTables_filter label input{font-family:var(--cxFontFamilyNormal)}.dataTables_info{display:inline-block}.dataTables_paginate{text-align:right;margin-left:auto}.dt-buttons{display:flex;margin-left:auto;margin-bottom:1rem}.dt-buttons .dt-button{margin-left:.5rem}.dt-button-collection{position:absolute;z-index:999;border:solid 1px var(--cxCancel);background-color:var(--cxBase);box-shadow:var(--cxShadow);width:auto;top:0;left:0;padding:1rem}.dataTables_empty{text-align:center}.table.dataTable thead th{border-top:none;border-bottom:solid 1px var(--cxContrast)!important}.table.dataTable tfoot td{padding-left:0}td.table-expand-button{cursor:pointer;color:var(--cxAccent)}\n"],encapsulation:2,changeDetection:0});var w=l(4333);function R(a,e){if(1&a){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",29),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw(3);return t.KtG(s.removerDoCarrinho(i))}),t._UZ(2,"i",30),t.TgZ(3,"span",31),t._uU(4,"Remover do carrinho"),t.qZA()(),t.BQk()}}function B(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw(3);return t.KtG(s.adicionarAoCarrinho(i))}),t._UZ(1,"i",33),t.TgZ(2,"span",31),t._uU(3,"Adicionar ao carrinho"),t.qZA()()}}function D(a,e){if(1&a&&(t.TgZ(0,"div",19)(1,"div",20),t.NdJ("mouseenter",function(o){return o.target.classList.add("exibir-botoes")})("mouseleave",function(o){return o.target.classList.remove("exibir-botoes")}),t.TgZ(2,"div",21),t._uU(3),t.qZA(),t.TgZ(4,"div",22)(5,"div",23)(6,"div",24),t._UZ(7,"img",25),t.qZA()()(),t.TgZ(8,"div",26),t.YNc(9,R,5,0,"ng-container",27),t.YNc(10,B,4,0,"ng-template",null,28,t.W1O),t.qZA()()()),2&a){const n=e.$implicit,o=t.MAs(11),i=t.oxw(3);t.xp6(3),t.Oqu(n.title),t.xp6(4),t.Q6J("src",n.thumbnailUrl,t.LSH),t.xp6(2),t.Q6J("ngIf",i.estaNoCarrinho(n))("ngIfElse",o)}}function H(a,e){if(1&a&&(t.TgZ(0,"div",17),t.YNc(1,D,12,4,"div",18),t.qZA()),2&a){const n=e.$implicit;t.xp6(1),t.Q6J("ngForOf",n)}}const G=function(a){return{itemsPerPage:2,currentPage:a}};function J(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"div",11)(1,"div",12),t._UZ(2,"i",13),t.TgZ(3,"input",14),t.NdJ("input",function(i){t.CHM(n);const s=t.oxw();return s.filter=i.target.value,t.KtG(s.organizaItems(s.albumItems))}),t.qZA()(),t.YNc(4,H,2,1,"div",15),t.ALo(5,"paginate"),t.TgZ(6,"pagination-controls",16),t.NdJ("pageChange",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.page=i)}),t.qZA()()}if(2&a){const n=t.oxw();t.xp6(4),t.Q6J("ngForOf",t.xi3(5,1,n.items,t.VKq(4,G,n.page)))}}function k(a,e){if(1&a){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",29),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.removerDoCarrinho(i))}),t._UZ(2,"i",30),t.TgZ(3,"span",38),t._uU(4,"Remover do carrinho"),t.qZA()(),t.BQk()}}function q(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.adicionarAoCarrinho(i))}),t._UZ(1,"i",33),t.TgZ(2,"span",38),t._uU(3,"Adicionar ao carrinho"),t.qZA()()}}function z(a,e){if(1&a&&(t.TgZ(0,"tr")(1,"td")(2,"div",24),t._UZ(3,"img",25),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t.YNc(7,k,5,0,"ng-container",27),t.YNc(8,q,4,0,"ng-template",null,28,t.W1O),t.qZA()()),2&a){const n=e.$implicit,o=t.MAs(9),i=t.oxw(2);t.xp6(3),t.Q6J("src",n.thumbnailUrl,t.LSH),t.xp6(2),t.Oqu(n.title),t.xp6(2),t.Q6J("ngIf",i.estaNoCarrinho(n))("ngIfElse",o)}}function W(a,e){if(1&a&&(t.TgZ(0,"div",34)(1,"div",22)(2,"cx-datatable",35)(3,"table",36)(4,"thead")(5,"tr")(6,"th"),t._uU(7,"Foto"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"T\xedtulo"),t.qZA(),t._UZ(10,"th"),t.qZA()(),t.TgZ(11,"tbody"),t.YNc(12,z,10,4,"tr",37),t.qZA()()()()()),2&a){const n=t.oxw();t.xp6(2),t.Q6J("trigger",n.dtTrigger)("settings",n.dtSettings),t.xp6(10),t.Q6J("ngForOf",n.albumItems)}}const P=function(a){return{active:a}};class T{constructor(e,n,o,i,s){this.albumService=e,this.carrinhoService=n,this.mensagemService=o,this.loading=i,this.cdr=s,this.items=[],this.itemsPerColumn=3,this.albumItems=[],this.rows=[],this.tableTrigger=new x.x,this.dtTrigger=new x.x,this.dtSettings=r.DEFAULT_SETTINGS,this.tipoExibicao="CARD",this.page=1,this.filter="",this.itemsCarrinho=[],this.carrinhoService.itensCarrinho$.subscribe(c=>this.itemsCarrinho=c)}onResize(){const e=window.innerWidth;this.ultimaLarguraTela=e,this.organizaItems(this.albumItems,e<570?1:e<1040?2:e<1322?3:e<1604?4:5)}ngOnInit(){this.consultaApi()}consultaApi(){this.loading.show("global"),this.albumService.consultaApiAlbum().subscribe({next:e=>this.organizaItems(e),error:e=>{console.error(e.message),this.loading.hide("global")},complete:()=>{}})}organizaItems(e,n=5){var o=this;return function I(a){return function(){var e=this,n=arguments;return new Promise(function(o,i){var s=a.apply(e,n);function c(b){S(s,o,i,c,u,"next",b)}function u(b){S(s,o,i,c,u,"throw",b)}c(void 0)})}}(function*(){o.albumItems=e,o.ultimaLarguraTela||o.onResize(),o.items=o.groupColumns(e,n),o.dtTrigger.next(!0),o.cdr.markForCheck(),o.loading.hide("global")})()}groupColumns(e,n){const o=e.filter(s=>!this.filter||-1!==s.title.indexOf(this.filter)),i=[];for(let s=0;s<o.length;s+=n)i.push(o.slice(s,s+n));return i}adicionarAoCarrinho(e){this.carrinhoService.addItemCarrinho(e),this.mensagemService.info("Item adicionado ao carrinho!")}removerDoCarrinho(e){this.carrinhoService.removeItemCarrinho(e),this.mensagemService.info("Item removido do carrinho!")}estaNoCarrinho(e){return-1!=this.itemsCarrinho.indexOf(e)}}T.\u0275fac=function(e){return new(e||T)(t.Y36(g),t.Y36(y.e),t.Y36(M._W),t.Y36(Z.t2),t.Y36(t.sBO))},T.\u0275cmp=t.Xpm({type:T,selectors:[["app-album"]],hostBindings:function(e,n){1&e&&t.NdJ("resize",function(i){return n.onResize(i)},!1,t.Jf7)},inputs:{items:"items",itemsPerColumn:"itemsPerColumn"},decls:15,vars:8,consts:[[1,"header","d-flex","mb-3"],[1,"d-flex","mr-auto"],[1,"titulo"],[1,"d-flex","align-items-center"],[1,"mb-0","mr-3"],[1,"btn","btn-aux","mr-4",3,"ngClass","click"],[1,"fa","fa-table","mr-2"],[1,"btn","btn-aux",3,"ngClass","click"],[1,"fa","fa-th","mr-2"],["class","album-items-rows",4,"ngIf"],["class","card",4,"ngIf"],[1,"album-items-rows"],[1,"input-container","d-flex","align-items-center","mb-3"],[1,"fa","fa-search","mr-3"],["placeholder","Pesquisar",1,"form-control","d-inline-block",3,"input"],["class","row mb-3",4,"ngFor","ngForOf"],["previousLabel","Anterior","nextLabel","Pr\xf3ximo","responsive","true",3,"pageChange"],[1,"row","mb-3"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card","card-hover",3,"mouseenter","mouseleave"],[1,"card-header"],[1,"card-body"],[1,"d-flex"],[1,"img-container"],[1,"img-fluid",3,"src"],[1,"card-footer","bg-none"],[4,"ngIf","ngIfElse"],["naoEstaNoCarrinho",""],["title","Remover do carrinho",1,"btn","btn-sm","btn-danger","btn-remove-carrinho",3,"click"],[1,"fa","fa-trash"],[1,"ml-2"],["title","Adicionar ao carrinho",1,"btn","btn-sm","btn-success","btn-add-carrinho",3,"click"],[1,"fa","fa-plus"],[1,"card"],[3,"trigger","settings"],["datatable","",1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"texto-botao","ml-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3,"Fotos"),t.qZA()(),t.TgZ(4,"div",3)(5,"h4",4),t._uU(6,"Exibi\xe7\xe3o:"),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.tipoExibicao="TABELA"}),t._UZ(8,"i",6),t._uU(9,"Tabela "),t.qZA(),t.TgZ(10,"button",7),t.NdJ("click",function(){return n.tipoExibicao="CARD"}),t._UZ(11,"i",8),t._uU(12,"Card "),t.qZA()()(),t.YNc(13,J,7,6,"div",9),t.YNc(14,W,13,3,"div",10)),2&e&&(t.xp6(7),t.Q6J("ngClass",t.VKq(4,P,"TABELA"==n.tipoExibicao)),t.xp6(3),t.Q6J("ngClass",t.VKq(6,P,"CARD"==n.tipoExibicao)),t.xp6(3),t.Q6J("ngIf","CARD"==n.tipoExibicao),t.xp6(1),t.Q6J("ngIf","TABELA"==n.tipoExibicao&&(null==n.albumItems?null:n.albumItems.length)>0))},dependencies:[C.mk,C.sg,C.O5,v.G,p,w.LS,w._s],styles:[".input-container[_ngcontent-%COMP%]{width:50%;max-width:50%}@media (max-width: 1080px){.input-container[_ngcontent-%COMP%]{width:50%;max-width:50%}}@media (max-width: 992px){.input-container[_ngcontent-%COMP%]{width:75%;max-width:75%}.texto-botao[_ngcontent-%COMP%]{display:none!important}}@media (max-width: 768px){.input-container[_ngcontent-%COMP%]{width:100%;max-width:100%}.texto-botao[_ngcontent-%COMP%]{display:none!important}}.album-items-rows[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{min-width:18rem;max-width:18rem;width:18rem;max-height:18rem;height:18rem;position:relative}.album-items-rows[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{height:4rem}.album-items-rows[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{display:flex;margin:auto}.album-items-rows[_ngcontent-%COMP%]   .card.exibir-botoes[_ngcontent-%COMP%]{height:1px;background:transparent;box-shadow:none}.album-items-rows[_ngcontent-%COMP%]   .card.exibir-botoes[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{display:block;position:relative}.album-items-rows[_ngcontent-%COMP%]   .card.exibir-botoes[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%], .album-items-rows[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{display:none}.album-items-rows[_ngcontent-%COMP%]   .card.exibir-botoes[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{display:block}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{min-height:6.5rem;height:6.5rem}.table[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{display:flex;margin:auto;max-width:5rem;max-height:5rem}"],changeDetection:0});const Q=[{path:"",component:T}];class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({imports:[A.Bz.forChild(Q),A.Bz]});var Y=l(2109);class _{}_.\u0275fac=function(e){return new(e||_)},_.\u0275mod=t.oAB({type:_}),_.\u0275inj=t.cJS({imports:[C.ez,f,Y.J,w.JX]})}}]);