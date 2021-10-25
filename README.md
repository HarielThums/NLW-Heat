# NLW-Heat

O objetivo desse projeto é aprofundar conhecimentos no desenvolvimento backend com Node.js, Typescript, Prisma e Websocket e autenticação com perfil do Github.

### Tecnologias :star: :
- Typescript
- Express
- Prsima

### Ferramentas utilizadas :hammer_and_wrench: :
- Prisma
- socket.io
- Jsonwebtoken
- bcryptjs

### Rodando o projeto:
- Requisitos:
	- Node.js
	- Yarn
	- Insomnia ou Postman

<br/>

- Passo 1: Altere o nome do arquivo `.env.example` para `.env`
- Passo 2: Adicione suas credenciais do Github App ao arquivo `.env`
  - (Credenciais podem ser geradas no github acessando: `Settings > developer settings > OAuth Apps`)
- Passo 3: Rode o comando `yarn`
- Passo 4: Rode o comando `yarn prisma migrate dev`
- Passo 5: Rode `yarn dev`
- Passo 6: Teste o projeto no seu insmonia ou postman.
