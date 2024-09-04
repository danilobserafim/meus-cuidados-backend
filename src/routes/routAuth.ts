import { Request, Router } from "express";
import { AuthClientGoogleController } from "../modules/Auth/useCases/AuthUserGoogle/AuthUserGoogoeController";

const authClienteGoogleController = new AuthClientGoogleController


const routeAuth = Router()


routeAuth.post("/", authClienteGoogleController.handle)

export default routeAuth;