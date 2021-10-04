import {
  ISpecificationDTO,
  ISpecificationRepository,
} from "../interfaces/ISpecificationsRepository";
import { Specification } from "../../model/Specification";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }

  list(): Specification[] {
    return this.specifications;
  }

  create({ name, description }: ISpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
