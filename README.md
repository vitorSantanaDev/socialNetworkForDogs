# Social network for dogs

<p>Social network made exclusively for your pet.</p>

<p>
  <img src="https://img.shields.io/badge/made%20by-VITOR%20SANTANA-fb1?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vitorSantanaDev/socialNetworkForDogs?color=fb1&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/vitorSantanaDev/socialNetworkForDogs?color=fb1&style=flat-square">
</p>

<img align="right" src="src/Assets/dogs-footer-fb.svg" height="120">

## Tópicos 

[Sobre a aplicação](#sobre-o-foodfy)

[Funcionalidades](#funcionalidades)

[Tecnologias e Ferramentas](#tecnologias-e-ferramentas)

[Instalação e uso](#instalação-e-uso)


<br>

## Sobre o Foodfy

A Social network for dogs, é uma aplicação desenvolvida na conclusão de um mega curso de React Js, na plataforma https://www.origamid.com/.  Foram utilizadas as principais funcionalidades da biblioteca, com o intuito de abordar os principais conceitos e boas práticas no desenvolvimento. 

<h3 align="center">Main</h3>
<p align="center">
  <img src="Assets/dogs-footer.svg" alt="página principal">
</p>

<br>

<h3 align="center">Admin</h3>
<p align="center">
  <img src=".github/admin.gif" alt="página admin">
</p>

<br>

<h3 align="center">Email de boas-vindas</h3>
<p align="center">
  <img src=".github/welcome_email.png" alt="página admin">
</p>

<br>

## Funcionalidades

- [X] Explore variados tipos de receitas.
- [X] Gerencie receitas, chefs e usuários.
- [X] Upload de imagems com Multer.
- [X] Pesquisar receitas.
- [X] Páginas dinâmicas com Nunjucks.
- [X] Banco de dados PostgreSQL.
- [X] Sistema de login e recuperação de senha.
- [X] Área administrativa.

<br>

## Tecnologias e Ferramentas

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
- [JavaScript](https://devdocs.io/javascript/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [NodeJS](https://nodejs.org/en/)
- [Nodemailer](https://nodemailer.com/about/)
- [Express](https://expressjs.com/)
- [Express Session](https://github.com/expressjs/session)
- [Multer](https://github.com/expressjs/multer)
- [PostgreSQL](https://www.postgresql.org/)
- [BcryptJS](https://github.com/dcodeIO/bcrypt.js)
- [Faker.js](https://github.com/Marak/Faker.js)

<br>

## Instalação e Uso

Para rodar a aplicação, você precisa instalar o [Node](https://nodejs.org/en/) e o banco de dados [Postgres](https://www.postgresql.org/).

Siga os passos abaixo:

```bash
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/martins-rafael/foodfy.git
# ou use a opção de download.

# Entre na pasta com 
$ cd socialNetworkForDogs

# Instale as dependências
$ yarn install

# Rode a aplicação
$ yarn start
```

<br>

### Acessando a Área Administrativa

Selecione um email da tabela users, acesse a tela de login e entre utilizando o mesmo com a senha "rocket" (senha padrão).

Dica: usuários administradores possuem a badge "ADMIN" no header:
<p align="center">
  <img src=".github/admin_badge.png" alt="página admin">
</p>

<br>

### Criando Novos Usuários e Recupeção de Senha

Para usar estes recursos, edite o arquivo `mailer.js` dentro da pasta `scr/lib` com suas credenciais.

<br>

## Licença
<a href="https://opensource.org/licenses/MIT">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-6558C3?style=flat-square">
</a>

<br>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Rafael Martins](https://github.com/martins-rafael)

[![Linkedin Badge](https://img.shields.io/badge/-Rafael%20Martins-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rafaeldcmartins/)](https://www.linkedin.com/in/rafaeldcmartins/) 
[![Gmail Badge](https://img.shields.io/badge/-rafaeldcmartins@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rafaeldcmartins@gmail.com)](mailto:rafaeldcmartins@gmail.com)
