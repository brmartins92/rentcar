import { getRepository, Repository  } from "typeorm";
import { IUserRepository } from "../Interfaces/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({name, email, driver_license, password}: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
    })
    await this.repository.save(user);
  }
}

export { UserRepository };
