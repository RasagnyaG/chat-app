import prisma from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import NotFoundError from "@/errors/notFoundError";
import UnauthorizedError from "@/errors/unauthorizedError";
import CustomError from "@/errors/customError";

const POST = async (
  req: NextApiRequest,
  res: NextApiResponse<authResponse>
) => {
  let input = req.body;

  try {
    let user = await prisma.user.findUnique({ where: { email: input.email } });

    if (!user) throw new NotFoundError("User not found");

    let passwordIsValid = bcrypt.compareSync(input.password, user.password);

    if (!passwordIsValid) throw new UnauthorizedError("Invalid Password");

    const token =
      "Bearer " +
      jwt.sign({ email: user.email }, process.env.JWT_SECRET as string);

    res.status(200).send({ message: "Successfully Logged in", token: token });
  } catch (error: any) {
    console.log(error);
    throw new CustomError(error.message);
  }
};

export default POST;
