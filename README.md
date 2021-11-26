# Documentação da API

## Variáveis de ambiente
| Serviço(S)                                     | Nome da Variável de Ambiente         | Descrição                                    | Valor de Exemplo                                | Secret | Obrigatório |
| ---------------------------------------------- | ------------------------------------ | -------------------------------------------- | ----------------------------------------------- | ------ | ----------- |
| AUTH                                           | AUTH_DEFAULT_PERMISSIONS             | Permissões default para esse serviço         | "'{""all"": [""all""]}'"                        |  ✖     |  ✖         |
| AUTH                                           | DEFAULT_PERMISSIONS                  | Permisões default para cada serviço          | "'{""all"": {""all"": [""all""]}}'"             |  ✖     |  ✖         |
| AUTH                                           | MAIL_HOST                            | Host de Email                                | "http://api-ecomm.alphasystemas.com.br/email"   |  ✖     |  🗸         |
| AUTH                                           | JWT_PRIVATE_KEY                      | JWT RSA PRIVATE KEY                          | -                                               |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | JWT_PUBLIC_KEY                       | JWT RSA PUBLIC KEY                           | -                                               |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | ALLOWED_HOSTS                        | Hosts Permitidos                             | '*'                                             |  ✖     |  ✖         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | SERVICE_NAME                         | Nome do Serviço                              | AUTH                                            |  ✖     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | INSTANCE                             | Nome da Instancia                            | auth                                            |  ✖     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | PORT                                 | Porta onde o serviço vai escutar             | 3000                                            |  ✖     |  ✖         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_HOST                           | Mongo Server URL                             | -                                               |  ✖     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_USER                           | Mongo Server Password                        | -                                               |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_PASSWORD                       | Mongo Server Password                        | -                                               |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_WRITE_DATABASE                 | Mongo Server Write DB Name                   | -                                               |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_READ_DATABASE                  | Mongo Server Read DB Name                    | -                                               |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_OPTIONS                        | Mongo Server Options                         | -                                               |  🗸     |  🗸         |
| AUTH, EMAIL, PRODUCT, SALE, USER, SUBSCRIPTION | MONGO_CONNECTION_TYPE                | Mongo Server Connection Type                 | mongodb+srv                                     |  ✖     |  🗸         |
| EMAIL                                          | MAIL_USER                            | Usuário da Caixa de Email                    | user@alphasystemas.com.br                       |  ✖     |  🗸         |
| EMAIL                                          | MAIL_PASSWORD                        | Senha da Caixa de Email                      | user_password                                   |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE                         | Serviço que hospeda a Caixa de Email         | KingHost                                        |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE_POOL                    | Se o serviço de Email vai usar Pool          | 'true'                                          |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE_HOST                    | Host do Serviço que hospeda a Caixa de Email | http://smtpi.kinghost.net/                      |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE_SECURE                  | Se Aconexão é segura com a Caixa de Email    | 'true'                                          |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SERVICE_PORT                    | Porta da Conexão                             | '465'                                           |  ✖     |  🗸         |
| EMAIL                                          | MAIL_SUFIX                           | Sufixo do Email                              | '@alphasystemas.com.br'                         |  ✖     |  🗸         |
| EMAIL                                          | MAIL_TIMEOUT                         | Timeout do Email                             | '100000'                                        |  ✖     |  🗸         |
| EMAIL                                          | MAIL_JITTER                          | Jitter do Email                              | '10000'                                         |  ✖     |  🗸         |
| EMAIL                                          | LANGUAGE                             | Língua dos Emails                            | pt-br                                           |  ✖     |  ✖         |
| PRODUCT, SALE                                  | STORE_ID                             | Id da Loja                                   | '1'                                             |  ✖     |  🗸         |
| SALE                                           | AUTH_HOST                            | Host de Autenticação                         | "http://api-ecomm.alphasystemas.com.br/auth"    |  ✖     |  🗸         |
| SALE                                           | PRODUCT_HOST                         | Host de Produto                              | "http://api-ecomm.alphasystemas.com.br/product" |  ✖     |  🗸         |
| {GITHUB.SECRET}                                | SSH_PRIVATE_KEY                      |                                              | ssh_ed25519.key/ssh_ed25519.key.pub             |  ✖     |  🗸         |