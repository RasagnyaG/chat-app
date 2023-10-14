import CustomError from "./customError";

export default class NotFoundError extends CustomError {
  readonly statusCode = 404;
  constructor(message: string) {
    super(message);
  }
}
