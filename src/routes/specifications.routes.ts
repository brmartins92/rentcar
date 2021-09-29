import { Router } from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecification = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecification.execute({ description, name });
  return response.status(201).send();
});

specificationsRoutes.get("/", (request, response) => {
  const all = specificationsRepository.list();
  return response.status(201).json(all);
});

export { specificationsRoutes };
