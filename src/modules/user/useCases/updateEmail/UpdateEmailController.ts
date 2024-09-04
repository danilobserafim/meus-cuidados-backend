import { Request, Response } from "express"
import { userDTO } from "../../DTOs/userDTO"
import UpdateEmailUseCase from "./UpdateEmailUseCase"

export default class UpdateEmailController {
    async handle(req:Request, res:Response){
        const {id, email}:{id:string, email:string} = req.body
        const updateEmailUseCase = new UpdateEmailUseCase()
        const response = await updateEmailUseCase.execute({id, email})
        return res.send(response)
    }
}