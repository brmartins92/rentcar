import { Specification } from "../../entities/Specification";

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  findByName(name: string): Promise<Specification | undefined>;
  //list(): Specification[];
  create({ name, description }: ISpecificationDTO): Promise<void>;
}

export { ISpecificationRepository, ISpecificationDTO };
