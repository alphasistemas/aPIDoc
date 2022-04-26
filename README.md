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


| Serviço(S)                                                        | Nome da Variável de Ambiente    | Descrição                                    | Valor de Exemplo                                                    | Secret | Obrigatório | Produção |
| ----------------------------------------------------------------- | ------------------------------- | -------------------------------------------- | --------------------------------------------------------------------| ------ | ----------- | -------- |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | ALLOWED_ORIGIN                  | Origins Permitidas                           | *                                                                   |   ✖    |     ✖      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | ALLOWED_METHODS                 | Métodos Permitidos                           | GET,HEAD,PUT,PATCH,POST,DELETE                                      |   ✖    |     ✖      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | ALLOWED_PREFLIGHT_CONTINUE      | Preflight Continue                           | true                                                                |   ✖    |     ✖      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | ALLOWED_OPTIONS_SUCCESS_STATUS  | Codigo de sucesso de Options                 | 204                                                                 |   ✖    |     ✖      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | CORS_ENABLED                    | CORS Habilitado                              | true                                                                |   ✖    |     ✖      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | LIMIT_WINDOW_MS                 | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | LIMIT_MAX                       | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_URI | Mongo Server String de Conexão | mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false  | 🗸 |     🗸      |   🗸     |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_HOST                      | Mongo Server URL                             | mongo.sadfasdf.mongodb.net                                          |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_USER                      | Mongo Server Password                        | password                                                            |   🗸    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_PASSWORD                  | Mongo Server Password                        | password                                                            |   🗸    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_WRITE_DATABASE            | Mongo Server Write DB Name                   | write                                                               |   🗸    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_OPTIONS                   | Mongo Server Options                         | retryWrites=true&w=majority                                         |   🗸    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_CONNECTION_TYPE           | Mongo Server Connection Type                 | mongodb+srv                                                         |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_DISABLED                  | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_WRITE_CONNECTION_TYPE     | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_WRITE_DISABLED            | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_WRITE_HOST                | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_WRITE_OPTIONS             | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_WRITE_URI                 | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_PORT                      | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_WRITE_PORT                | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_WRITE_USER                | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, SETTINGS, SUBSCRIPTION, USER | MONGO_WRITE_PASSWORD            | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOGFRONT, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION      | SERVICE_NAME                    | Nome do Serviço                              | AUTH                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOGFRONT, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION      | INSTANCE                        | Nome da Instancia                            | auth                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION           | MONGO_READ_DATABASE             | Mongo Server Read DB Name                    | read                                                                |   🗸    |     🗸      |    🗸    |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION                    | PORT                            | Porta onde o serviço vai escutar             | 3000                                                                |   ✖    |     ✖      |    🗸    |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION                    | JWT_PUBLIC_KEY                  | JWT RSA PUBLIC KEY                           | -                                                                   |   🗸    |     🗸      |    🗸    |
| AUTH, PRODUCT, SALE, SUBSCRIPTION, USER                           | USE_STEP                        | Step para uso na Vercel e sistemas serveless | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, PRODUCT, SALE, SUBSCRIPTION, USER                           | STEP_SIZE                       | Tamanho do Step em ms                        | 1000                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, SUBSCRIPTION                                | AUTH_DEFAULT_PERMISSIONS        | Permissões default para esse serviço         | '{""all"": [""all""]}'                                              |   ✖    |     ✖      |    🗸    |
| AUTH, CATALOG, EMAIL, SUBSCRIPTION                                | DEFAULT_PERMISSIONS             | Permisões default para cada serviço          | '{""all"": {""all"": [""all""]}}'                                   |   ✖    |     ✖      |    🗸    |
| AUTH, CATALOG, EMAIL, SUBSCRIPTION                                | MONGO_READ_URI                  | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, SUBSCRIPTION                                | MONGO_READ_CONNECTION_TYPE      | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, SUBSCRIPTION                                | MONGO_READ_OPTIONS              | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, SUBSCRIPTION                                | MONGO_READ_HOST                 | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, SUBSCRIPTION                                | MONGO_READ_PORT                 | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, SUBSCRIPTION                                | MONGO_READ_USER                 | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, CATALOG, EMAIL, SUBSCRIPTION                                | MONGO_READ_PASSWORD             | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| PRODUCT, SALE, SETTINGS, USER                                     | MSSQL_URI                       | String de conexão                            | mssql://user:password@*.dns.net:porta/database?encrypt=false&=false |   🗸    |     ✖      |    🗸    |
| PRODUCT, SALE, SETTINGS, USER                                     | MSSQL_CONNECTION_TYPE           | MSSQL Server Connection Type                 | mssql                                                               |   🗸    |     ✖      |    🗸    |
| PRODUCT, SALE, SETTINGS, USER                                     | MSSQL_OPTIONS                   | MSSQL Server Options                         | {"encrypt": "false","trustServerCertificate": "false"}              |   🗸    |     🗸      |    🗸    |
| PRODUCT, SALE, SETTINGS, USER                                     | MSSQL_READ_DATABASE             | MSSQL Server Read DB Name                    | Alphaind                                                            |   🗸    |     🗸      |    🗸    |
| PRODUCT, SALE, SETTINGS, USER                                     | MSSQL_HOST                      | MSSQL Server URL                             | db_address                                                          |   🗸    |     🗸      |    🗸    |
| PRODUCT, SALE, SETTINGS, USER                                     | MSSQL_PORT                      | MSSQL Server Port                            | db_port                                                             |   🗸    |     🗸      |    🗸    |
| PRODUCT, SALE, SETTINGS, USER                                     | MSSQL_USER                      | MSSQL Server Password                        | user                                                                |   🗸    |     🗸      |    🗸    |
| PRODUCT, SALE, SETTINGS, USER                                     | MSSQL_PASSWORD                  | MSSQL Server Password                        | password                                                            |   🗸    |     🗸      |    🗸    |
| PRODUCT, SALE, PRODUCT                                            | STORE_ID                        | Id da Loja                                   | 1                                                                   |   ✖    |     🗸      |    🗸    |
| AUTH, EMAIL                                                       | IS_FAKE_MAIL                    | xxxx                                         | true                                                                |   ✖    |     🗸      |    ✖    |
| AUTH, EMAIL                                                       | MAIL_PATH                       | Endpoint do Email                            | /api/email                                                          |   ✖    |     🗸      |    ✖    |
| AUTH                                                              | IS_FAKE                         | xxxx                                         | true                                                                |   ✖    |     🗸      |    ✖    |
| AUTH                                                              | MAIL_HOST                       | Host de Email                                | http://api-ecomm.alphasystemas.com.br/email                         |   ✖    |     🗸      |    ✖    |
| AUTH                                                              | MAIL_KEY                        | Key de Email                                 | -                                                                   |   ✖    |     🗸      |    ✖    |
| AUTH                                                              | KEY_PATH                        | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| CATALOG                                                           | HOST                            | xxx                                          | XXXX                                                                |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SIGN_IN                         | xxx                                          | user-alphasystemas.vercel.app/api/client                            |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SIGN_IN_SELLER                  | xxx                                          | user-alphasystemas.vercel.app/api/employee                          |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SIGN_IN_LEGACY                  | xxx                                          | legacy-auth-alphasystemas.vercel.app/api/signIn                     |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SIGN_UP                         | xxx                                          | user-alphasystemas.vercel.app/api/client                            |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | CATALOG_CONFIG                  | xxx                                          | catalog-alphasystemas.vercel.app/api/config                         |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | CATALOG_GROUP                   | xxx                                          | catalog-alphasystemas.vercel.app/api/group                          |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | CATALOG_THEME                   | xxx                                          | catalog-alphasystemas.vercel.app/api/theme                          |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | CATALOG_PRODUCT                 | xxx                                          | catalog-alphasystemas.vercel.app/api/product                        |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | PRODUCT_PRODUCT                 | xxx                                          | https://api-alpha.alphasystemas.com.br/product/product              |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | POSTAL_CODE_ADDRESS             | xxx                                          | viacep.com.br/ws/                                                   |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SALE_ESTIMATE                   | xxx                                          | https://api-alpha.alphasystemas.com.br/sale/estimate                |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SALE_PAYMENT_METHOD             | xxx                                          | https://api-alpha.alphasystemas.com.br/sale/payment/method          |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SALE_PAYMENT_CONDITION          | xxx                                          | https://api-alpha.alphasystemas.com.br/sale/payment/condition       |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | PIC_AWS_ACCESS_KEY_ID           | xxx                                          | access_key_id                                                       |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | PIC_AWS_BUCKET                  | xxx                                          | 'alphacatalogo'                                                     |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | PIC_AWS_BUCKET_DIR              | xxx                                          | 'ALPHA'                                                             |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | PIC_AWS_BUCKET_REGION           | xxx                                          | 'us-east-2'                                                         |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | ROLE_ID                         | xxx                                          | 0                                                                   |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | FILTER_SALES                    | xxx                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | NODE_ENV                        | xxx                                          | test                                                                |   ✖    |     🗸      |    🗸    |
| EMAIL                                                             | MAIL_USER                       | Usuário da Caixa de Email                    | user@KingHost.com.br                                                |   🗸    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_PASSWORD                   | Senha da Caixa de Email                      | user_password                                                       |   🗸    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE                    | Serviço que hospeda a Caixa de Email         | KingHost                                                            |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE_POOL               | Se o serviço de Email vai usar Pool          | true                                                                |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE_HOST               | Host do Serviço que hospeda a Caixa de Email | http://smtpi.kinghost.net/                                          |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE_SECURE             | Se Aconexão é segura com a Caixa de Email    | true                                                                |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE_TLS                | Configuração de TLS da Caixa de Email        | '{ "ciphers":"SSLv3", "rejectUnauthorized": false }'                |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE_PORT               | Porta da Conexão                             | 465                                                                 |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SUFIX                      | Sufixo do Email                              | @alphasystemas.com.br                                               |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_TIMEOUT                    | Timeout do Email                             | 100000                                                              |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_JITTER                     | Jitter do Email                              | 10000                                                               |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | LANGUAGE                        | Língua dos Emails                            | pt-br                                                               |   ✖    |     ✖      |    🗸    |
| PRODUCT                                                           | MSSQL_SSL                       |zzzzzzzzzzzz                                  | true                                                                |   ✖    |     🗸      |    🗸    |
| PRODUCT                                                           | MSSQL_CONNECTION_TIMEOUT        |zzzzzzzzzzzz                                  | 60000                                                               |   ✖    |     🗸      |    🗸    |
| PRODUCT                                                           | MSSQL_REQUEST_TIMEOUT           |zzzzzzzzzzzz                                  | 60000                                                               |   ✖    |     🗸      |    🗸    |
| SALE                                                              | AUTH_HOST                       | Host de Autenticação                         | http://api-ecomm.alphasystemas.com.br/auth                          |   ✖    |     🗸      |    🗸    |
| SALE                                                              | PRODUCT_HOST                    | Host de Produto                              | http://api-ecomm.alphasystemas.com.br/product                       |   ✖    |     🗸      |    🗸    |
| SALE                                                              | SERVICE_KEY                     | Senha do Serviço                             | password                                                            |   🗸    |     🗸      |    🗸    |
| SALE                                                              | PRICE_TABLE                     | Tabela de preço                              | 02                                                                  |   🗸    |     🗸      |    🗸    |
| SUBSCRIPTION                                                      | DEFAULT_HOST                    | XXXX                                         | XXX                                                                 |   🗸    |     🗸      |    🗸    |
| USER                                                              | MONGO_DATABASE                  | XXXX                                         | XXX                                                                 |   🗸    |     ✖      |    🗸    |
| USER                                                              | IBGE_URL_PREFIX                 | URL base para a API do IBGE                  | http://servicodados.ibge.gov.br/api/v1/localidades/estados/         |   🗸    |     ✖      |    🗸    |
| USER                                                              | IBGE_URL_SUFFIX                 | SUFIXO DA URL base para a API do IBGE        | /municipios                                                         |   🗸    |     ✖      |    🗸    |