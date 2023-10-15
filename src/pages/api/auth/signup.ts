import prisma from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AlreadyExistsError from "@/errors/alreadyExistsError";
import CustomError from "@/errors/customError";

const POST = async (
  req: NextApiRequest,
  res: NextApiResponse<authResponse>
) => {
  let input = req.body;
  console.log("here");
  try {
    let check = await prisma.user.findUnique({ where: { email: input.email } });

    if (check) throw new AlreadyExistsError("User already exists");

    const hash = bcrypt.hashSync(input.password, 10);
    const newUser = await prisma.user.create({
      data: {
        ...input,
        password: hash,
        preferences: input.preferences.join(">"),
      },
    });

    const token =
      "Bearer " +
      jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string);

    res.status(200).send({ message: "Signed up successfully", token: token });
  } catch (error: any) {
    if (error instanceof CustomError) throw error;
    else throw new CustomError(error.message);
  }
};

export default POST;
