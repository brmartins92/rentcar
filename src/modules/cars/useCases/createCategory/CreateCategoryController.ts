import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { name, description } = request.body;
   try {
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    await createCategoryUseCase.execute({ description, name });
    return response.status(201).send();
   } catch (error) {
     console.log(error);
   }
   
  }
}

export { CreateCategoryController };
