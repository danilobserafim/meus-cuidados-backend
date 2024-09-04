import { Request, Response } from "express";
import { glicoseDTO } from "../../DTOs/glicoseDTO";
import CreateGlicoseUseCase from "./CreateGlicoseUseCase";


export default class CreateGlicoseController{
    async handle(req:Request, res:Response){
        const data:glicoseDTO = req.body
        const createGlicoseUseCase = new CreateGlicoseUseCase()
        const response = await createGlicoseUseCase.execute(data)
        return res.send(response)
    }
}