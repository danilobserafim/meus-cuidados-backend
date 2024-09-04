import { DataBaseError, UnfindedError } from "../../../../errors/Erros";
import  prisma  from "../../../../prisma";
import { userAuthDTO } from "../../autsDTO/userAuthDTO";
import Jwt from "jsonwebtoken";

export class AuthUserGoogoeUseCase {
    async execute({ email, name, urlImagem: url_image }: userAuthDTO) {
        const secret = process.env.JWT_KEY ?? ""
        try {
            const authUserGoogoeUseCase: userAuthDTO | null = await prisma.user.findUnique({ where: { email: email }})
            if (authUserGoogoeUseCase) {
                const token = Jwt.sign({ id: authUserGoogoeUseCase.id}, secret)
                authUserGoogoeUseCase.token = token
                return authUserGoogoeUseCase
            } else {
                const userCreated: userAuthDTO = await prisma.user.create({
                    data: { email, name, urlImagem: url_image },
                    select: { id: true, name: true, email: true, urlImagem: true }
                })
                const token = Jwt.sign({ id: userCreated.id }, secret)
                userCreated.token = token
                return userCreated
            }
        } catch (error) {
            throw new DataBaseError();
        }
    }
}