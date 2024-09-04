import { Router, Request, Response } from 'express';
import prisma from "../prisma/index";
import UpdateEmailController from '../modules/user/useCases/updateEmail/UpdateEmailController';
import { checkTokenId } from '../middlewares/checkTokenId';


const updateEmailController = new UpdateEmailController
const routeUsers = Router()

routeUsers.get('/', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany({
        include: {
            medicamentos: true,
            glicoses: {
                take:10,
                orderBy:{
                    dataHora:'asc'
                }
            },
            pressoes: {
                orderBy:{
                    dataHora:'asc'
                }
            },
            colesterols: {
                orderBy:{
                    dataHora:'asc'
                }
            },
            frequenciasCardiacas: {
                orderBy:{
                    dataHora:'asc'
                }
            },
            imcs: {
                orderBy:{
                    dataHora:'asc'
                }
            },
            saturacoes: {
                orderBy:{
                    dataHora:'asc'
                }
            },
            temperaturas: {
                orderBy:{
                    dataHora:'asc'
                }
            },
            triglicerideos: {
                orderBy:{
                    dataHora:'asc'
                }
            }
        }
    })
    res.json(users)
})

routeUsers.patch("/email", checkTokenId, updateEmailController.handle)

export default routeUsers 