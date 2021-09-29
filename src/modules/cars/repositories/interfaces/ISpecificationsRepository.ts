import { Specification } from "../model/Specification";

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  findByName(name: string): Specification | undefined;
  list(): Specification[];
  create({name, description}: ISpecificationDTO): void;
}

export { ISpecificationRepository, ISpecificationDTO };