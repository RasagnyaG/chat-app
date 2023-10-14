import CustomError from "./customError";

export default class BadRequestError extends CustomError {
  readonly statusCode = 400;
  constructor(message: string) {
    super(message);
  }
}
