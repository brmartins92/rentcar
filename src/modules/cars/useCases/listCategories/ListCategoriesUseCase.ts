//import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";
import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoryUseCase };
