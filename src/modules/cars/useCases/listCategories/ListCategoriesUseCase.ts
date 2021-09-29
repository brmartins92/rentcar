import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";
import { Category } from "../../model/Category";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoryUseCase };
