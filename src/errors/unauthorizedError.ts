import CustomError from "./customError";

export default class UnauthorizedError extends CustomError {
  readonly statusCode = 401;
  constructor(message: string) {
    super(message);
  }
}
