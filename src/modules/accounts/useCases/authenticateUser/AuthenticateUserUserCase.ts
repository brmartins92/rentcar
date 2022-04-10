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

  async execute({ email }: IRequest) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect");
    }


  }
}

export { AuthenticateUserUseCase };

function email(email: any) {
  throw new Error("Function not implemented.");
}
