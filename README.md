# Projeto Store Manager

A aplicação desenvolvida é uma API RESTful para gerenciamento de uma loja, construída utilizando tecnologias como JavaScript, Node.js, Express e MySQL. O objetivo da aplicação é permitir o controle completo de produtos e vendas de uma loja, oferecendo endpoints para criação, leitura, atualização e exclusão de registros no banco de dados.

A API permite ao usuário listar todos os produtos cadastrados ou buscar um produto específico por ID. Também é possível cadastrar novos produtos, atualizar informações de produtos existentes e removê-los do sistema. No contexto de vendas, a aplicação permite listar todas as vendas realizadas ou consultar uma venda específica por ID, além de registrar novas vendas associando produtos e quantidades.

Em termos de implementação, a aplicação segue a arquitetura MSC (Model-Service-Controller), separando as responsabilidades em camadas bem definidas. A camada de Model realiza as queries diretamente no banco de dados MySQL. A camada de Service contém as regras de negócio e validações dos dados recebidos. A camada de Controller é responsável por receber as requisições HTTP, acionar os serviços correspondentes e retornar as respostas adequadas. O Docker foi utilizado para orquestrar o ambiente de desenvolvimento, garantindo que o banco de dados MySQL estivesse disponível de forma padronizada.

Com essa estrutura, a aplicação se destaca pela organização do código e pela separabilidade das responsabilidades, facilitando a manutenção e a escalabilidade da solução.

## Neste projeto, atestei que sou capaz de:

- Desenvolver uma API RESTful utilizando Node.js e Express.
- Estruturar uma aplicação seguindo a arquitetura MSC (Model-Service-Controller).
- Realizar operações de CRUD completo (Create, Read, Update, Delete) em um banco de dados MySQL.
- Escrever queries SQL para consultas com `JOIN` entre tabelas relacionadas.
- Implementar middlewares de validação para garantir a integridade dos dados recebidos nas requisições.
- Tratar erros de forma centralizada, retornando status HTTP adequados para cada situação.
- Utilizar variáveis de ambiente para configuração de conexão com o banco de dados.
- Escrever testes unitários para as camadas Model, Service e Controller utilizando Mocha, Chai e Sinon.

## O que já veio pronto da Trybe

O `docker-compose.yml` e o `Dockerfile` da aplicação já estavam configurados, assim como os scripts SQL localizados na pasta `sql/`, contendo a migration (`01-migration.sql`) que cria o banco de dados `StoreManager` com as tabelas `products`, `sales` e `sales_products`, e o seed (`02-seed.sql`) que popula o banco com dados iniciais.

Os arquivos de configuração de testes também foram fornecidos pela Trybe: `.mocharc.json` (configuração do Mocha), `.nycrc.json` (configuração de cobertura de código com NYC) e `.stryker.conf.json` (configuração de testes de mutação com Stryker). O ESLint foi configurado com o padrão `eslint-config-trybe-backend`. Os arquivos de mock utilizados nos testes (`tests/mocks/products.mocks.js` e `tests/mocks/sales.mock.js`) e a estrutura de diretórios dos testes unitários também foram entregues prontos. Todos os testes foram escritos pela Trybe, cabendo a mim implementar a aplicação de forma que todos fossem aprovados.

O endpoint `GET /` presente no `app.js` — com o comentário "não remova esse endpoint, é para o avaliador funcionar" — também foi fornecido pela Trybe para uso do avaliador automático.

---

Projeto desenvolvido durante a Formação em Desenvolvimento Web Full-Stack da Trybe. Todos os arquivos de configuração, banco de dados e estrutura de testes são de autoria da Trybe.
