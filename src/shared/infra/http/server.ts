import express, { NextFunction, Response, Request } from "express";
import swaggerUI from "swagger-ui-express";
import "express-async-errors"
//import "@shared/infra/typeorm";
import "reflect-metadata";


import "../../container";

import { AppError } from "../../errors/AppError";
import { router } from "./routes/index";
import swaggerFile from "../../../swagger.json";

import createConnection from "@shared/infra/typeorm";
createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal serve error - ${err.message}`,
  })
});

app.listen(3336, () => console.log("Rodando na 3336"));
