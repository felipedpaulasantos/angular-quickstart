
# TEIA - DESAFIO FRONTEND

Conforme desafio proposto, este é um projeto construído com o framework Angular v15, onde é exibida uma tela que consome a API https://jsonplaceholder.typicode.com/photos/ e apresenta seus dados de forma dinâmica.

Foi utilizado como base um projeto do tipo *quickstart*, construído ao longo do tempo no desenvolvimento de múltiplos projetos na empresa.

Este aplicativo pode ser utilizado e testado em: https://felipedpaulasantos.github.io/angular-quickstart.


## Autores

- [@felipedpaulasantos](https://www.github.com/felipedpaulasantos), C135289


## Stack utilizada

**Front-end:** Angular v15, Bootstrap v4




## Funcionalidades

- Dois modos de exibição das *fotos* (Card e Tabela)
- Tabela *Datatable*: Filtro, ordenação e paginação embutidos
- Cards organizados em linhas de tamanho definido, com filtro e paginação
- Carrinho de compras: possível adicionar e remover *fotos* do carrinho
- Responsividade: utilização em celulares, tablets e desktops; implementação com classes nativas do Bootstrap v4
- Acessibilidade: aumento e diminuição de fonte; temas claro, escuro e alto contraste
- Estilo: paleta de cores da Caixa




## Uso/Exemplos

Como em um aplicativo Angular comum, tudo se inicia no AppModule, onde as dependências são inicializadas e configuradas.

No AppComponent do projeto, temos algumas configurações básicas: a definição do *tema* principal, configuração de animação para a transição entre rotas, e título dinâmico. No HTML, o uso de componentes como *navbar*, *footer* e *side-menu* (não utilizado no projeto), presentes no LayoutModule.

```html
<app-navbar></app-navbar>

<cx-spinner [fullscreen]=true [name]="'global'"></cx-spinner>

<main>
  <app-side-menu></app-side-menu>

  <section id="conteudoPrincipal">
    <div id="painelConteudoPrincipal">
      <app-breadcrumb></app-breadcrumb>
      <div [@routeAnimations]="prepareRoute(outlet)">
        <router-outlet #outlet="outlet"></router-outlet>
      </div>
    </div>
  </section>
</main>

<cx-modal></cx-modal>
```

A estrutura do código se organiza dessa forma:
- Páginas na pasta /pages, com seus próprios módulos e rotas.
- Componentes que compõe o layout básico na pasta /layout.
- Definição de classes e interfaces de objetos em /models.
- Serviços mais abrangentes em /services; os mais específicos podem estar junto de outros componentes.
- Em /shared, todos as diretivas, componentes e recursos em geral que podem ser compartilhados dentre vários módulos.
- O módulo /guia-caixa foi usado para conter componentes mais estruturais, como Modal, Input e Datatable.

A rota padrão leva ao HomeComponent, em /pages, que apenas apresenta a opção "Fotos", mas poderia exibir as diversas funcionalidades de um aplicativo. Isso é feito pelo CardPanelComponent, que se encarrega de organizar os *recursos* recebidos por ele.

```html
<h1 class="titulo">
  Início
</h1>

<app-card-panel [items]="resources" [cardStyle]="cardPanelStyle"></app-card-panel>
```

Ao selecionar a opção, o usuário é levado ao AlbumComponent, onde são então exibidas as fotos.

O fluxo é simples: na inicialização do componente (ngOnInit) a API já é consultada e o retorno é organizado de duas formas distintas para popular os dois tipos de visualização (Card e Tabela), que podem ser escolhidos pelo usuário.

```html
<div class="header d-flex mb-3">
	<div class="d-flex mr-auto">
		<h1 class="titulo">Fotos</h1>
	</div>

	<div class="d-flex align-items-center">
		<h4 class="mb-0 mr-3">Exibição:</h4>

		<button class="btn btn-aux mr-4"
		[ngClass]="{'active bg-main border-main': tipoExibicao == 'TABELA'}"
		(click)="tipoExibicao = 'TABELA'">
			<i class="fa fa-table mr-2"></i>Tabela
		</button>

		<button class="btn btn-aux"
		[ngClass]="{'active bg-main border-main': tipoExibicao == 'CARD'}"
		(click)="tipoExibicao = 'CARD'">
			<i class="fa fa-th mr-2"></i>Card
		</button>
	</div>
</div>
```

Os componentes *Datatable* e *Ngx-Pagination* então auxiliam na organização e exibição dos dados no HTML.

A funcionalidade do carrinho é gerenciada no CarrinhoService, que armazena os items selecionados num *BehaviorSubject*, uma classe do RxJS que permite armazenar e atualizar um dado que, então, é "ouvido" em qualquer lugar da aplicação (por meio do método *subscribe*), tornando possível a atualização automática da tela sempre que este dado for alterado.

```javascript
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  constructor() { }

	private itemsCarrinhoSubject = new BehaviorSubject<AlbumItem[]>([]);
	public itemsCarrinho$ = this.itemsCarrinhoSubject.asObservable();

	public addItemCarrinho(item: AlbumItem): void {
		this.itemsCarrinhoSubject.value.push(item);
	}

	public removeItemCarrinho(item: AlbumItem): void {
		const itemIndex = this.itemsCarrinhoSubject.value.indexOf(item);
		this.itemsCarrinhoSubject.value.splice(itemIndex, 1);
	}

	private setItemsCarrinho(items: AlbumItem[]): void {
		this.itemsCarrinhoSubject.next(items);
	}
}
```


## Instalação

Instale o projeto com o script install

```bash
  npm install
```

E execute-o com start

```bash
  npm start
```
## Deploy

Para fazer o deploy desse projeto no Github Pages, primeiro rode o seguinte script na branch **main**

```bash
  npm run ghpages
```

O pacote será gerado em /docs e precisará subir no próximo push

```bash
  git add .
  git commit -m "GH Pages deploy"
  git push
```

Após o push, o GitHub automaticamente atualizará o endereço https://felipedpaulasantos.github.io/angular-quickstart