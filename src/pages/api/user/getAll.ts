import CustomError from "@/errors/customError";
import prisma from "@/prisma";
import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const GET = async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
  try {
    let userList = await prisma.user.findMany();
    res.status(200).send(userList);
  } catch (error: any) {
    throw new CustomError(error.message);
  }
};

export default GET;
