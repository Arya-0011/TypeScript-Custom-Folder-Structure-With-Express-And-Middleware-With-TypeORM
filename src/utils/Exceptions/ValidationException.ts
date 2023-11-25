import { Exceptions } from "../../Libs/ErrorBaseException";
import { ErrorCodes } from "../ErrorCodes";

class InvalidPropertiesException extends Exceptions {
    constructor(message: string, data?: any) {
        super(ErrorCodes.InvalidPropertiesException, message, data);
    }
}

export {
    InvalidPropertiesException,
};
