# Store Manager Project

The application developed is a RESTful API for store management, built using JavaScript, Node.js, Express, and MySQL. The goal of the application is to enable full control over a store's products and sales, providing endpoints for creating, reading, updating, and deleting records in the database.

The API allows users to list all registered products or look up a specific product by ID. It is also possible to add new products, update existing product information, and remove them from the system. In the context of sales, the application allows listing all completed sales or querying a specific sale by ID, as well as recording new sales by associating products and quantities.

In terms of implementation, the application follows the MSC (Model-Service-Controller) architecture, separating responsibilities into well-defined layers. The Model layer performs queries directly on the MySQL database. The Service layer contains the business rules and data validation logic. The Controller layer is responsible for receiving HTTP requests, triggering the appropriate services, and returning the correct responses. Docker was used to orchestrate the development environment, ensuring the MySQL database was available in a standardized way.

With this structure, the application stands out for its code organization and clear separation of concerns, making it easier to maintain and scale.

## In this project, I demonstrated that I am able to:

- Develop a RESTful API using Node.js and Express.
- Structure an application following the MSC (Model-Service-Controller) architecture.
- Perform full CRUD operations (Create, Read, Update, Delete) on a MySQL database.
- Write SQL queries for multi-table lookups using `JOIN`.
- Implement validation middlewares to ensure data integrity on incoming requests.
- Handle errors centrally, returning appropriate HTTP status codes for each scenario.
- Use environment variables for database connection configuration.
- Write unit tests for the Model, Service, and Controller layers using Mocha, Chai, and Sinon.

## What was already provided by Trybe

The `docker-compose.yml` and the application's `Dockerfile` were already configured, as well as the SQL scripts located in the `sql/` folder — including the migration (`01-migration.sql`) that creates the `StoreManager` database with the `products`, `sales`, and `sales_products` tables, and the seed (`02-seed.sql`) that populates the database with initial data.

The test configuration files were also provided by Trybe: `.mocharc.json` (Mocha configuration), `.nycrc.json` (code coverage configuration with NYC), and `.stryker.conf.json` (mutation testing configuration with Stryker). ESLint was configured using the `eslint-config-trybe-backend` standard. The mock files used in the unit tests (`tests/mocks/products.mocks.js` and `tests/mocks/sales.mock.js`) and the overall test directory structure were also delivered ready to use. All tests were written by Trybe — my responsibility was to implement the application so that all of them would pass.

The `GET /` endpoint in `app.js` — with the comment "don't remove this endpoint, it's needed for the evaluator to work" — was also provided by Trybe for use by the automated grader.

---

Project developed during the Full-Stack Web Development program at Trybe. All configuration files, database scripts, and test structure are authored by Trybe.
