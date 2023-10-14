import CustomError from "./customError";

export default class AlreadyExistsError extends CustomError {
  readonly statusCode = 409;
  constructor(message: string) {
    super(message);
  }
}
