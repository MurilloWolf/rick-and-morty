# Rick and Morty Characters

Projeto desenvolvido durante o plantão de revisão de Hooks + ContextAPI

***
## Descrição

O projeto faz a consulta no seguinte `endpoint` : https://rickandmortyapi.com/api/character .
O retorno da API é segue esse formato: 
```javascript
{
  "info": {
    "count": 671,
    "pages": 34,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",    
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },{...},{...}]
}
```

O projeto lista os personagens de Rick and Morty em formato de cards, é possivel filtrar pelo nome do personagem, e ao clicar em um card, é redirecionado para página de `About` onde é consumido as informações do personagem do Context e mostrado em tela 


## Como rodar o projeto

Após clonar o projeto, execute os seguintes comandos dentro da pasta do mesmo:

#### `yarn` ou `npm install`
#### `yarn start` ou `npm run start`


## Pontos que podem ser melhorados no projeto
[ ] -CSS da página de About  
[ ] -Adicionar mais filtros (Raça, Status, Planeta de Origems, ...)  
[ ] -Melhorar o filtro(Atualmente é case sensitive)  
[ ] -Clean Code, melhorar nome de funções/constantes e variaveis.  
