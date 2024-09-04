import { Router, Request, Response } from 'express';
import prisma from "../prisma/index";
import CreateGlicoseController from '../modules/Glicose/useCases/CreateGlicose/CreateGlicoseController';

const createGlicoseController = new CreateGlicoseController
const routeGlicose = Router()

routeGlicose.post("/", createGlicoseController.handle)

export default routeGlicose 