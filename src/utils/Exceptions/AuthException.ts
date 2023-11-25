import { ErrorCodes } from "../ErrorCodes";
import { ErrorStatusCodes } from "../ErrorStatusCodes";
import { Exceptions } from "../../Libs/ErrorBaseException";

class UnauthorizedException extends Exceptions {
	constructor(message: string = "User unauthorized for action", data?: any) {
		super(ErrorCodes.UnauthorizedException, message, data);
	}
}

class TokenMissingException extends Exceptions {
	constructor(message: string = "Access denied. No token credentials sent", data?: any) {
		super(ErrorCodes.TokenMissingException, message, data);
	}
}

class TokenExpiredException extends Exceptions {
	constructor(message: string = "Authentication failed", data?: any) {
		super(ErrorCodes.TokenExpiredException, message, data);
	}
}

class TokenVerificationException extends Exceptions {
	constructor(message: string = "Authentication Failed", data?: any) {
		super(ErrorCodes.TokenVerificationException, message, data);
	}
}

class InvalidCredentialsException extends Exceptions {
	constructor(message: string, data?: any) {
		super(ErrorCodes.InvalidCredentialsException, message, data);
	}
}

class RegistrationFailedException extends Exceptions {
	constructor(message: string = "User failed to be registered", data?: any) {
		super(ErrorCodes.RegistrationFailedException, message, data, ErrorStatusCodes.RegistrationFailedException);
	}
}

class LoginFailedException extends Exceptions {
	constructor(message: string = "Login validation error", data?: any) {
		super(ErrorCodes.LoginFailedException, message, data, ErrorStatusCodes.LoginException);
	}
}

class UserFailedException extends Exceptions {
	constructor(message: string = "User not available for this Email", data?: any) {
		super(ErrorCodes.LoginFailedException, message, data, ErrorStatusCodes.LoginException);
	}
}

class UserNotLoggedIN extends Exceptions {
	constructor(message: string = "User not logged in", data?: any) {
		super(ErrorCodes.LoginFailedException, message, data, ErrorStatusCodes.LoginException);
	}
}

class UserHadNoPermission extends Exceptions {
	constructor(message: string = "User do not have permission", data?: any) {
		super(ErrorCodes.UserHadNoPermission, `User do not have permission for ${message}`, data, ErrorStatusCodes.Forbidden);
	}
}

class UserNotDeleted extends Exceptions {
	constructor(message: string = "User not Deleted", data?: any) {
		super(ErrorCodes.UserHadNoPermission, `User not deleted ${message}`, data, ErrorStatusCodes.Forbidden);
	}
}

export {
	TokenExpiredException,
	TokenMissingException,
	TokenVerificationException,
	InvalidCredentialsException,
	RegistrationFailedException,
	UnauthorizedException,
	LoginFailedException,
	UserFailedException,
	UserNotLoggedIN,
	UserHadNoPermission,
	UserNotDeleted
};