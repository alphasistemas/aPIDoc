# Arquitetura das API's

As API's são divididas em microserviços que são responsáveis por uma parte do sistema.
Cada Micro serviço segue uma determinada arquitetura.

Essa arquitetura sempre usa uma arquitetura Base:

![Arquitetura](https://raw.githubusercontent.com/alphasistemas/aPIDoc/main/images/base.svg)

## [BACK API](https://github.com/Judahh/backAPI)

Essa camada é resposável pela comunicação externa com o sistema. É responsável por:
    - Comunicação com o protocolo escolhido seja REST, SOCKET ou outro qualquer.
    - Receber a entrada de dados e padronizar para envio para a próxima camada.
    - Receber o retorno da próxima camada e padronizar os códigos e retornos para a comunicação externa (Incluindo códigos de erros).
Ela é um pacote NPM e pode ser utilizado em qualquer projeto. [BACK API](https://github.com/Judahh/backAPI).

## [FLEXIBLE PERSISTENCE](https://github.com/Judahh/flexiblePersistence)

Essa camada é responsável pela persistência dos dados. É responsável por:
    - Persistir os dados.
    - Efetivar as operações de persistência.
Ela é um pacote NPM e pode ser utilizado em qualquer projeto. [FLEXIBLE PERSISTENCE](https://github.com/Judahh/flexiblePersistence)

## [JOURNALY](https://github.com/Judahh/journaly)

Essa camada é responsável pela comunicação interna. É responsável por:
    - Inversão de dependência entre camadas. Como um Message Broker.
