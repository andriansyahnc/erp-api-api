import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  const bearerToken = req.header('Authorization');
  const tokens = bearerToken?.split(" ");
  if (tokens.length <= 1) {
    throw new Error('UNAUTHORIZED');
  }
  next();
}
