
import express, { NextFunction } from 'express'
import routeGlicose from "./routes/routeGlicose";
import { Request, Response } from 'express';
import routeUsers from './routes/routeUser';
import routeAuth from './routes/routAuth';
import morgan from "morgan";
import { AlreadyExistsError, DataBaseError, UnauthorizedTokenError, UnfindedError } from './errors/Erros';

const app = express();
app.use(express.json())
app.use(morgan("dev"))

app.get("/", (req: Request, res: Response)=>{
    res.send({
        message:"Bem vindo a api"
    })
})

app.use("/glicose", routeGlicose)
app.use("/users", routeUsers)
app.use("/auth", routeAuth)


app.use((err: Error, req: Request, res: Response) => {
    if (err instanceof DataBaseError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    } else if (err instanceof UnfindedError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }else if (err instanceof UnauthorizedTokenError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }else if (err instanceof AlreadyExistsError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    } else {
        return res.json({
            status: "Error",
            message: "Internal server error - " + err
        })
    }
})

app.listen(3333, () => console.log('server running on port 3333'))