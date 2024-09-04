import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { UnauthorizedTokenError, UnfindedError } from "../errors/Erros";

export function checkTokenId(req:Request, res:Response, next:NextFunction) {
    const secret = process.env.JWT_KEY || ''
    try {
        const token = req.headers.authorization?.split(" ")[1] ?? ''
        const user: any = Jwt.verify(token, secret)
        if (user.id) {
            req.body.id = user.id
            next()
        }else{
            throw new UnauthorizedTokenError();
        }
    } catch (error) {
        throw new UnauthorizedTokenError();
    }
}