import express from "express";
import bodyParser from "body-parser";
import config from "./config.js";
import authMiddleware from "./middleware/auth.js";
import referenceRoute from "./route/reference.js"

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = config.port;
app.listen(port, () => {
  console.log("Listens at 0.0.0.0:" + port);
});

app.use(authMiddleware.checkBasic);

app.get("/references", referenceRoute.get);
