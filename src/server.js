const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3333, () => console.log("Server is running in http://localhost:3333..."));
