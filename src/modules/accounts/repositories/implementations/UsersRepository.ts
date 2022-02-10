import { IUserRepository } from "../Interfaces/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UserRepository implements IUserRepository {
  create(data: ICreateUserDTO): Promise<void> {
    throw new Error("method not implemented");
  }
}

export { UserRepository };
