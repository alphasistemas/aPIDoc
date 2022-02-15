# **Documentação da API**

Para atender as necessidades dos clientes de integrar uma solução de e-commerce ao ERP AlphaInd, foi desenvolvida a API de e-commerce da AlphaSystemas.

Esta é uma API baseada em micro-serviços e foi construída utilizando o conceito de REST API, de forma a atender as boas práticas de mercado, tendo ainda uma rota de callback para facilitar a integração. O serviço oferecido é Serverless.

***

![Arquitetura](https://raw.githubusercontent.com/alphasistemas/aPIDoc/main/images/overview.png)

***
## **Confiuração de AlphaInd e PDV**

Para que a API funcione corretamente, em conjunto com o AlphaInd e PDV, é necessário que o usuário confiugere o *config.ini* corretamente dos dois sistemas. As configurações que devem ser usadas estão descritas abaixo:

API=http://api-alpha.alphasystemas.com.br

APIPublish=/subscription/publication

APISignIn=/auth/signIn

DuracaoToken=15000

***

## **Swagger**
A API foi Documentada utilizando o Swagger, um framework de documentação de APIs.

O Swagger, além de mostrar os endpoints, permite a realização de exemplos de testes, retornando as responses associadas ao http status code.

Pode-se acessar a documentação a partir deste link: [Documentação](/doc)

OBS: Caso tenha problema com CORS, verifique se o Swagger está sendo acessado via https. E caso o erro persista utilize o [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=en) para habilitar o CORS pelo Chrome.

***
## **Configurações de Acesso**

Para usar esta API, é necessário que o usuário esteja autenticado. Para isso, cria-se uma nova conta a partir da rota /auth/singUp ou utiliza-se um usuário administrador provido pela infra. Conseguinte, é necessário que o usuário se autentique pela rota /auth/signIn, que retornará um token de autenticação. Em cada rota da API o token será solicitado como bearer token. O usuário precisará se autenticar novamente toda vez que vencer o prazo de autenticação predefinido. A API só funcionará enquanto o usuário estiver usando um token. O tempo de vencimento do token é definido no Config.ini de acordo com o cliente.

***
## **Variáveis de ambiente**

As variáveis de ambiente usadas no sistema estão da seguinte forma.


| Serviço(S)                                     | Nome da Variável de Ambiente         | Descrição                                    | Valor de Exemplo                                                    | Secret | Obrigatório | Produção | Desenvolvimento |
| ---------------------------------------------- | ------------------------------------ | -------------------------------------------- | --------------------------------------------------------------------| ------ | ----------- | -------- | --------------- |
| AUTH                                           | AUTH_DEFAULT_PERMISSIONS             | Permissões default para esse serviço         | '{""all"": [""all""]}'                                              |   ✖    |     ✖      |    🗸    |                  |
| AUTH                                           | DEFAULT_PERMISSIONS                  | Permisões default para cada serviço          | '{""all"": {""all"": [""all""]}}'                                   |   ✖    |     ✖      |    🗸    |                  |
| AUTH                                           | MAIL_HOST                            | Host de Email                                | http://api-ecomm.alphasystemas.com.br/email                         |   ✖    |     🗸      |    ✖    |                  |
| AUTH                                           | MAIL_PATH                            | Endpoint do Email                            | /api/email                                                          |   ✖    |     🗸      |    ✖    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | JWT_PUBLIC_KEY                       | JWT RSA PUBLIC KEY                           | -                                                                   |   🗸    |     🗸      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | CORS_ENABLED                         | CORS Habilitado                              | true                                                                |   ✖    |     ✖      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | ALLOWED_ORIGIN                       | Origins Permitidas                           | *                                                                   |   ✖    |     ✖      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | ALLOWED_METHODS                      | Métodos Permitidos                           | GET,HEAD,PUT,PATCH,POST,DELETE                                      |   ✖    |     ✖      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | ALLOWED_PREFLIGHT_CONTINUE           | Preflight Continue                           | true                                                                |   ✖    |     ✖      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | ALLOWED_OPTIONS_SUCCESS_STATUS       | Codigo de sucesso de Options                 | 204                                                                 |   ✖    |     ✖      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | SERVICE_NAME                         | Nome do Serviço                              | AUTH                                                                |   ✖    |     🗸      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | INSTANCE                             | Nome da Instancia                            | auth                                                                |   ✖    |     🗸      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | PORT                                 | Porta onde o serviço vai escutar             | 3000                                                                |   ✖    |     ✖      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_HOST                           | Mongo Server URL                             | mongo.sadfasdf.mongodb.net                                          |   ✖    |     🗸      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_USER                           | Mongo Server Password                        | password                                                            |   🗸    |     🗸      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_PASSWORD                       | Mongo Server Password                        | password                                                            |   🗸    |     🗸      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_WRITE_DATABASE                 | Mongo Server Write DB Name                   | write                                                               |   🗸    |     🗸      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_READ_DATABASE                  | Mongo Server Read DB Name                    | read                                                                |   🗸    |     🗸      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_OPTIONS                        | Mongo Server Options                         | retryWrites=true&w=majority                                         |   🗸    |     🗸      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_CONNECTION_TYPE                | Mongo Server Connection Type                 | mongodb+srv                                                         |   ✖    |     🗸      |    🗸    |                  |
| AUTH, PRODUCT, SALE, USER, SUBSCRIPTION        | USE_STEP                             | Step para uso na Vercel e sistemas serveless | true                                                                |   ✖    |     🗸      |    🗸    |                  |
| AUTH, PRODUCT, SALE, USER, SUBSCRIPTION        | STEP_SIZE                            | Tamanho do Step em ms                        | 1000                                                                |   ✖    |     🗸      |    🗸    |                  |
| EMAIL                                          | MAIL_USER                            | Usuário da Caixa de Email                    | user@KingHost.com.br                                                |   🗸    |     🗸      |    ✖    |                  |
| EMAIL                                          | MAIL_PASSWORD                        | Senha da Caixa de Email                      | user_password                                                       |   🗸    |     🗸      |    ✖    |                  |
| EMAIL                                          | MAIL_SERVICE                         | Serviço que hospeda a Caixa de Email         | KingHost                                                            |   ✖    |     🗸      |    ✖    |                  |
| EMAIL                                          | MAIL_SERVICE_POOL                    | Se o serviço de Email vai usar Pool          | true                                                                |   ✖    |     🗸      |    ✖    |                  |
| EMAIL                                          | MAIL_SERVICE_HOST                    | Host do Serviço que hospeda a Caixa de Email | http://smtpi.kinghost.net/                                          |   ✖    |     🗸      |    ✖    |                  |
| EMAIL                                          | MAIL_SERVICE_SECURE                  | Se Aconexão é segura com a Caixa de Email    | true                                                                |   ✖    |     🗸      |    ✖    |                  |
| EMAIL                                          | MAIL_SERVICE_TLS                     | Configuração de TLS da Caixa de Email        | '{ "ciphers":"SSLv3", "rejectUnauthorized": false }'                |   ✖    |     🗸      |    ✖    |                  |
| EMAIL                                          | MAIL_SERVICE_PORT                    | Porta da Conexão                             | 465                                                                 |   ✖    |     🗸      |    ✖    |                  |
| EMAIL                                          | MAIL_SUFIX                           | Sufixo do Email                              | @alphasystemas.com.br                                               |   ✖    |     🗸      |    ✖    |                  |
| EMAIL                                          | MAIL_TIMEOUT                         | Timeout do Email                             | 100000                                                              |   ✖    |     🗸      |    ✖    |                  |
| EMAIL                                          | MAIL_JITTER                          | Jitter do Email                              | 10000                                                               |   ✖    |     🗸      |    ✖    |                  |
| EMAIL                                          | LANGUAGE                             | Língua dos Emails                            | pt-br                                                               |   ✖    |     ✖      |    🗸    |                  |
| PRODUCT, SALE                                  | STORE_ID                             | Id da Loja                                   | 1                                                                   |   ✖    |     🗸      |    🗸    |                  |
| PRODUCT, SALE, USER                            | MSSQL_URI                            | String de conexão                            | mssql://user:password@*.dns.net:porta/database?encrypt=false&=false |   🗸    |     ✖      |    🗸    |                  |
| PRODUCT, SALE, USER                            | MSSQL_CONNECTION_TYPE                | MSSQL Server Connection Type                 | mssql                                                               |   🗸    |     ✖      |    🗸    |                  |
| PRODUCT, SALE, USER                            | MSSQL_OPTIONS                        | MSSQL Server Options                         | {"encrypt": "false","trustServerCertificate": "false"}              |   🗸    |     🗸      |    🗸    |                  |
| PRODUCT, SALE, USER                            | MSSQL_READ_DATABASE                  | MSSQL Server Read DB Name                    | Alphaind                                                            |   🗸    |     🗸      |    🗸    |                  |
| PRODUCT, SALE, USER                            | MSSQL_HOST                           | MSSQL Server URL                             | db_address                                                          |   🗸    |     🗸      |    🗸    |                  |
| PRODUCT, SALE, USER                            | MSSQL_PORT                           | MSSQL Server Port                            | db_port                                                             |   🗸    |     🗸      |    🗸    |                  |
| PRODUCT, SALE, USER                            | MSSQL_USER                           | MSSQL Server Password                        | user                                                                |   🗸    |     🗸      |    🗸    |                  |
| PRODUCT, SALE, USER                            | MSSQL_PASSWORD                       | MSSQL Server Password                        | password                                                            |   🗸    |     🗸      |    🗸    |                  |
| SALE                                           | AUTH_HOST                            | Host de Autenticação                         | http://api-ecomm.alphasystemas.com.br/auth                          |   ✖    |     🗸      |    🗸    |                  |
| SALE                                           | PRODUCT_HOST                         | Host de Produto                              | http://api-ecomm.alphasystemas.com.br/product                       |   ✖    |     🗸      |    🗸    |                  |
| SALE                                           | SERVICE_KEY                          | Senha do Serviço                             | password                                                            |   🗸    |     🗸      |    🗸    |                  |
| USER                                           | IBGE_URL_PREFIX                      | URL base para a API do IBGE                  | http://servicodados.ibge.gov.br/api/v1/localidades/estados/         |   🗸    |     ✖      |    🗸    |                  |
| USER                                           | IBGE_URL_SUFFIX                      |                                              | /municipios                                                         |   🗸    |     ✖      |    🗸    |                  |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_URI                            | Mongo Server String de Conexão               | mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false  |   🗸    |     🗸      |    🗸    |                  |