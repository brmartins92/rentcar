import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IpayLoad {
  sub: string;
  user_id: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing")
  }

  try {
    const [ , token ] = authHeader.split(" ");
    const {sub: user_id } = verify(token, "202cb962ac59075b964b07152d234b70") as IpayLoad;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new Error("User is not exist!")
    }

    next();
  } catch (error) {
    throw new Error('Invalid token');
  }

}