import bcrypt from 'bcrypt';
import { NextFunction, Response, Request } from "express";
import { MongoDataSource } from "../database/MongoDB";
import { User } from "../Entities/User";
import { structureResponse } from "../utils/StructureResponse";
import { InvalidCredentialsException, RegistrationFailedException, UserFailedException } from "../utils/Exceptions/AuthException";
import jwtMiddleware from '../utils/Token';


export class AuthService {

    private userRepository = MongoDataSource.getRepository(User);


    private async isUserExist(email: string): Promise<boolean> {
        const existingUser = await this.userRepository.findOne({ where: { email } });
        return existingUser !== null;
    }

    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

    private async createUser(email: string, password: string, mobileNumber: string): Promise<void> {
        const newUser = new User();
        newUser.email = email;
        newUser.password = await this.hashPassword(password);
        newUser.mobileNumber = mobileNumber;
        newUser.username = mobileNumber + "@inceptive.co.in"
        newUser.status = true
        await this.userRepository.save(newUser);
    }

    public register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password, mobileNumber } = req.body;

            if (await this.isUserExist(email)) {
                return structureResponse(new RegistrationFailedException, false, "User already exists with the same Mobile number or email");
            }

            await this.createUser(email, password, mobileNumber);

            return structureResponse("User Created", true, "User Created Successfully");

        } catch (error) {
            return structureResponse(error, false, "Error Occurred");
        }
    }

    public login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;

            const user = await this.userRepository.findOne({ where: { email } });

            if (!user) {
                return structureResponse(new UserFailedException(), false, `User not found`);
            }

            const verifiedPassword = await bcrypt.compare(password, user.password);

            if (!verifiedPassword) {
                return structureResponse(new InvalidCredentialsException('Invalid email or password'), false, "Invalid email or password");
            } else if (!user.status) {
                return structureResponse(null, false, `User Blocked contact help desk`);
            }

            const token = jwtMiddleware.generateToken(user);

            req.session.user = {
                email: user.email,
                username: user.username,
            };

            const responseBody = {
                email: user.email,
                username: user.username,
                token
            };
            
            return structureResponse(responseBody, true, 'User logged in successfully');

        } catch (error) {
            return structureResponse(error, false, "Error Occurred");
        }
    }
}
