import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { IUserRepository } from "../../repositories/Interfaces/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from "../../../../errors/AppError";
@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ){}

  async execute({name,email,password,driver_license}: ICreateUserDTO): Promise<void>{
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if  (userAlreadyExists) {
      throw new AppError("User already exists", 401);
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,email,
      password: passwordHash,
      driver_license
    })
  }
}

export { CreateUserUseCase };