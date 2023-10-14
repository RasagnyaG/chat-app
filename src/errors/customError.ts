export default class CustomError extends Error {
  readonly statusCode: number;
  constructor(message: string, statuscode?: number | undefined) {
    super(message);
    this.statusCode = statuscode ?? 500;
  }
}
