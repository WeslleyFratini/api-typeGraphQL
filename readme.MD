## Api usando TypeGraphQL

- Documentação: https://typegraphql.com/

### Iniciar o projeto 

```sh 
  git clone
  ```
```sh
  yarn install
  ```
```sh
  yarn start
```
- Abra o browser e navegue: http://localhost:4100
<br>

Para criar a Mutation: 

```graphql
  mutation {
  addVideo(videoInput:{
    description: "Video exemplo"
    title: "Video demonstrativo"
    category: "Aventura"
  }) {
    description
    title
    category
  }
}
```

Para consultar os videos cadastrados:

```graphql
    {
      videos{
        description
        title
        category
      }
    }
```  
    