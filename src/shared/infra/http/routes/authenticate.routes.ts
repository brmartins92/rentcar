import { Router } from "express";
import { AuthenticateUserUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserUserController = new AuthenticateUserUserController();
authenticateRoutes.post("/sessions", authenticateUserUserController.handle);

export { authenticateRoutes };