import { cred } from "../loader/ConfigLoader";

export class Exceptions extends Error {
    private code: number;
    private error: string;
    private status: number;
    private data: any[] | null;

    constructor(code: number, message: string, data?: any, status: number = 401) {
        super(message);
        if (cred.SERVER_ENV === "development") this.message = "Api Error: " + message;
        else this.message = message;
        this.name = "Api Error"
        this.code = code;
        this.error = this.constructor.name;
        this.status = status;
        this.data = data;
    }
}


export class DatabaseExceptions extends Error {
    private code: number;
    private error: string;
    private data: any[] | null;
    private isOperational: boolean;

    constructor(code: number, message: string, data?: any, isOperational: boolean = false, status: number = 404) {
        super(message);
        if (cred.SERVER_ENV === "development") this.message = "Database Error: " + message;
        else this.message = message;
        this.name = "Database Error";
        this.code = code;
        this.isOperational = isOperational;
        this.error = this.constructor.name;
        this.data = data;
    }
}

export default class AppError extends Error {
    status: string;
    isOperational: boolean;
    constructor(public statusCode: number = 500, public message: string) {
        super(message);
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}