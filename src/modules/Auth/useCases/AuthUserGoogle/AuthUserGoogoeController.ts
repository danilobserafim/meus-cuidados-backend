import { Request, Response } from "express";
import { AuthUserGoogoeUseCase } from "./AuthUserGoogoeUseCase";
import { userAuthDTO } from "../../autsDTO/userAuthDTO";

export class AuthClientGoogleController{
    async handle(req:Request, res:Response){
        const user:userAuthDTO = req.body
        const authUserGoogleController = new AuthUserGoogoeUseCase()
        const response = await authUserGoogleController.execute(user)
        return res.send(response)
    }
}
