## Api usando TypeGraphQL

- Documentação: https://typegraphql.com/

### Iniciar o projeto 

- `git clone`
- `yarn install`
-  `yarn start`

- Abra o browser e navegue: http://localhost:4100
<br>
- Para criar a Mutation: 
```
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

- Para consultar os videos cadastrados:
```
    {
      videos{
        description
        title
        category
      }
    }
  
    