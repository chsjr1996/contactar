[![License MIT](https://img.shields.io/github/license/chsjr1996/contactar)](https://github.com/chsjr1996/contactar/blob/main/LICENSE) [![https://github.com/chsjr1996/contactar/actions/workflows/laravel.yml/badge.svg](https://github.com/chsjr1996/contactar/actions/workflows/laravel.yml/badge.svg)](https://github.com/chsjr1996/contactar/actions)

---

<p align="center">
  <img src="https://raw.githubusercontent.com/chsjr1996/contactar/main/public/img/contactar-small.png" />
</p>

<br>

# Contactar

Essa aplicação contem um exemplo de formulário de contato e foi construída utilizando as seguintes tecnologias:

-   Laravel 8
-   Docker (Laravel Sail: Aplicação, SGBD, Mailhog, Selenium e Redis)
-   React Inertia.js (com Typescript, Styled components e Bootsrap)

O repositório também conta com Github Actions para realizar os testes automatizados a cada _commit_.

---

## Instalação com Laravel Sail

### Requisitos

- Docker (Laravel Sail)
- Node.JS (opcional, build do frontend)¹

### Passos necessários:

-   Copiar o arquivo `.env.sail.example` e mudar o nome para `.env` **(Ambiente de desenvolvimento)**
-   Copiar o arquivo `.env.example` e mudar o nome para `.env` **(Ambiente de produção)**
-   Executar o comando `./vendor/bin/sail up`²
-   Executar o comando `./vendor/bin/sail artisan migrate`
-   Executar o comando `npm run watch` **(Ambiente de desenvolvimento)**
-   Executar o comando `npm run production` **(Ambiente de produção)**

Pronto, sua aplicação já esta executando.

### Observações

Você pode mudar o arquivo `.env` copiado de `.env.sail.example`, mas isso não é necessário. Porém, em produção você deve utilizar o `.env.example`, e portanto, precisa preencher as seguintes variáveis de ambiente:

| Variável          | Valor                                         |
| ----------------- | --------------------------------------------- |
| APP_ENV           | **alterar em ambientes de produção**          |
| APP_DEBUG         | **alterar em ambientes de produção**          |
| APP_URL           | DNS/IP utilizado                              |
| APP_KEY           | usar o comando `php artisan key:generate`     |
| DB_CONNECTION     | mysql                                         |
| DB_HOST           | mysql                                         |
| DB_PORT           | 3306                                          |
| DB_DATABASE       | defina o nome desejado para base dados³       |
| DB_USERNAME       | defina o usuário desejado para base de dados³ |
| DB_PASSWORD       | defina a senha desejada para base dados³      |
| REDIS_HOST        | redis                                         |
| REDIS_PASSWORD    | null                                          |
| REDIS_PORT        | 6379                                          |
| MAIL_MAILER       | smtp                                          |
| MAIL_HOST         | mailhog                                       |
| MAIL_PORT         | 1025                                          |
| MAIL_FROM_ADDRESS | endereço de e-mail desejado (remetente)       |
| MAIL_FROM_NAME    | "${APP_NAME}"                                 |
| MAIL_TO_ADDRESS   | endereço de e-mail desejado (destinatário)    |
| MAIL_TO_NAME      | Nome desejado (destinatário)                  |

> ¹ Caso não possua o Node.JS em sua máquina você pode utilizar o comando `sail bash` para entrar no "shell" do container de aplicação, e uma vez lá dentro executar os comandos de build do frontend.

> ² Caso tenha o [alias configurado](https://laravel.com/docs/8.x/sail#configuring-a-bash-alias) basta usar `sail up`. Além disso, a primeira execução pode demorar para concluir pois existem algumas dependências nas imagens usadas que precisam ser compiladas.

> ³ Os valores aplicados aqui serão refletidos automaticamente no arquivo `docker-composer`.

### Portas da aplicação

| Porta | Descrição           |
| ----- | ------------------- |
| 80    | aplicação (http)    |
| 3306  | MySQL               |
| 6379  | Redis               |
| 1025  | Mailhog (Server)    |
| 8025  | Mailhog (Dashboard) |

---

## Acessando a aplicação

Após executar a aplicação com **Laravel Sail** basta navegar para a url [http://localhost/contact](http://localhost/contact) para acessar o formulário de contato.

É possível visualizar os e-mails enviados através da url [http://localhost:8025](http://localhost:8025)

---

## Executando testes

Uma vez que a aplicação esteja executando, basta entrar com os seguintes comandos:

-   `./vendor/bin/sail artisan test` (testes unitários e de integração)
-   `./vendor/bin/sail dusk` (testes de navegador)

---

### Em desenvolvimento
