import CustomError from "./customError";

export default class ForbiddenError extends CustomError {
  readonly statusCode = 401;
  constructor(message: string) {
    super(message);
  }
}
