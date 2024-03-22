
# TEIA - DESAFIO FRONTEND

Conforme desafio proposto, este é um projeto construído com o framework Angular v15, onde é exibida uma tela que consome a API https://jsonplaceholder.typicode.com/photos/ e apresenta seus dados de forma dinâmica.

O projeto pode ser utilizado e testado em: https://felipedpaulasantos.github.io/angular-quickstart


## Autores

- [@felipedpaulasantos](https://www.github.com/felipedpaulasantos), C135289


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
## Stack utilizada

**Front-end:** Angular v15




## Uso/Exemplos

Como em um aplicativo Angular comum, tudo se inicia no AppModule/AppComponent.
A rota padrão já levará o usuário ao submódulo Album, onde é exibida a funcionalidade proposta.

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

