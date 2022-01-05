import { getRepository, Repository } from "typeorm";
import {
  ISpecificationDTO,
  ISpecificationRepository,
} from "../interfaces/ISpecificationsRepository";
import { Specification } from "../../entities/Specification";

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  findByName(name: string): Promise<Specification | undefined> {
    const specification = this.repository.findOne({
      name,
    });

    return specification;
  }

  //list(): Specification[] {
  //return this.specifications;
  // }

  async create({ name, description }: ISpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }
}

export { SpecificationsRepository };
