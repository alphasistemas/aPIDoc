const express = require("express");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use("/", swaggerUi.serve, swaggerUi.setup("./swagger.json"));

app.listen(3333, () => console.log("Server is running in http://localhost:3333..."));
