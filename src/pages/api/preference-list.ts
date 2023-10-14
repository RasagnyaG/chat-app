import CustomError from "@/errors/customError";
import { NextApiRequest, NextApiResponse } from "next";

const GET = async (req: NextApiRequest, res: NextApiResponse<string[]>) => {
  try {
    const preferences = [
      "Movies",
      "Star Wars",
      "F1",
      "Programming",
      "Travel",
      "Books",
      "Cooking",
      "Music",
      "Gaming",
      "Outdoor Activities",
    ];
    res.status(200).send(preferences);
  } catch (error: any) {
    throw new CustomError(error.message);
  }
};

export default GET;
