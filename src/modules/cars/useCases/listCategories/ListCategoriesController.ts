import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listCategoryUseCase.execute();
    return response.status(201).json(all);
  }
}
export { ListCategoriesController };
