import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";

const specificationsRoutes = Router();
//const specificationsRepository = new SpecificationsRepository();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", (request, response) => {
  //const all = specificationsRepository.list();
  //return response.status(201).json(all);
});

export { specificationsRoutes };
