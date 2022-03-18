import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/Interfaces/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { hash } from "bcryptjs"; 
@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ){}

  async execute({name,email,password,driver_license}: ICreateUserDTO): Promise<void>{
    
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,email,
      password: passwordHash,
      driver_license
    })
  }
}

export { CreateUserUseCase };