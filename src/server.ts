import express, { response } from "express";
import swaggerUI from "swagger-ui-express";

import "./database";
import "reflect-metadata";
import "./shared/container";

import { router } from "./routes/index";

import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(3336, () => console.log("Rodando na 3336"));
