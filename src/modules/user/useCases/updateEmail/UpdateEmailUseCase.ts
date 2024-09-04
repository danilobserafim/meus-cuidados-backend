import { DataBaseError, UnfindedError } from "../../../../errors/Erros";
import prisma from "../../../../prisma/index";
import { userDTO } from "../../DTOs/userDTO";

export default class UpdateEmailUseCase {
    async execute({ email, id }:any) {
        try {
            const alreadyExist = await prisma.user.findFirst({where:{id}})
            if (!alreadyExist) {
                throw new UnfindedError()
            }
            const updatedUser = await prisma.user.update({where:{id}, data: {email}})
            return updatedUser
        } catch (error) {
            throw new DataBaseError()
        }
    }
}