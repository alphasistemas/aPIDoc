# Documentação da API
Para atender as necessidades dos clientes de integrar uma solução de e-commerce ao ERP AlphaInd, foi desenvolvida a API de e-commerce da AlphaSystemas.

Esta é uma API baseada em micro-serviços e foi construída utilizando o conceito de REST API, de forma a atender as boas práticas de mercado, tendo ainda uma rota de callback para facilitar a integração.

![Arquitetura](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ad36cce9-ed53-4fca-9afa-06ea1701377c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211201T121706Z&X-Amz-Expires=86400&X-Amz-Signature=462fec7d45209d34631d1ce37d091e3d22ac307c1f7725d9107178b9d86d5d3d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Swagger
A API foi Documentada utilizando o Swagger, um framework de documentação de APIs.

O Swagger, além de mostrar os endpoints, permite a realização de exemplos de testes, retornando as responses associadas ao http status code.

[Documentação](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/alphasistemas/aPIDoc/main/src/swagger.json)

## Variáveis de ambiente
| Serviço(S)                                     | Nome da Variável de Ambiente         | Descrição                                    | Valor de Exemplo                                     | Secret | Obrigatório |
| ---------------------------------------------- | ------------------------------------ | -------------------------------------------- | ---------------------------------------------------- | ------ | ----------- |
| AUTH                                           | AUTH_DEFAULT_PERMISSIONS             | Permissões default para esse serviço         | '{""all"": [""all""]}'                               |  ✖     |  ✖         |
| AUTH                                           | DEFAULT_PERMISSIONS                  | Permisões default para cada serviço          | '{""all"": {""all"": [""all""]}}'                    |  ✖     |  ✖         |
| AUTH                                           | MAIL_HOST                            | Host de Email                                | http://api-ecomm.alphasystemas.com.br/email          |  ✖     |  🗸         |
| AUTH                                           | MAIL_PATH                            | Endpoint do Email                            | /api/email                                           |  ✖     |  🗸         |
| AUTH                                           | JWT_PRIVATE_KEY                      | JWT RSA PRIVATE KEY                          | -                                                    |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | JWT_PUBLIC_KEY                       | JWT RSA PUBLIC KEY                           | -                                                    |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | CORS_ENABLED                         | CORS Habilitado                              | true                                                 |  ✖     |  ✖         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | ALLOWED_ORIGIN                       | Origins Permitidas                           | *                                                    |  ✖     |  ✖         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | ALLOWED_METHODS                      | Métodos Permitidos                           | *                                                    |  ✖     |  ✖         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | ALLOWED_PREFLIGHT_CONTINUE           | Preflight Continue                           | true                                                 |  ✖     |  ✖         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | ALLOWED_OPTIONS_SUCCESS_STATUS       | Codigo de sucesso de Options                 | 204                                                  |  ✖     |  ✖         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | SERVICE_NAME                         | Nome do Serviço                              | AUTH                                                 |  ✖     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | INSTANCE                             | Nome da Instancia                            | auth                                                 |  ✖     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | PORT                                 | Porta onde o serviço vai escutar             | 3000                                                 |  ✖     |  ✖         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_HOST                           | Mongo Server URL                             | mongo.sadfasdf.mongodb.net                           |  ✖     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_USER                           | Mongo Server Password                        | password                                             |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_PASSWORD                       | Mongo Server Password                        | password                                             |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_WRITE_DATABASE                 | Mongo Server Write DB Name                   | write                                                |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_READ_DATABASE                  | Mongo Server Read DB Name                    | read                                                 |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_OPTIONS                        | Mongo Server Options                         | retryWrites=true&w=majority                          |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_CONNECTION_TYPE                | Mongo Server Connection Type                 | mongodb+srv                                          |  ✖     |  🗸         |
| AUTH, PRODUCT, SALE, USER, SUBSCRIPTION        | USE_STEP                             | Step para uso na Vercel e sistemas serveless | true                                                 |  ✖     |  🗸         |
| AUTH, PRODUCT, SALE, USER, SUBSCRIPTION        | STEP_SIZE                            | Tamanho do Step em ms                        | 1000                                                 |  ✖     |  🗸         |
| EMAIL                                          | MAIL_USER                            | Usuário da Caixa de Email                    | user@alphasystemas.com.br                            |  ✖     |  🗸         |
| EMAIL                                          | MAIL_PASSWORD                        | Senha da Caixa de Email                      | user_password                                        |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE                         | Serviço que hospeda a Caixa de Email         | KingHost                                             |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE_POOL                    | Se o serviço de Email vai usar Pool          | true                                                 |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE_HOST                    | Host do Serviço que hospeda a Caixa de Email | http://smtpi.kinghost.net/                           |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE_SECURE                  | Se Aconexão é segura com a Caixa de Email    | true                                                 |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE_TLS                     | Configuração de TLS da Caixa de Email        | '{ "ciphers":"SSLv3", "rejectUnauthorized": false }' |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE_PORT                    | Porta da Conexão                             | 465                                                  |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SUFIX                           | Sufixo do Email                              | @alphasystemas.com.br                                |  ✖     |  🗸         |
| EMAIL                                          | MAIL_TIMEOUT                         | Timeout do Email                             | 100000                                               |  ✖     |  🗸         |
| EMAIL                                          | MAIL_JITTER                          | Jitter do Email                              | 10000                                                |  ✖     |  🗸         |
| EMAIL                                          | LANGUAGE                             | Língua dos Emails                            | pt-br                                                |  ✖     |  ✖         |
| PRODUCT, SALE                                  | STORE_ID                             | Id da Loja                                   | 1                                                    |  ✖     |  🗸         |
| SALE                                           | AUTH_HOST                            | Host de Autenticação                         | http://api-ecomm.alphasystemas.com.br/auth           |  ✖     |  🗸         |
| SALE                                           | PRODUCT_HOST                         | Host de Produto                              | http://api-ecomm.alphasystemas.com.br/product        |  ✖     |  🗸         |
| SALE                                           | SERVICE_KEY                          | Senha do Serviço                             | password                                             |  ✖     |  🗸         |
| {GITHUB.SECRET}                                | SSH_PRIVATE_KEY                      |                                              | ssh_ed25519.key/ssh_ed25519.key.pub                  |  ✖     |  🗸         |
