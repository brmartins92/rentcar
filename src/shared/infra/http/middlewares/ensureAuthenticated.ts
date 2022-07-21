import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";
import { UserRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";

interface IpayLoad {
  sub: string;
  user_id: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  try {
    const [ , token ] = authHeader.split(" ");
    const {sub: user_id } = verify(token, "202cb962ac59075b964b07152d234b70") as IpayLoad;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User is not exist!",401)
    }

    request.user = {
      id: user_id
    }


    next();
  } catch (error) {
    throw new AppError('Invalid token');
  }

}