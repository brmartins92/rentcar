import { Response, Request } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

import { container } from "tsyringe";
class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    try {
      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase
      );
      await createSpecificationUseCase.execute({ description, name });
      return response.status(201).send();
    } catch (error) {
      console.log(error);
    }
    
  }
}

export { CreateSpecificationController };
