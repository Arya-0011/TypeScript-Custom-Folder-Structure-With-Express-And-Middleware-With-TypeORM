import bcrypt from 'bcrypt';
import { NextFunction, Response, Request } from "express";
import { MongoDataSource } from "../database/MongoDB";
import { User } from "../Entities/User";
import { structureResponse } from "../utils/StructureResponse";
import { InvalidCredentialsException, RegistrationFailedException, UserFailedException } from "../utils/Exceptions/AuthException";

export class UserService {

    private userRepository = MongoDataSource.getRepository(User);

    public allUser = async (req: Request, res: Response, next: NextFunction) => {

        try {

            const allUserData = await this.userRepository.find();
            return structureResponse(allUserData, true, "List of all Users")
        } catch (error) {
            return structureResponse(error, true, "List of all Users")
        }

    }

}