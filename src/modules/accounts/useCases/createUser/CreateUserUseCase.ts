import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/Interfaces/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ){}

  async execute({name,username,email,password,driver_license}: ICreateUserDTO): Promise<void>{
    await this.usersRepository.create({
      name,username,email,password,driver_license
    })

  
  }
}

export { CreateUserUseCase };