import { ErrorCodes } from "../ErrorCodes";
import { ErrorStatusCodes } from "../ErrorStatusCodes";
import { Exceptions } from "../../Libs/ErrorBaseException";

class SomethingWentWrongException extends Exceptions {
    constructor(message: string, data?: any) {
        super(ErrorCodes.SomethingWentWrong, message, data, ErrorCodes.SomethingWentWrong);
    }
}

class InternalServerException extends Exceptions {
    constructor(message: string, data?: any) {
        super(ErrorCodes.InternalServerException, message, data, ErrorStatusCodes.InternalServerException);
    }
}

class InvalidEndpointException extends Exceptions {
    constructor(endpoint: string) {
        super(ErrorCodes.InvalidEndpointException, `Endpoint '${endpoint}' not found`, null, ErrorStatusCodes.InvalidEndpointException);
    }
}

class RequestMethodException extends Exceptions {
	constructor(method: string) {
		super(ErrorCodes.InvalidEndpointException, `Method '${method}' not allowed`, null, ErrorStatusCodes.InvalidEndpointException);
	}
}

class ContentTypeException extends Exceptions {
	constructor(method: string) {
		super(ErrorCodes.InvalidEndpointException, `Content-Type Missing of Invalid`, null, ErrorStatusCodes.InvalidEndpointException);
	}
}

class UnimplementedException extends Exceptions {
	constructor(message: string = "API unimplemented", data?: any) {
		super(ErrorCodes.UnimplementedException, message, data, ErrorStatusCodes.UnimplementedException);
	}
}

class HealthCheckFailedException extends Exceptions {
	constructor(data?: any) {
		super(ErrorCodes.HealthCheckFailedException, "API failed to run", data, ErrorStatusCodes.HealthCheckFailedException);
	}
}

export {
    SomethingWentWrongException,
    InternalServerException,
    InvalidEndpointException,
    RequestMethodException,
    ContentTypeException,
    UnimplementedException,
    HealthCheckFailedException
}