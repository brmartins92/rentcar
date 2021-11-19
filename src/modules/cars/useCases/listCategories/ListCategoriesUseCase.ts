import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoryUseCase };
