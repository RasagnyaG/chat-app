import CustomError from "@/errors/customError";
import prisma from "@/prisma";
import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import NotFoundError from "@/errors/notFoundError";

const GET = async (req: NextApiRequest, res: NextApiResponse<User>) => {
  console.log("request made");
  try {
    const token: string = (req.headers["token"] as string).split(" ")[1];
    console.log("token", token);
    const jwtPayload = jwt.decode(token) as JwtPayload;
    console.log(jwtPayload);
    let id = "";
    if (jwtPayload && jwtPayload.id) id = jwtPayload.id;
    let user = await prisma.user.findFirst({ where: { id } });
    if (user) res.status(200).send(user);
    else throw new NotFoundError("Couldn't find the user");
  } catch (error: any) {
    throw new CustomError(error.message);
  }
};

export default GET;
