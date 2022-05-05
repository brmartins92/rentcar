import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/Interfaces/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string,
    email: string
  };
  token: string;
}

@injectable()

class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect");
    }

    const token = sign( 
      { user: "infoUser" }, 
      "202cb962ac59075b964b07152d234b70",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return {
      user,
      token
    }
  }
}

export { AuthenticateUserUseCase };