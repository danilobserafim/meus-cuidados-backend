import { StatusCodes } from "http-status-codes"

export class DataBaseError {

    public readonly message: string
    public readonly statusCode: number

    constructor(message?: string) {
        this.message = 'database not found'
        this.statusCode = StatusCodes.BAD_GATEWAY
    }

}

export class UnfindedError {

    public readonly message: string
    public readonly statusCode: number

    constructor() {
        this.message = "nothing found"
        this.statusCode = StatusCodes.BAD_REQUEST
    }

}

export class UnauthorizedTokenError {

    public readonly message: string
    public readonly statusCode: number

    constructor() {
        this.message = "Unauthorized token"
        this.statusCode = StatusCodes.UNAUTHORIZED
    }

}

export class AlreadyExistsError {

    public readonly message: string
    public readonly statusCode: number

    constructor() {
        this.message = "Existing data" 
        this.statusCode = StatusCodes.CONFLICT
    }
}