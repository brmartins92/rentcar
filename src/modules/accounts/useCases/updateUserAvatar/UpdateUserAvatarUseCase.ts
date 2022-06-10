import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/Interfaces/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({ user_id, avatar_file}: IRequest):Promise<void> {
    const user = await this.userRepository.findById(user_id);

    user.avatar = avatar_file;

    await this.userRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase }