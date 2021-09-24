require('dotenv').config()

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = process.env.PORT;

const app = express();

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

try {
    if(!process.env.PORT)
        throw new Error("Host port not found.\nYou must set up a port in env variable!")
    
    app.listen(port, () => console.log("Server is running in http://localhost:" + port));
} catch(error) {
    console.log(error.message);
}

