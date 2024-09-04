import { DataBaseError } from "../../../../errors/Erros";
import prisma from "../../../../prisma";
import { glicoseDTO } from "../../DTOs/glicoseDTO";

export default class CreateGlicoseUseCase {
    async execute(data: glicoseDTO): Promise<glicoseDTO> {
        try {
            const response: glicoseDTO | any = await prisma.glicose.create({ data })
            return response
        } catch (error) {
            throw new DataBaseError()
        }
    }
}