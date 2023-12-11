# Boilerplate Backend

> :warning: **Nota Importante:** Este boilerplate foi desenvolvido com foco na **prática e aprimoramento profissional**. Ele não é um projeto convencional e foi criado para servir como uma base educativa e de referência. Utilize com discernimento.

## Objetivos Pessoais com este Repositório:

- Praticar a criação de um Projeto com o "Github Projects".
- Amadurecer ententidimento sobre "Gerenciamento de Projetos".
- Utilizar o ChatGPT na criação de uma documentação consistente.
- Ter um boilerplate de referência.
- Prática e aprimoramento de conteúdos estudados.

#### Implementação:

## Descrição

O projeto "Boilerplate Backend" é uma base de código inicial para acelerar o desenvolvimento de aplicações backend, aplicando as boas práticas de programação e incluindo um conjunto de ferramentas e tecnologias para aplicações NodeJS.

<details>

## Propósito

Este projeto nasceu da necessidade de praticar e aprimorar habilidades profissionais em desenvolvimento de backend. Seu objetivo primário é fornecer um ponto de partida sólido para projetos futuros, minimizando os esforços e riscos associados ao início de cada novo projeto.

## Declaração do Problema

Iniciar um novo projeto do zero pode ser demorado e oneroso. Este boilerplate procura abordar este desafio fornecendo uma solução inicial que visa a qualidade, segurança e documentação desde o início.

## Objetivos

- Desenvolver um boilerplate reutilizável para backend, priorizando boas práticas.
- Servir como uma base inicial para criação e Gerenciamento de Projetos Backend.

## Resultados Esperados

- Redução no tempo necessário para configurar novos projetos.
- Garantir consistência e segurança em projetos subsequentes.
- Aprimorar e enriquecer o portfólio.

## Riscos Iniciais

- Possível incompatibilidade com tecnologias emergentes.
- Manutenção do boilerplate pode se tornar complexa com o tempo.

## Restrições

Este projeto foi construído utilizando como principais tecnologias:
- NodeJS
- Express
- Sequelize
- MySQL

## Escopo

### Requisitos

- Facilidade de instalação e configuração.
- Adesão às melhores práticas de programação.
- Testes automatizados.
- Documentação clara e abrangente.

### Tecnologias e Ferramentas

- Backend: NodeJS, Express, Sequelize, MySQL.
- Gerenciamento: GitHub Projects, Kanban board.

### Planejamento

- A abordagem é livre, porém inspirada em metodologias ágeis, adaptando técnicas do Scrum conforme necessário.

### Cronograma

- **Semana 1:** Planejamento e definição do projeto.
- **Semana 1-2:** Desenvolvimento da configuração básicas, testes e refatoração.
- **Semana 3-4:** Desenvolvimento de uma API RESTful simples para cadastrar usuários.
- **Semana 4-5:** Autenticação e Autorização.
- **Semana 5:** Desenvolvimento de uma estrutura básica para CI/CD.

> **Obs:** Ter um cronograma exercita uma consciência do "todo", já no início do projeto.
</details>

---
## Instalar e rodar o projeto

Rodar o Boilerplate em sua máquina local é uma tarefa simples.

### Dependências globais
Você precisa ter duas principais dependências instaladas:

- Node.js LTS v18 (ou qualquer versão superior)
- Docker Engine com Docker Compose

### Depêndencias locais

Então após baixar o repositório, não se esqueça de instalar as dependências locais do projeto:

```bash
# instalar as dependências
npm install
```
### Rodar o projeto

Para rodar o projeto localmente, basta rodar os comandos abaixo:

```bash
# Levantar o container do Docker com a imagem do Mysql
docker-compose up -d

# criar o Banco de dados "db-api"
npm run db:init

# Levantar a API em modo de desenvolvimento
npm run dev
```

> Observações:
> Você consegue ver o status da API em: http://localhost:3001/status

### Comandos para o build
```bash
# apaga a pasta build se existir, e recria, fazendo a transpilação
npm run build
# roda a aplicação depois de transpilada
npm start
```

### Rodar os testes
```bash
# roda todos os testes
npm run:test

# roda todos os testes com os logs ativados
npm run test:verbose

# roda somente os testes que estão sendo modificados, de forma assistida
# útil para desenvolvimento
npm run test:watch

# roda os testes de unidade (com extenção .spec.ts)
npm run test:unit

# roda os testes de integração (com extenção .test.ts)
npm run test:integration

# Comandos usados pela aplicação:
# usado pelo script do husky "pre-commit" com o lint-staged
# roda a cada commit, comando em .lintstagedrc.json
npm run test:staged

# usado pelo script do husky "pre-push"
# roda ao fazer o push
npm run test:ci
```

### Comandos para o banco de dados:
```bash
# criar o Banco de dados "db-api"
npm run db:init

# Obs: apóis criar suas migrations e seeders, você pode usar estes comandos abaixo
# resetar o Banco de dados
# roda a sequelize-cli fazendo um drop | create | migrate | seed do DB
npm run db:reset

# Se precisar apenas reverter as migrations e os seeders
npx sequelize db:undo:all

# para rodar separadamente as migrations ou os seeders
npm run db:migrate
npm run db:seed:all
```

### O que foi praticado:

- Gerenciamento do projeto com o "Github Projects".
- Divisão dos tarefas em: Milestones | Issues | Tasks.
- Criação de Templates para abertura das Issues.
- Documentação de cada Issue e PR.
- Criação de Tags e utilização da técnica "**M**o**SC**o**W**" para o processo de priorização.
