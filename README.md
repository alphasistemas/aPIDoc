# **Documentação da API**

Para atender as necessidades dos clientes de integrar uma solução de e-commerce ao ERP AlphaInd, foi desenvolvida a API de e-commerce da AlphaSystemas.

Esta é uma API baseada em micro-serviços e foi construída utilizando o conceito de REST API, de forma a atender as boas práticas de mercado, tendo ainda uma rota de callback para facilitar a integração. O serviço oferecido é Serverless.

***

![Arquitetura](https://raw.githubusercontent.com/alphasistemas/aPIDoc/main/images/APIs.drawio.svg)

***

## **Configuração de AlphaInd e PDV**

Para que a API funcione corretamente, em conjunto com o AlphaInd e PDV, é necessário que o usuário confiugere o *config.ini* corretamente dos dois sistemas. As configurações que devem ser usadas estão descritas abaixo:

```env
API={URL da API}

APIPublish=/subscription/publication

APISignIn=/auth/signIn

DuracaoToken={Tempo de duracao do token de autenticação em milisegundos, deve estar conforme as configurações da API, ou adicione s para segundos,m para minutos,h para horas,d para dias. O default da API é 15m}
```

Exemplo:

```env
API=http://api-alpha.alphasystemas.com.br

APIPublish=/subscription/publication

APISignIn=/auth/signIn

DuracaoToken=15m
```

## **Swagger**

A API foi Documentada utilizando o Swagger, um framework de documentação de APIs.

O Swagger, além de mostrar os endpoints, permite a realização de exemplos de testes, retornando as responses associadas ao http status code.

Pode-se acessar a documentação a partir deste link: [Documentação](/doc)

OBS: Caso tenha problema com CORS, verifique se o Swagger está sendo acessado via https. E caso o erro persista utilize o [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=en) para habilitar o CORS pelo Chrome.

## **Serviços**

| Serviço           | Porta Default | BackEnd | FrontEnd |   Produto    |
| ----------------- | ------------- | ------- | -------- | ------------ |
| CatalogFront      | 4000          |    ✖    |    🗸    |   CATÁLOGO   |
| Auth              | 3001          |    🗸    |    ✖    | API/CATÁLOGO |
| Product           | 3002          |    🗸    |    ✖    | API/CATÁLOGO |
| Sale              | 3003          |    🗸    |    ✖    | API/CATÁLOGO |
| User              | 3004          |    🗸    |    ✖    | API/CATÁLOGO |
| Subscription      | 3005          |    🗸    |    ✖    | API/CATÁLOGO |
| Settings          | 3006          |    🗸    |    ✖    | API/CATÁLOGO |
| OnSale            | 3007          |    🗸    |    ✖    | API/CATÁLOGO |
| LegacyAuth        | 3008          |    🗸    |    ✖    |   CATÁLOGO   |
| Catalog           | 3009          |    🗸    |    ✖    |   CATÁLOGO   |
| Email             | 2001          |    🗸    |    ✖    |      ✖      |
| InstanceManager   | 1001          |    🗸    |    ✖    |      ✖      |

### **Necessitam de SEED**

- Catalog
- Auth

## **Configurações de Acesso**

Para usar esta API, é necessário que o usuário esteja autenticado. Para isso, cria-se uma nova conta a partir da rota /auth/singUp ou utiliza-se um usuário administrador provido pela infra. Conseguinte, é necessário que o usuário se autentique pela rota /auth/signIn, que retornará um token de autenticação. Em cada rota da API o token será solicitado como bearer token. O usuário precisará se autenticar novamente toda vez que vencer o prazo de autenticação predefinido. A API só funcionará enquanto o usuário estiver usando um token. O tempo de vencimento do token é definido no Config.ini de acordo com o cliente.

***

## **Variáveis de ambiente**

As variáveis de ambiente usadas no sistema estão da seguinte forma.

OBS.:

- Para mais informações sobre o jwt/mauth acesse: [jwt](https://github.com/auth0/node-jsonwebtoken/blob/master/README.md#Algorithms%20supported)

| Serviço(S)                                                        | Nome da Variável de Ambiente    | Descrição                                    | Valor de Exemplo                                                    | Secret | Obrigatório | Produção |
| ----------------------------------------------------------------- | ------------------------------- | -------------------------------------------- | --------------------------------------------------------------------| ------ | ----------- | -------- |
| ALL BACKEND | ALLOWED_ORIGIN                  | Origins Permitidas                           | *                                                                   |   ✖    |     ✖      |    🗸    |
| ALL BACKEND | ALLOWED_METHODS                 | Métodos Permitidos                           | GET,HEAD,PUT,PATCH,POST,DELETE                                      |   ✖    |     ✖      |    🗸    |
| ALL BACKEND | ALLOWED_PREFLIGHT_CONTINUE      | Preflight Continue                           | true                                                                |   ✖    |     ✖      |    🗸    |
| ALL BACKEND | ALLOWED_OPTIONS_SUCCESS_STATUS  | Codigo de sucesso de Options                 | 204                                                                 |   ✖    |     ✖      |    🗸    |
| ALL BACKEND | CORS_ENABLED                    | CORS Habilitado                              | true                                                                |   ✖    |     ✖      |    🗸    |
| ALL BACKEND | LIMIT_WINDOW_MS                 | Tamanho da janela de limite de requisições                                          | 10000                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | LIMIT_MAX                       | Numero limite de requisições por janela                                         | 15                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_URI | String de Conexão de Ambos os DB (Mongo/MSSQL) | mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false  | 🗸 |     🗸      |   🗸     |
| ALL BACKEND | DATABASE_HOST                      | URL de Ambos os DB (Mongo/MSSQL)                            | mongo.sadfasdf.mongodb.net                                          |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_PORT                      | Porta de Ambos os DB (Mongo/MSSQL)                            | 14333                                          |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_USER                      |  Usuário de Ambos os DB (Mongo/MSSQL)                       | admin                                                            |   🗸    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_PASSWORD                  | Senha de Ambos os DB (Mongo/MSSQL)                       | password                                                            |   🗸    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_NAME            | Nome de Ambos os DB (Mongo/MSSQL)                   | write                                                               |   🗸    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_OPTIONS                   | Opções de configuração de ambos os DB (Mongo/MSSQL)                         | retryWrites=true&w=majority                                         |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_CONNECTION_TYPE           | Tipo de Conexão de Ambos os DB (Mongo/MSSQL)                | mongodb+srv                                                         |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_DISABLED                  | Desabilita os banco de dados (Mongo/MSSQL)                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_SSL                  | Configurações de SSL dos banco de dados (Mongo/MSSQL)                                          | false                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_ENCRYPTION_DISABLED                  | Desabilita criptografia de conexão dos banco de dados (Mongo/MSSQL)                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND                                                           | DATABASE_CONNECTION_TIMEOUT        | Timeout de conexão de ambos os DB em MS (Mongo/MSSQL)                                  | 60000                                                               |   ✖    |     🗸      |    🗸    |
| ALL BACKEND                                                           | DATABASE_REQUEST_TIMEOUT           |Timeout de requisição de ambos os DB em MS (Mongo/MSSQL)                                  | 60000                                                               |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_WRITE_URI | String de Conexão do DB de Escrita (Mongo/MSSQL) | mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false  | 🗸 |     🗸      |   🗸     |
| ALL BACKEND | DATABASE_WRITE_HOST                      | URL do DB de Escrita (Mongo/MSSQL)                            | mongo.sadfasdf.mongodb.net                                          |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_WRITE_PORT                      | Porta do DB de Escrita (Mongo/MSSQL)                            | 14333                                          |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_WRITE_USER                      |  Usuário do DB de Escrita (Mongo/MSSQL)                       | admin                                                            |   🗸    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_WRITE_PASSWORD                  | Senha do DB de Escrita (Mongo/MSSQL)                       | password                                                            |   🗸    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_WRITE_NAME            | Nome do DB de Escrita (Mongo/MSSQL)                   | write                                                               |   🗸    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_WRITE_OPTIONS                   | Opções de configuração do DB de Escrita (Mongo/MSSQL)                         | retryWrites=true&w=majority                                         |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_WRITE_CONNECTION_TYPE           | Tipo de Conexão do DB de Escrita (Mongo/MSSQL)                | mongodb+srv                                                         |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_WRITE_DISABLED                  | Desabilita o banco de dados de Escrita (Mongo/MSSQL)                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_WRITE_SSL                  | Configurações de SSL do banco de dados de Escrita (Mongo/MSSQL)                                          | false                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_WRITE_ENCRYPTION_DISABLED                  | Desabilita criptografia de conexão do banco de dados de Escrita (Mongo/MSSQL)                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND                                                           | DATABASE_WRITE_CONNECTION_TIMEOUT        | Timeout de conexão do DB de Escrita em MS (Mongo/MSSQL)                                  | 60000                                                               |   ✖    |     🗸      |    🗸    |
| ALL BACKEND                                                           | DATABASE_WRITE_REQUEST_TIMEOUT           |Timeout de requisição do DB de Escrita em MS (Mongo/MSSQL)                                  | 60000                                                               |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_READ_URI | String de Conexão do DB de Leitura (Mongo/MSSQL) | mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false  | 🗸 |     🗸      |   🗸     |
| ALL BACKEND | DATABASE_READ_HOST                      | URL do DB de Leitura (Mongo/MSSQL)                            | mongo.sadfasdf.mongodb.net                                          |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_READ_PORT                      | Porta do DB de Leitura (Mongo/MSSQL)                            | 14333                                          |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_READ_USER                      |  Usuário do DB de Leitura (Mongo/MSSQL)                       | admin                                                            |   🗸    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_READ_PASSWORD                  | Senha do DB de Leitura (Mongo/MSSQL)                       | password                                                            |   🗸    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_READ_NAME            | Nome do DB de Leitura (Mongo/MSSQL)                   | read                                                               |   🗸    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_READ_OPTIONS                   | Opções de configuração do DB de Leitura (Mongo/MSSQL)                         | retryWrites=true&w=majority                                         |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_READ_CONNECTION_TYPE           | Tipo de Conexão do DB de Leitura (Mongo/MSSQL)                | mongodb+srv                                                         |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_READ_DISABLED                  | Desabilita o banco de dados de Leitura (Mongo/MSSQL)                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_READ_SSL                  | Configurações de SSL do banco de dados de Leitura (Mongo/MSSQL)                                          | false                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND | DATABASE_READ_ENCRYPTION_DISABLED                  | Desabilita criptografia de conexão do banco de dados de Leitura (Mongo/MSSQL)                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| ALL BACKEND                                                           | DATABASE_READ_CONNECTION_TIMEOUT        | Timeout de conexão do DB de Leitura em MS (Mongo/MSSQL)                                  | 60000                                                               |   ✖    |     🗸      |    🗸    |
| ALL BACKEND                                                           | DATABASE_READ_REQUEST_TIMEOUT           |Timeout de requisição do DB de Leitura em MS (Mongo/MSSQL)                                  | 60000                                                               |   ✖    |     🗸      |    🗸    |
| ALL      | SERVICE_NAME                    | Nome do Serviço                              | AUTH                                                                |   ✖    |     🗸      |    🗸    |
| ALL      | INSTANCE                        | Nome da Instancia                            | auth                                                                |   ✖    |     🗸      |    🗸    |
| ALL                    | PORT                            | Porta onde o serviço vai escutar             | 3000                                                                |   ✖    |     ✖      |    🗸    |
| ALL                           | USE_STEP                        | Step para uso na Vercel e sistemas serveless | true                                                                |   ✖    |     🗸      |    🗸    |
| ALL                           | STEP_SIZE                       | Tamanho do Step em ms                        | 1000                                                                |   ✖    |     🗸      |    🗸    |
| ALL                    | JWT_PUBLIC_KEY                  | JWT RSA PUBLIC KEY                           | -                                                                   |   🗸    |     🗸      |    🗸    |
| AUTH                    | JWT_PRIVATE_KEY                  | JWT RSA PRIVATE KEY                           | -                                                                   |   🗸    |     🗸      |    🗸    |
| AUTH                    | MAUTH_SALT_ROUNDS                  | Rounds de Salt usado para criptografia da Autenticação                           | 10                                                                 |   ✖    |     ✖      |    🗸    |
| AUTH                    | MAUTH_SIGN_ALGORITHM                  | Algorítmo usado para criptografia da Autenticação                           | RS256                                                                   |   ✖    |     ✖      |    🗸    |
| AUTH                    | MAUTH_SIGN_EXPIRES_IN                  | Tempo de expiração do Token da Autenticação                           | 15m                                                                   |   ✖    |     ✖      |    🗸    |
| AUTH                    | MAUTH_SERVICE_ALGORITHM                  | Algorítmo usado para criptografia da Autenticação de Serviço                           | RS512                                                                   |   ✖    |     ✖      |    🗸    |
| AUTH                    | MAUTH_SERVICE_EXPIRES_IN                  | Tempo de expiração do Token da Autenticação de Serviço                           | 15d                                                                   |   ✖    |     ✖      |    🗸    |
| AUTH                                | AUTH_DEFAULT_PERMISSIONS        | Permissões default para esse serviço         | '{""all"": [""all""]}'                                              |   ✖    |     ✖      |    🗸    |
| AUTH                                | DEFAULT_PERMISSIONS             | Permisões default para cada serviço          | '{""all"": {""all"": [""all""]}}'                                   |   ✖    |     ✖      |    🗸    |
| AUTH                                                              | IS_FAKE                         | SE É DE TESTE                                         | true                                                                |   ✖    |     🗸      |    ✖    |
| AUTH                                                              | MAIL_HOST                       | Host de Email                                | <http://api-ecomm.alphasystemas.com.br/email>                         |   ✖    |     🗸      |    ✖    |
| AUTH                                                              | MAIL_KEY                        | Key de Email                                 | -                                                                   |   ✖    |     🗸      |    ✖    |
| AUTH                                                              | KEY_PATH                        | USA CAMINHO DA KEY                                          | true                                                                |   ✖    |     🗸      |    🗸    |
| AUTH, EMAIL                                                       | IS_FAKE_MAIL                    | USA SERVIDOR DE EMAIL FALSO                                         | true                                                                |   ✖    |     🗸      |    ✖    |
| AUTH, EMAIL                                                       | MAIL_PATH                       | Endpoint do Email                            | /api/email                                                          |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_USER                       | Usuário da Caixa de Email                    | user@KingHost.com.br                                                |   🗸    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_PASSWORD                   | Senha da Caixa de Email                      | user_password                                                       |   🗸    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE                    | Serviço que hospeda a Caixa de Email         | KingHost                                                            |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE_POOL               | Se o serviço de Email vai usar Pool          | true                                                                |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE_HOST               | Host do Serviço que hospeda a Caixa de Email | <http://smtpi.kinghost.net/>                                          |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE_SECURE             | Se Aconexão é segura com a Caixa de Email    | true                                                                |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE_TLS                | Configuração de TLS da Caixa de Email        | '{ "ciphers":"SSLv3", "rejectUnauthorized": false }'                |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SERVICE_PORT               | Porta da Conexão                             | 465                                                                 |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_SUFIX                      | Sufixo do Email                              | @alphasystemas.com.br                                               |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_TIMEOUT                    | Timeout do Email                             | 100000                                                              |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | MAIL_JITTER                     | Jitter do Email                              | 10000                                                               |   ✖    |     🗸      |    ✖    |
| EMAIL                                                             | LANGUAGE                        | Língua dos Emails                            | pt-br                                                               |   ✖    |     ✖      |    🗸    |
| SALE                                                              | AUTH_HOST                       | Host de Autenticação                         | <http://api-ecomm.alphasystemas.com.br/auth>                          |   ✖    |     🗸      |    🗸    |
| SALE                                                              | PRODUCT_HOST                    | Host de Produto                              | <http://api-ecomm.alphasystemas.com.br/product>                       |   ✖    |     🗸      |    🗸    |
| SALE                                                              | SERVICE_KEY                     | Senha do Serviço                             | password                                                            |   🗸    |     🗸      |    🗸    |
| SALE                                                              | PRICE_TABLE                     | Tabela de preço                              | 02                                                                  |   🗸    |     🗸      |    🗸    |
| SALE                                            | STORE_ID                        | Id da Loja                                   | 1                                                                   |   ✖    |     🗸      |    🗸    |
| USER                                                              | IBGE_URL_PREFIX                 | URL base para a API do IBGE                  | <http://servicodados.ibge.gov.br/api/v1/localidades/estados/>         |   🗸    |     ✖      |    🗸    |
| USER                                                              | IBGE_URL_SUFFIX                 | SUFIXO DA URL base para a API do IBGE        | /municipios                                                         |   🗸    |     ✖      |    🗸    |
| SUBSCRIPTION                                                      | DEFAULT_HOST                    | route.host default                                         | <http://algum.com.br>                                                                 |   🗸    |     🗸      |    🗸    |
| CATALOGFRONT                                                           | HOST                            | URL BASE DA API                                          | <http://user-alphasystemas.vercel.app/api>                                                                |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SIGN_IN                         | ROTA OU URL PARA SIGN IN                                           | /user/client                            |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SIGN_IN_SELLER                  | ROTA OU URL PARA SIGN IN DE VENDEDOR                                          | /user/employee                          |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SIGN_IN_LEGACY                  | ROTA OU URL PARA SIGN IN DO ALPHA IND                                          | legacy-auth-alphasystemas.vercel.app/api/signIn                     |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SIGN_UP                         | ROTA OU URL PARA SIGN UP                                          | <http://user-alphasystemas.vercel.app/api/client>                            |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | CATALOG_CONFIG                  | ROTA OU URL PARA CONFIGURAÇÃO DO CATÁLOGO                                          | <http://catalog-alphasystemas.vercel.app/api/config>                         |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | CATALOG_GROUP                   | ROTA OU URL PARA GRUPOS DO CATÁLOGO                                          | <http://catalog-alphasystemas.vercel.app/api/group>                          |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | CATALOG_THEME                   | ROTA OU URL PARA CONFIGURAÇÃO DE TEMAS DO CATÁLOGO                                          | <http://catalog-alphasystemas.vercel.app/api/theme>                          |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | CATALOG_PRODUCT                 | ROTA OU URL PARA CONFIGURAÇÃO DE PRODUTOS DO CATÁLOGO                                          | <http://catalog-alphasystemas.vercel.app/api/product>                        |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | PRODUCT_PRODUCT                 | ROTA OU URL PARA PRODUTOS                                         | <https://api-alpha.alphasystemas.com.br/product/product>              |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SALE_ESTIMATE                   | ROTA OU URL PARA ORÇAMENTO                                          | <https://api-alpha.alphasystemas.com.br/sale/estimate>                |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SALE_PAYMENT_METHOD             | ROTA OU URL PARA FORMAS DE PAGAMENTO                                          | <https://api-alpha.alphasystemas.com.br/sale/payment/method>          |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | SALE_PAYMENT_CONDITION          | ROTA OU URL PARA CONDIÇÕES DE PAGAMENTO                                          | <https://api-alpha.alphasystemas.com.br/sale/payment/condition>       |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | POSTAL_CODE_ADDRESS             | URL PARA API DE BUSCA DE ENDEREÇO POR CEP                                         | <http://viacep.com.br/ws/>                                                   |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | PIC_AWS_ACCESS_KEY_ID           | AWS ACCESS KEY ID DO BUCKET DE IMAGENS                                          | access_key_id                                                       |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | PIC_AWS_BUCKET                  | BUCKET DE IMAGENS DA AWS                                         | 'alphacatalogo'                                                     |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | PIC_AWS_BUCKET_DIR              | DIRETÓRIO DO BUCKET DE IMAGENS DA AWS                                          | 'ALPHA'                                                             |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | PIC_AWS_BUCKET_REGION           | REGIÃO DO BUCKET DE IMAGENS DA AWS                                          | 'us-east-2'                                                         |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | ROLE_ID                         | ID DE CARGO DO VENDEDOR                                          | 0                                                                   |   ✖    |     🗸      |    🗸    |
| CATALOGFRONT                                                      | FILTER_SALES                    | FILTRA VENDAS POR VENDEDOR                                          | true                                                                |   ✖    |     🗸      |    🗸    |
|CATALOGFRONT                                                      | NODE_TLS_REJECT_UNAUTHORIZED                    | REJEITA CONEXÃO SEM TSL                                          | 0                                                                |   ✖    |     🗸      |    🗸    |
|

### **AUTH**

#### AUTH_DEFAULT_PERMISSIONS

JSON com as permissões padrões para o AUTH no formato:

```json
{
    <endpoint: signIn, signUp, ..., all>: [<permission: create, read, update, delete, all>],
        ...
}
```

exemplo:

```json
{
    "all": ["create", "read"]
}
```

#### DEFAULT_PERMISSIONS

JSON com as permissões padrões para cada serviço no formato:

```json
{
    <service: product, sale, ..., all>: {
        <endpoint: invoice, bill, ..., all>: [<permission: create, read, update, delete, all>],
        ...
    },
    ...
}
```

```json
{
    "product": {
        "product": ["all"]
    },
    "sale": {
        "invlice": ["all"],
        "bill": ["read"]
    }
}
```
