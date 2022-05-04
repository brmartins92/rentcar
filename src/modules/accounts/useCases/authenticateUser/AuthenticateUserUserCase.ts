import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/Interfaces/IUsersRepository";
import { compare } from "bcryptjs";

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({ email, password }: IRequest) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect");
    }
  }
}

export { AuthenticateUserUseCase };