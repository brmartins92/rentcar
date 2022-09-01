import { getRepository, Repository } from "typeorm";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../../../repositories/interfaces/ISpecificationsRepository";
import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }
  findByIds(ids: string[]): Promise<Specification[]> {
    throw new Error("Method not implemented.");
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

  async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
    return specification;
  }
}

export { SpecificationsRepository };
