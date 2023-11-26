import { NextFunction, Response, Request } from "express";
import { MongoDataSource } from "../database/MongoDB";
import { User } from "../Entities/User";
import { structureResponse } from "../utils/StructureResponse";
import { InvalidCredentialsException, RegistrationFailedException, UserFailedException } from "../utils/Exceptions/AuthException";

export class BlogService {

    private userRepository = MongoDataSource.getRepository(User);

    public blog = async (req: Request, res: Response, next: NextFunction) => {

        return "HELLO WORLD"

    }

}